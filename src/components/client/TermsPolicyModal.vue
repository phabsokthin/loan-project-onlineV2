<template>


    <!-- component -->
    <div class="flex items-center justify-center font-sans bg-black">
        <div >
            <!-- Button to open the privacy policy modal -->
            <!-- Privacy Policy Modal -->
            <div x-show="showPrivacyPolicy" class="fixed inset-0 z-10 flex items-center justify-center">
                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                <div class="relative w-full max-w-screen-md m-4 overflow-hidden bg-black rounded-lg shadow-xl">
                    <!-- Modal panel -->
                    <div class="px-6 py-4">
                        <h3 class="text-lg font-medium leading-6 text-center text-white">Terms of Policy</h3>
                    </div>
                    <div class="max-w-screen-md p-6 space-y-5 overflow-y-auto prose text-white"
                        style="max-height: 70vh; border-radius: 0.375rem; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);">

                        <div class="space-y-1">
                            <p>Part A (Lender): LOAN ONLINE</p>
                            <p>Part B (Borrower): Jesus Dionisio</p>
                            <p>Cell phone number: +971564811435</p>
                        </div>

                        <div class="space-y-1">
                            <p>Installment Payment: 500000.00 PHP</p>
                            <p>Credit: 24 Months</p>
                        </div>

                        <div class="space-y-1">
                            "Installment Agreement", The Lender And The Borrower Agree To And Jointly Abide By This
                            Agreement. Adhering To The Principles Of Equity, Voluntary, Honesty And Reputation, There Is
                            No Consensus, This Small Loan Agreement Is Signed And Ensures Compliance And Performance By
                            The Parties. Article 1 Loan Form: Use An Unsecured ID Card To Request A Loan. Article 2
                            Premium Interest Rate:
                        </div>

                        <div class="space-y-1">
                            <h1 class="font-bold">Article 1</h1>
                            <p> Loan Form: Use An Unsecured ID Card To Request A Loan.</p>
                        </div>


                        <div class="space-y-1">
                            <h1 class="font-bold">Article 2</h1>
                            <p>Premium Interest Rate: Interest Rates, Fines, Service Charges Or Any Fees. Total Not More
                                Than 25% Per Year.</p>
                        </div>


                        <div class="space-y-1">
                            <h1 class="font-bold">Article 3</h1>
                            <p>(1) Pay Interest At The Same Time.</p>
                            <p>(2) To Give Capital On Time.</p>
                            <p>(3) If It Is Not Possible To Borrow Money From The Account Due To The Borrowers Problem,
                                The Borrower Should Cooperate With The Lender To Finalize The Payment.</p>
                            <p>(4) Comply With All The Terms Of The Contract.</p>
                        </div>


                        <div class="space-y-1">
                            <h1 class="font-bold">Article 4</h1>
                            <p>(1)After Signing This Contract, Both The Borrower And The Lender Must Comply With All
                                Requirements Of The Contract. If Either Party Breaches The Contract, The Other Party Has
                                The Right To Sue In Court. The Party Not Complying With This Will Have To Pay A Fine Of
                                50 Percent Of The Installment Amount If It Does Not Object.</p>
                            <p>(2) In The Event That The Credit Transfer Cannot Be Resolved Due To The Problems</p>
                        </div>

                        <div class="space-y-1">
                            <h1 class="font-bold">The Lender Has To Transfer The Funds.</h1>
                            <p>(3)For online borrowers without collateral, Lenders face the risk of lending. Borrowers
                                ,is show their financial status to the company to confirm their ability to repay the
                                debt. The borrow will then be able to withdraw the full loan amount from the account.
                            </p>
                        </div>


                        <div class="space-y-1">
                            <h1 class="font-bold">Article 5</h1>
                            <p>(1) The Borrower Has Entered Into This Agreement Completion Of Legal Formalities (If Any)
                                Relating To The Loan Under The Act, Such As Regulatory Delivery Of Government Permits,
                                Approvals, Registrations And Relevant Laws;</p>
                            <p>(2) Whether The Borrower Has Paid The Costs Associated With This Agreement (If Any);</p>
                            <p>(3) Whether The Borrower Has Complied With The Loan Terms Specified In This Agreement;
                            </p>
                            <p>(4) Whether The Business And Financial Position Of The Borrower Has Changed Adversely;
                            </p>
                            <p>(5) If The Borrower Breaches The Terms Specified In This Agreement.</p>
                        </div>

                        <div class="space-y-1">
                            <h1 class="font-bold">Article 6</h1>
                            <p>(1) The Borrower Cannot Use The Loan For Illegal Activities. Otherwise, The Lender
                                Reserves The Right To Require The Borrower To Repay The Principal And Interest Promptly
                                And The Legal Consequences Shall Be Borne By The Borrower.</p>
                            <p>(2) The Borrower Shall Repay The Principal And Interest Within The Period Specified In
                                The Contract. For The Overdue Portion, The Lender Is Entitled To Recover The Loan And
                                Collect 4% Of The Total Amount Due.</p>
                        </div>


                        <div class="space-y-1">
                            <h1 class="font-bold">Article 7</h1>
                            <p>Modification Or Termination Of Contract: In All Of The Above Provisions, Neither Party Is
                                Permitted To Modify Or Terminate The Contract Without Permission. When Either Party
                                Wishes To Bring To The Fore Such Facts In Accordance With The Provisions Of The Law, He
                                Must Notify The Other Party In Writing In Time For The Settlement. After This Agreement
                                Is Modified Or Terminated, The Borrower Shall Repay 30% To The Principal And Interest In
                                Accordance With The Terms Of This Agreement.</p>

                        </div>


                        <div class="space-y-1">
                            <h1 class="font-bold">Article 8</h1>
                            <p>Dispute Resolution: Both Parties Agree To Amend The Terms Of This Agreement Through
                                Negotiation. If The Negotiations Do Not Agree, You Can Ask The Local Arbitration
                                Committee To Mediate Or Bring The Matter To A Local Court.</p>

                        </div>

                        <div class="space-y-1">
                            <h1 class="font-bold">Article 9</h1>
                            <p>The Lender Assumes The Credit Risk Of The Borrower. Due To The "New Corona Pandemic", The
                                Central Office Requires Borrowers To Purchase Personal Accident Insurance. If The
                                Borrower Is Unable To Repay The Loan On Time Due To Force Majeure, The Lender May Ask
                                The Insurance Company To Assist In The Payment Of The Borrower S Loan And The Loan
                                Should Be Transferred To The Borrowers Account. Borrowing Is Specified In The Internal
                                Contract. Half An Hour After The Purchase, If The Borrower Signs The Contract But Does
                                Not Comply With The Terms, The Company Considers It A Serious Fraud And Will Take The
                                Credit Dispute To The People S Court. The Anti-Contract King Is Also Presented. After
                                Purchase, If The Lender Does Not Lend On Time, The Borrower Has The Right To Sue
                                Directly In The Local Court.</p>

                        </div>

                        <div class="space-y-1">
                            <h1 class="font-bold">Article 10</h1>
                            <p>This Short Loan Agreement Takes Effect From The Date Of Its Signing By Both Parties
                                (Including The Electronic Agreement). The Text Of The Contract Has The Same Legal
                                Effect. The Lender And Borrower Keep A Copy Of The Contract.</p>

                        </div>

                    </div>
                    <div class="flex flex-row justify-end gap-4 p-4 px-4 py-3 sm:px-6 align-items">
                        <button @click="handleClose" type="button"
                            class="inline-flex justify-center px-4 py-2 text-base font-medium text-white bg-red-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm">
                            Close</button>
                    </div>

                </div>
            </div>
        </div>

    </div>


</template>

<script>

export default {
 
    setup(props, { emit }) {

  




        const handleClose = () => {
            emit('close')
        }

        return { handleClose}
    }
}

</script>
