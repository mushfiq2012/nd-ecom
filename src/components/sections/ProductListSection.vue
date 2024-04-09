<template>

    <div class="py-6">
        <div class="flex justify-start items-baseline">
            <section-title :title="title"></section-title>
        </div>
        <div class="relative isolate flex items-center justify-center h-full flex-col -mx-3">
            <product-card v-if="isLoaded && imageLoaded" :result="result"></product-card>
        </div>
    </div>
</template>
<script>
import PostServices from '../../services/PostServices'
import ProductCard from '../cards/ProductCard.vue'
import SectionTitle from '../cards/SectionTitle.vue'
import { ref } from 'vue'
export default {
    components: { SectionTitle, ProductCard },
    data() {
        return {
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

            result: [
                {
                    id: 1,
                    title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
                    price: 40,
                    currency: "$",
                    shippingDays: 3,
                    afterDiscountPrice: 30,
                    productDescription: "",
                    url: new URL('../../assets/product1.webp', import.meta.url)
                },
                {
                    id: 2,
                    title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
                    price: 40,
                    currency: "$",
                    shippingDays: 4,
                    afterDiscountPrice: 30,
                    productDescription: "",
                    url: new URL('../../assets/product2.webp', import.meta.url)
                },
                {
                    id: 3,
                    title: "Costway 12V Kids Ride On Car ",
                    price: 40,
                    currency: "$",
                    shippingDays: 1,
                    afterDiscountPrice: 30,
                    productDescription: "",
                    url: new URL('../../assets/product3.webp', import.meta.url).href
                },
                {
                    id: 4,
                    title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
                    price: 40,
                    currency: "$",
                    shippingDays: 7,
                    afterDiscountPrice: 30,
                    productDescription: "",
                    url: new URL('../../assets/product4.webp', import.meta.url).href
                },
                {
                    id: 5,
                    title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
                    price: 40,
                    currency: "$",
                    shippingDays: 3,
                    afterDiscountPrice: 30,
                    productDescription: "",
                    url: new URL('../../assets/product5.webp', import.meta.url).href
                },
                {
                    id: 6,
                    title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
                    price: 40,
                    currency: "$",
                    shippingDays: 4,
                    afterDiscountPrice: 30,
                    productDescription: "",
                    url: new URL('../../assets/product6.webp', import.meta.url).href
                },
                {
                    id: 6,
                    title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
                    price: 40,
                    currency: "$",
                    shippingDays: 3,
                    afterDiscountPrice: 30,
                    productDescription: "",
                    url: new URL('../../assets/product6.webp', import.meta.url).href
                },
            ],
            title: null,
            isLoaded: false,
            imageLoaded: false

        }

    },
    created() {
        this.fetchProducts();
        //this.processMultipleArray();
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await PostServices.getProducts();
                //this.result = response.result.data
                this.title = response.result.label
                this.isLoaded = true;
                console.log('here')
                console.log(response);// Call filterData method with fetched data

                this.loadImage(response.result)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        async handleImageLoad() {
            this.imageLoaded = true;
        },
        async loadImage(response) {
            //console.log('loadImage')
            // console.log(this.specialItems)
            const updatedResult = {
                ...response,
                data: response.data.map(item => ({ ...item, url: new URL('../../assets/' + item.url, import.meta.url).href }))
            };
            this.result = updatedResult.data;

            //console.log(updatedResult);
            this.handleImageLoad()
            //let im = await new URL('../../assets/' + path, import.meta.url).href
            //return im
            // this.img = new Image()
            // this.img.src = new URL('../../assets/' + path, import.meta.url).href
            // this.img.onload = await this.handleImageLoad()
            // console.log(this.i)
            // console.log(this.img)
            //return i.href;
        }
    }
}
</script>