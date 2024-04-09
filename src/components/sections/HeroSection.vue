<template>

    <div class="pt-6">
        <div class="relative isolate flex items-center justify-center  h-full flex-col  -mx-3">

            <div class="w-[100%] grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:gap-4">
                <hero-component v-if="isLoaded" :response="componentData"></hero-component>
                <hero-card-component v-if="isLoaded2" :specialItems="cardData"
                    :customStyles="customStyle"></hero-card-component>
            </div>
        </div>
    </div>
</template>
<script>
import HeroComponent from '../hero-section/HeroComponent.vue'
import HeroCardComponent from '../hero-section/HeroCardComponent.vue'
import PostServices from '../../services/PostServices.js'
export default {
    components: { HeroCardComponent, HeroComponent },
    data() {
        return {
            isLoaded: false,
            isLoaded2: false,
            customStyle: "rounded-full w-[105px] h-[105px] min-w-[105px]",
            cardData: null,
            componentData: [],
            specialItems: [{
                id: 1,
                label: "Anniversary deals",
                data: [
                    {
                        id: 1,
                        name: 'Shop all',
                        url: new URL('../../assets/roundimage5.webp', import.meta.url)
                    },
                    {
                        id: 2,
                        name: 'Anniversary deals flyer',
                        url: new URL('../../assets/roundimage6.webp', import.meta.url)
                    },
                    {

                        id: 3,
                        name: ' Grocery',
                        url: new URL('../../assets/roundimage7.webp', import.meta.url)
                    },
                    {
                        id: 4,
                        name: 'Outdoor living',
                        url: new URL('../../assets/roundimage8.webp', import.meta.url)
                    }
                ]
            }]


        }

    },
    created() {
        this.fetchHeroComponetData();
        this.fetchDepartmentPromotionsData();
    },
    methods: {
        async fetchHeroComponetData() {
            try {
                const response = await PostServices.getHeroComponent();
                this.componentData.push(response.result.data[0])
                this.isLoaded = true;
                //console.log(this.componentData);// Call filterData method with fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async fetchDepartmentPromotionsData() {
            try {
                const response = await PostServices.getDepartmentPromotions();
                this.cardData = response.result
                this.isLoaded2 = true;
                //console.log(response);// Call filterData method with fetched data
            } catch (error) {
                // console.error('Error fetching data:', error);
            }
        },
        // filterData(result) {
        //     console.log(result); // Do something with the filtered result
        // }
    }
}
</script>