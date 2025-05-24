<template>

    <div class="my-3 text-center">
        <h1 class="font-mono text-2xl">Contract</h1>
    </div>

    <div class="space-y-4 font-meduim"  v-for="usDoc in userDoc" :key="usDoc">
        <div v-for="phoneDoc in userPhoneDoc" :key="phoneDoc">
            <p>Name of the Borrower: {{ usDoc.name }}</p>
            <p>ID Number: {{ usDoc.idNumber }}</p>
            <p>Registered Phone Number: {{ phoneDoc?.phone }}</p>
            <p>Loan Amount Applied: {{ usDoc?.amount }} ₱</p>
            <p>Repayment Period: {{ usDoc?.term }} Months</p>
            <p>Interest Rate: {{ usDoc?.interestRate }}%</p>
            <p>Monthly Repayment: {{ usDoc?.monthlyPayment }} ₱</p>
            <p>Beneficiary Name: {{ usDoc?.bankName }}</p>
        </div>

        <p>Parties; Party A as the “Lender” and Party B as the “Borrower”.</p>
        <p>The Party A agrees loaning certain monies (the “Loan”) to the Party B, and the Party B repaying the Loan to
            the Party A, the Parties agree to keep, perform and fulfil the promises and conditions set out in this Loan
            Agreement.</p>
        <p>“Loan Agreement”, both Parties agree to and jointly abide by this agreement. adhering to the principles of
            equity, voluntary, honesty and reputation, there is no consensus, this Loan Agreement is signed and ensures
            compliance and performance by the parties.</p>
        <div>
            <p>Article 1</p>
            <p>Loan Form: Use an unsecured ID card to request a loan.</p>
        </div>
        <div>
            <p>Article 2</p>
            <p>Premium interest rate:
                Interest rates, fines, service charges or any fees. Total not more than 25% per year.</p>
        </div>
        <div>
            <p>Article 3</p>
            <p>During the loan tenure, the Party B has to:</p>
            <p>(1) Pay interest at the same time;</p>
            <p>(2) To give principal on time;</p>
            <p>(3) If it is not possible to borrow money from the account due to the Party B problem, the Party B should
                cooperate with the Party A to finalize the payment;</p>
            <p>(4) Comply with all the terms of the contract.</p>
        </div>
        <div>
            <p>Article 4</p>
            <p>(1) In case the Party B borrows online without using collateral, the Party A is at risk of lending. The
                Party B must have a borrower risk coverage fee to check the liquidity of the Party B's personal loan
                minimum repayment. Must be verified for financial liquidity;</p>
            <p>(2) In the case of online Party B without collateral, The Party A run the risk of lending. Party B must
                show their financial status to the Party A to confirm their ability to repay their debts. The Party B
                will withdraw the full amount of the loan account;</p>
            <p>(3) In the event that the credit transfer cannot be resolved due to the problems of the Party B, the
                Party A has the right to request the Party B to assist in handling it. After completing this operation,
                the Party A has to transfer the funds;</p>
            <p>(4) The Party B shall repay the loan principal and interest within the period specified in the contract.
                If the Party B wants to apply for loan extension, he/she has to disburse it 5 days before the contract
                period;</p>
            <p>(5) If the Party B does not repay on time on the stipulated repayment date, penalty interest will be
                calculated after three days at 0.5% per month.</p>

        </div>
        <div>
            <p>Article 5</p>
            <p>Party A: Before granting a loan, the Party A has the right to consider the following matters and take a
                decision to grant the loan as a result of the review:</p>
            <p>(1) The Party B has entered into this Loan Agreement completion of legal formalities (if any) relating to
                the loan under the act, such as regulatory delivery of government permits, approvals, registrations and
                relevant laws;</p>
            <p>(2) Whether the Party B has paid the costs associated with this Loan Agreement (if any);</p>
            <p>(3) Whether the Party B has complied with the loan terms specified in this Loan Agreement;</p>
            <p>(4) Whether the business and financial position of the Party B has changed adversely;</p>
            <p>(5) If the Party B breaches the terms specified in this Loan Agreement.</p>
        </div>
        <div>
            <p>Article 6</p>
            <p>(1) The Party B cannot use the loan for illegal activities. Otherwise, the Party A reserves the right to
                require the Party B to repay the principal and interest promptly and the legal consequences shall be
                borne by the Borrower;</p>
            <p>(2) The Party B shall repay the principal and interest within the period specified in the contract. For
                the overdue portion, the Party A is entitled to recover the loan and collect 5% of the total amount due.
            </p>
        </div>
        <div>
            <p>Article 7</p>
            <p>Modification or termination of contract: In all of the above provisions, neither Party is permitted to
                modify or terminate the contract without permission. When either Party wishes to bring to the fore such
                facts in accordance with the provisions of the law, he/she must notify the other party in writing in
                time for the settlement. After this Loan Agreement is modified or terminated, the Party B shall repay
                30% to the principal and interest in accordance with the terms of this Loan Agreement.</p>
        </div>
        <div>
            <p>Article 8</p>
            <p>Dispute Resolution: Both Parties agree to amend the terms of this Loan Agreement through negotiation. If
                the negotiations do not agree, you can ask the local arbitration committee to mediate or bring the
                matter to a local court.</p>
        </div>
        <div>
            <p>Article 9</p>
            <p>The Party A assumes the credit risk of the Party B. Due to the "new corona pandemic", the central office
                requires Party B to purchase personal accident insurance. If the Party B is unable to repay the loan on
                time due to force mature, the lender may ask the insurance company to assist in the payment of the Party
                B's loan and the loan should be transferred to the Party B's account. Borrowing is specified in the
                internal contract. Half an hour after the purchase, if the Party B signs the contract but does not
                comply with the terms, the Party A considers it a serious fraud and will take the credit dispute to the
                local court. The alternative contract proposal is also presented. After purchase, if the Party A does
                not provide on time of promise, the Party B has the right to sue directly in the local court.</p>
        </div>
        <div>
            <p> Article 10</p>
            <p>This Loan Agreement takes effect from the date of its signing by any party (including the electronic
                agreement). The context of the contract has the same legal effect. The both Party keep a copy of the
                contract.</p>
        </div>
        <div>
            <p>Party A: Credit provider.</p>
            <p>Party B: Credit receiver.</p>

            <img :src="usDoc?.assigned_image" alt="">
            
        </div>
    </div>

    <!-- <pre>{{ userPhoneDoc }}</pre> -->
</template>

<script>
// import getUser from '@/firebase/getUser';
import getCollectionQueryTerm from '@/firebase/getCollectionQueryTerm';
import { documentId, where } from 'firebase/firestore';
import { watch } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';


export default {
    setup() {

        // const {user} = getUser()

        const userDoc = ref(null)
        const userPhoneDoc= ref(null)


        const route = useRoute()

        watch(
            () => route.params.id,
            async (newUid) => {
                if (newUid) {
                    const { documents } = await getCollectionQueryTerm('customers', where(documentId(), '==', newUid));
                    console.log("documents", documents);
                    watch(() => {
                        userDoc.value = documents.value || null;
                    })

                }
            },
            { immediate: true }
        );


        watch(
            () => route.params.id,
            async (newUid) => {
                if (newUid) {
                    const { documents } = await getCollectionQueryTerm('users', where(documentId(), '==', newUid));
                    console.log("documents", documents);
                    watch(() => {
                        userPhoneDoc.value = documents.value || null;
                    })

                }
            },
            { immediate: true }
        );

        return { userDoc,userPhoneDoc }

    }
}


</script>