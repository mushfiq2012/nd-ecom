<template>
    <div class="py-6">
        <div class="flex justify-start items-baseline">
            <section-title v-if="sectionTitle" :title="result.label"></section-title>
        </div>
        <div class="relative isolate  flex items-center justify-center h-full flex-col -mx-3">

            <div class="w-[100%] grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:gap-4">
                <!-- <div class="col-span-1 grid-flow-col gap-4"> -->
                <div class="" v-for="(item, index) in result.data" :key="index">
                    <flat-image-card :item="item"></flat-image-card>
                </div>
                <!-- <div class=""><flat-image-card></flat-image-card></div>
                <div class=""><flat-image-card></flat-image-card></div> -->
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>
<script>
// import PostServices from '../../services/PostServices.js'
import FlatImageCard from '../cards/FlatImageCard.vue'
import SectionTitle from '../cards/SectionTitle.vue'
import { ref } from 'vue'
export default {
    components: { FlatImageCard, SectionTitle },
    props: ['result'],
    data() {
        return {
            isLoaded: false,
            sectionTitle: "Deals & your fave brands",
            customStyle: "rounded-full w-[105px] h-[105px] min-w-[105px]",
            specialItems: {
                id: 1,
                label: "Anniversary deals",
                data: [
                    {
                        id: 1,
                        name: 'Shop all',
                        url: new URL('../assets/roundimage5.webp', import.meta.url)
                    },
                    {
                        id: 2,
                        name: 'Anniversary deals flyer',
                        url: new URL('../assets/roundimage6.webp', import.meta.url)
                    },
                    {

                        id: 3,
                        name: ' Grocery',
                        url: new URL('../assets/roundimage7.webp', import.meta.url)
                    },
                    {
                        id: 4,
                        name: 'Outdoor living',
                        url: new URL('../assets/roundimage8.webp', import.meta.url)
                    }
                ]
            }, specialItems2: {
                id: 1,
                label: "Anniversary deals",
                data: [
                    {
                        id: 1,
                        name: 'Grocery',
                        url: new URL('../assets/roundimage1.webp', import.meta.url)
                    },
                    {
                        id: 1,
                        name: 'Clothing, shoes & accessories',
                        url: new URL('../assets/roundimage2.webp', import.meta.url)
                    },
                    {
                        id: 1,
                        name: 'Electornics',
                        url: new URL('../assets/roundimage3.webp', import.meta.url)
                    },
                    {
                        id: 1,
                        name: 'Toys',
                        url: new URL('../assets/roundimage4.webp', import.meta.url)
                    },
                    {
                        id: 1,
                        name: 'Shop all',
                        url: new URL('../assets/roundimage5.webp', import.meta.url)
                    },
                    {
                        id: 1,
                        name: 'Shop all',
                        url: new URL('../assets/roundimage5.webp', import.meta.url)
                    },
                    {
                        id: 2,
                        name: 'Anniversary deals flyer',
                        url: new URL('../assets/roundimage6.webp', import.meta.url)
                    },
                    {

                        id: 3,
                        name: ' Grocery',
                        url: new URL('../assets/roundimage7.webp', import.meta.url)
                    }
                ]
            },
            url: ref(new URL(`../assets/roundimage1.webp`, import.meta.url).href),

            // result: [
            //     {
            //         id: 1,
            //         title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 3,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: "https://i5.walmartimages.com/asr/b2f080ee-1a82-49d6-b781-599adbd31c63.851d23808b80a9c15a8f41ff168329e8.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF"
            //     },
            //     {
            //         id: 2,
            //         title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 4,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: new URL('../assets/product2.webp', import.meta.url)
            //     },
            //     {
            //         id: 3,
            //         title: "Costway 12V Kids Ride On Car ",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 1,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: new URL('../assets/product3.webp', import.meta.url).href
            //     },
            //     {
            //         id: 4,
            //         title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 7,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: new URL('../assets/product4.webp', import.meta.url).href
            //     },
            //     {
            //         id: 5,
            //         title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 3,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: new URL('../assets/product5.webp', import.meta.url).href
            //     },
            //     {
            //         id: 6,
            //         title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 4,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: new URL('../assets/product6.webp', import.meta.url).href
            //     },
            //     {
            //         id: 6,
            //         title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 3,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: new URL('../assets/product6.webp', import.meta.url).href
            //     },
            // ]

        }

    }
}
</script>