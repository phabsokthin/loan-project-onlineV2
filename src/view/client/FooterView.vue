<template>
    <footer
        class='flex flex-col justify-between py-[6%] px-[4%]  text-white text-center p-4 w-full h-auto relative bg-[oklch(58.8%_0.158_241.966)] opacity-80  shadow-sm border '>
      
        <div class="z-40 flex flex-col items-start w-full">
           <div class="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-chevrons-right">
                <path d="m6 17 5-5-5-5" />
                <path d="m13 17 5-5-5-5" />
            </svg>
            <h1 class="text-lg  md:text-2xl">SIGN-UP FOR YOUR LOAN</h1>
           </div>
            <div class="flex flex-col w-full py-8 text-white">
                <!-- <div class="flex">
                    <div class="flex w-full py-3">
                        <input type="text" placeholder="Enter your email here"
                            class="w-full p-4 text-black bg-white border-2 border-r-0 outline-none focus:border-blue-500 focus:border-r-0 " />
                    </div>
                    <div class="flex py-3">
                        <button
                            class="w-full p-2 text-sm text-white bg-blue-600 shadow-xl rounded-e-lg hover:bg-blue-500">Subscribe</button>
                    </div>
                </div> -->
                <div class="flex py-3 pb-20 md:pb-0">
                    <div class="flex text-sm ">
                        <p class="font-bold ">© {{ currentYear }} By LoanOnline Service. All
                            Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<script>

export default {
    setup() {

        const currentYear = new Date().getFullYear();

        return {
            currentYear
        }

    }
}

</script>