import { ref } from "vue";
import { collection, query, orderBy, limit, startAfter, onSnapshot, getDocs } from "firebase/firestore";
import { projectFirestore } from "@/config/config"; // Import your Firestore instance

export const useFirestorePagination = (collectionName, pageSize = 10) => {
    const data = ref([]);
    const error = ref(null);
    const currentPage = ref(1);
    const totalPages = ref(0);
    const pageRange = ref([]);
    const lastVisible = ref(null);
    const lastVisibleStack = ref([]); // Stack to keep track of lastVisible documents for each page
    const pageHasData = ref([]); // Track if each page has data

    // Fetch total number of pages (this part is not real-time, only for initial calculation)
    const fetchTotalPages = async () => {
        try {
            const snapshot = await getDocs(collection(projectFirestore, collectionName));
            const totalItems = snapshot.size;
            totalPages.value = totalItems > 0 ? Math.ceil(totalItems / pageSize) : 0;
            updatePageRange(); // Update the page range based on the new totalPages
        } catch (err) {
            error.value = `Error fetching total pages: ${err.message}`;
        }
    };

    // Real-time data fetching using onSnapshot
    const getDataRealTime = (page = 1) => {
        let queryConstraints = [
            orderBy("createdAt", "desc"),
            limit(pageSize),
        ];

        if (page > 1 && lastVisibleStack.value[page - 2]) {
            queryConstraints.push(startAfter(lastVisibleStack.value[page - 2]));
        }

        const rewardQuery = query(collection(projectFirestore, collectionName), ...queryConstraints);

        // Using onSnapshot for real-time updates
        const unsubscribe = onSnapshot(
            rewardQuery,
            (snapshot) => {
                if (!snapshot.empty) {
                    data.value = snapshot.docs.map((doc) => ({
                        id: doc.id, // Include the document ID
                        ...doc.data(), // Include the document data
                    }));
                    lastVisible.value = snapshot.docs[snapshot.docs.length - 1]; // Update the last visible document for pagination
                    lastVisibleStack.value[page - 1] = lastVisible.value; // Store the lastVisible document for this page
                    error.value = null; // Reset error state if data is fetched successfully
                    pageHasData.value[page - 1] = true; // Mark this page as having data
                } else {
                    data.value = [];
                    error.value = "No more data available.";
                    pageHasData.value[page - 1] = false; // Mark this page as empty
                }
                updatePageRange(); // Recalculate the page range after data is fetched
            },
            (err) => {
                error.value = `Error fetching data: ${err.message}`;
            }
        );

        // Cleanup function to stop listening when no longer needed
        return () => unsubscribe();
    };

    // Update the page range based on the total number of pages and data availability
    const updatePageRange = () => {
        const range = [];
        
        // Loop through pages to check if they have data
        for (let i = 1; i <= totalPages.value; i++) {
            // Only add pages with data
            if (pageHasData.value[i - 1]) {
                range.push(i);
            }
        }
        
        pageRange.value = range;
    };

    // Go to a specific page
    const goToPage = (page) => {
        if (page <= totalPages.value && page > 0) {
            currentPage.value = page;
            getDataRealTime(page);
        }
    };

    // Load the previous page
    const loadPreviousPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
            getDataRealTime(currentPage.value);
        }
    };

    // Load the next page
    const loadNextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
            getDataRealTime(currentPage.value);
        }
    };

    return {
        data,
        error,
        currentPage,
        pageRange,
        totalPages,
        loadPreviousPage,
        loadNextPage,
        goToPage,
        fetchTotalPages,
        getDataRealTime,
    };
};