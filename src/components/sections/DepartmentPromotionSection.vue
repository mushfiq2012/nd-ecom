<template>
    <div class="py-6">
        <div class="flex justify-start items-baseline">
            <section-title title="See what's new"></section-title>
        </div>
        <div class="relative isolate  flex items-center justify-center h-full flex-col -mx-3">

            <div class="w-[100%] grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <div class="w-[100%]" v-for="(item, index) in result" :key="index">
                    <round-image-card :specialItems="item" :customStyles="customStyle" :url="url"></round-image-card>
                </div>
                <!-- <div class="w-[100%]">
                    <round-image-card :specialItems="specialItems" :customStyles="customStyle"
                        :url="url"></round-image-card>
                </div>
                <div class="w-[100%]">
                    <round-image-card :specialItems="specialItems" :customStyles="customStyle"
                        :url="url"></round-image-card>
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import PostServices from '../../services/PostServices'
import { ref } from 'vue'
import SectionTitle from '../cards/SectionTitle.vue'
import RoundImageCard from '../cards/RoundImageCard.vue'
export default {
    components: { SectionTitle, RoundImageCard },
    data() {
        return {
            isLoaded: false,
            imageLoaded: false,
            cardData: [],
            customStyle: "rounded-full w-[105px] h-[105px] min-w-[105px]",
            specialItems: {
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
                        name: 'Anniversary data flyer',
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
            }, specialItems2: {
                id: 1,
                label: "Anniversary deals",
                data: [
                    {
                        id: 1,
                        name: 'Grocery',
                        url: new URL('../../assets/roundimage1.webp', import.meta.url)
                    },
                    {
                        id: 1,
                        name: 'Clothing, shoes & accessories',
                        url: new URL('../../assets/roundimage2.webp', import.meta.url)
                    },
                    {
                        id: 1,
                        name: 'Electornics',
                        url: new URL('../../assets/roundimage3.webp', import.meta.url)
                    },
                    {
                        id: 1,
                        name: 'Toys',
                        url: new URL('../../assets/roundimage4.webp', import.meta.url)
                    },
                    {
                        id: 1,
                        name: 'Shop all',
                        url: new URL('../../assets/roundimage5.webp', import.meta.url)
                    },
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
                    }
                ]
            },
            url: ref(new URL(`../../assets/roundimage1.webp`, import.meta.url).href),

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
            //         url: new URL('../../assets/product2.webp', import.meta.url)
            //     },
            //     {
            //         id: 3,
            //         title: "Costway 12V Kids Ride On Car ",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 1,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: new URL('../../assets/product3.webp', import.meta.url).href
            //     },
            //     {
            //         id: 4,
            //         title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 7,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: new URL('../../assets/product4.webp', import.meta.url).href
            //     },
            //     {
            //         id: 5,
            //         title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 3,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: new URL('../../assets/product5.webp', import.meta.url).href
            //     },
            //     {
            //         id: 6,
            //         title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 4,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: new URL('../../assets/product6.webp', import.meta.url).href
            //     },
            //     {
            //         id: 6,
            //         title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
            //         price: 40,
            //         currency: "$",
            //         shippingDays: 3,
            //         afterDiscountPrice: 30,
            //         productDescription: "",
            //         url: new URL('../../assets/product6.webp', import.meta.url).href
            //     },
            // ]
            result: null
        }

    },
    created() {
        this.fetchSeasonalDepartmentPromotionData();
        //this.processMultipleArray();
    },
    methods: {
        async fetchSeasonalDepartmentPromotionData() {
            try {
                const response = await PostServices.getSeasonalDepartmentPromotion();
                //this.result = response.result
                this.isLoaded = true;
                //console.log(response);// Call filterData method with fetched data

                this.loadImage(response.result)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async handleImageLoad() {
            this.imageLoaded = true;
        },
        async loadImage(response) {
            console.log('loadImage')
            // response.forEach(element => {
            //     console.log(element)
            //     element.data = element.data.map(item => ({
            //         ...item, url: new URL('../../assets/' + item.url, import.meta.url).href
            //     }))

            // });
            // const updatedResult = {
            //     ...response,
            //     data: response.map(item => ({ ...item, url: new URL('../../assets/' + item.url, import.meta.url).href }))
            // };
            this.result = response;

            console.log(this.result);
            this.handleImageLoad()
            //this.processMultipleArray(updatedResult)
        },
        // processMultipleArray(response) {
        //     //const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        //     // Calculate the length of each subarray
        //     const subarrayLength = Math.ceil(response.data.length / 3);

        //     // Split the array into three smaller arrays
        //     const subarrays = [];
        //     for (let i = 0; i < response.data.length; i += subarrayLength) {
        //         subarrays.push(response.data.slice(i, i + subarrayLength));
        //     }

        //     console.log("subarrays");
        //     const newArr = { ...response, data: subarrays }
        //     console.log(newArr)
        //     //this.loadImage(newArr)

        // }
        // filterData(result) {
        //     //console.log(result); // Do something with the filtered result
        // }
    }
}
</script>