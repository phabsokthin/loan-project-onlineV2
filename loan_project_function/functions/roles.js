const { onRequest } = require("firebase-functions/v2/https");
const admin = require('firebase-admin');
const cors = require('cors');

// Global CORS options
const corsOptions = cors({
    origin: 'http://localhost:8080', // Update with your frontend URL
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
});


// Helper function for applying CORS
const applyCors = (req, res, callback) => {
    corsOptions(req, res, () => {
        if (req.method === 'OPTIONS') {
            return res.status(204).send('');
        }
        callback();
    });
};

// Cloud Function to create a student
// exports.createStudent = onRequest((req, res) => {
//     applyCors(req, res, async () => {
//         if (req.method !== 'POST') {
//             return res.status(405).send('Method Not Allowed');
//         }

//         const { firstName, lastName, email, dateOfBirth, enrollmentDate, major } = req.body;

//         // Validate input
//         if (!email || !firstName || !lastName) {
//             return res.status(400).send('Missing required fields: email, firstName, lastName');
//         }

//         try {
//             const userRecord = await admin.auth().createUser({
//                 email,
//                 displayName: `${firstName} ${lastName}`,
//                 emailVerified: false,
//                 password: 'defaultPassword',
//             });

//             const claims = {
//                 firstName,
//                 lastName,
//                 dateOfBirth,
//                 enrollmentDate,
//                 major,
//                 role: 'student',
//             };

//             // Set custom claims for the user
//             await admin.auth().setCustomUserClaims(userRecord.uid, claims);

//             return res.status(201).send(`Student created successfully: ${userRecord.uid}`);
//         } catch (error) {
//             console.error('Error creating student:', error);
//             return res.status(500).send('Internal Server Error');
//         }
//     });
// });


// Cloud Function to get all student claims
// exports.getAllStudentClaimsV2 = onRequest((req, res) => {
//     applyCors(req, res, async () => {
//         if (req.method !== 'GET') {
//             return res.status(405).send('Method Not Allowed');
//         }

//         try {
//             const students = [];
//             let nextPageToken;

//             do {
//                 const listUsersResult = await admin.auth().listUsers(100, nextPageToken);
//                 nextPageToken = listUsersResult.pageToken;

//                 listUsersResult.users.forEach(user => {
//                     if (user.customClaims && user.customClaims.role === 'student') {
//                         students.push({
//                             uid: user.uid,
//                             email: user.email,
//                             claims: user.customClaims,
//                         });
//                     }
//                 });
//             } while (nextPageToken);

//             return res.status(200).json({
//                 success: true,
//                 students,
//             });
//         } catch (error) {
//             console.error('Error retrieving student claims:', error);
//             return res.status(500).send('Internal Server Error');
//         }
//     });
// });

// Cloud Function to delete a student


//for role supperAdmin collection
exports.deleteUserV2 = onRequest((req, res) => {
    applyCors(req, res, async () => {
        if (req.method !== 'DELETE') {
            return res.status(405).send('Method Not Allowed');
        }

        const uid = req.query.uid;

        if (!uid) {
            return res.status(400).send('Missing required field: uid');
        }

        try {
            await admin.auth().deleteUser(uid);

            const userDocRef = admin.firestore().collection('roles').doc(uid);
            await userDocRef.delete();

            return res.status(200).send(`User with UID ${uid} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting users:', error);
            return res.status(500).send('Internal Server Error');
        }
    });
});



//for user collection 
exports.deleteUserRegisterV2 = onRequest((req, res) => {
    applyCors(req, res, async () => {
        if (req.method !== 'DELETE') {
            return res.status(405).send('Method Not Allowed');
        }

        const uid = req.query.uid;

        if (!uid) {
            return res.status(400).send('Missing required field: uid');
        }

        try {
            await admin.auth().deleteUser(uid);
            const userDocRef = admin.firestore().collection('users').doc(uid);
            await userDocRef.delete();

            return res.status(200).send(`User with UID ${uid} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting users:', error);
            return res.status(500).send('Internal Server Error');
        }
    });
});


// delete all customers and users
exports.deleteAllUserRegisterV2WithCustomersRequest = onRequest((req, res) => {
    applyCors(req, res, async () => {
        if (req.method !== 'DELETE') {
            return res.status(405).send('Method Not Allowed');
        }

        const uid = req.query.uid;

        if (!uid) {
            return res.status(400).send('Missing required field: uid');
        }

        try {
            // Delete from Firebase Auth
            await admin.auth().deleteUser(uid);

            // Delete from Firestore: users and customers collections
            const userDocRef = admin.firestore().collection('users').doc(uid);
            const customerDocRef = admin.firestore().collection('customers').doc(uid);

            await customerDocRef.delete();
            await userDocRef.delete();

            return res.status(200).send(`User with UID ${uid} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting users:', error.message);
            return res.status(500).send('Internal Server Error');
        }
    });
});
