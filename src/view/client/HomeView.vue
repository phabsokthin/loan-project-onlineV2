<template>
    <div>
        <div class="hidden lg:block" v-motion-fade>
            <NavbarComponent />
            <SliderComponent />
            <HomeComponent />
            <LoanRecheiveCardComponent />
            <FooterView />

        </div>
        <div class="lg:hidden">
            <MobileView />
            <SliderComponent />
            <HomeComponent />
            <LoanRecheiveCardComponent />
            <FooterView/>

        </div>
    </div>
</template>

<script>
import getCollection from '@/firebase/getCollection';
import NavbarComponent from '@/components/client/NavbarComponent.vue';
import SliderComponent from '@/components/client/SliderComponent.vue';
import MobileView from './MobileView.vue';
import HomeComponent from '@/components/client/HomeComponent.vue';
import LoanRecheiveCardComponent from '@/components/client/LoanRecheiveCardComponent.vue';
import FooterView from '@/view/client/FooterView.vue'


export default {
    components: {
        NavbarComponent,
        SliderComponent,
        MobileView,
        HomeComponent,
        LoanRecheiveCardComponent,
        FooterView
    },
    setup() {

        const { document: customer } = getCollection('customer');
        return { customer };
    }
}
</script>
