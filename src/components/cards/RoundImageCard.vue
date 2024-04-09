<template>
    <!-- <div
        class=" lg:border-grey-200 lg:border-1 lg:col-span-1 md:col-span-2 col-span-2 shadow-2 lg:w-full flex flex-col items-center bg-zinc-100 rounded-lg md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-zinc-100 dark:hover:bg-gray-700"> -->
    <!-- <img class=" object-cover w-full rounded-t-lg h-96 sm:h-60 md:h-full md:w-full md:rounded-none md:rounded-s-lg"
            src="../../assets/hero2.png" alt=""> -->
    <div class="h-96 px-3 bg-zinc-100 border border-gray-200 rounded-lg shadow-2 w-full">
        <div class="grid lg:grid-rows-[33.33%] grid-cols-2 gap-10 w-full">
            <div class="row-span-1 col-span-2 h-5">
                <h5 class="text-center -mb-none text-md font-serif font-bold tracking-tight text-black dark:text-black">

                    {{ specialItems.label }}
                </h5>
            </div>
            <round-image-component :specialItems="specialItems" :customStyles="customStyles"></round-image-component>
            <!-- <div class="w-full  " v-for="(item, index) in specialItems.data" :key="index">
                <a href="" class="sp flex justify-center items-center">
                    <img :class="`${colorVariants.blue}`" :src="item.url" alt="image description">
                </a>
                <div class="w-full text-center">
                    <span class="">{{ item.name }}</span>
                </div>
            </div> -->

        </div>
    </div>
</template>

<script>
// import { ref } from 'vue'
// export default {
//     props: ['customStyle', 'specialItems'],
//     setup(props) {
//         const styleData = ref(props.customStyle)
//         const specialItemsData = ref(props.specialItems)
//         console.log(styleData)
//         // const specialItems = {
//         //     id: 1,
//         //     label: "Anniversary data",
//         //     data: [
//         //         {
//         //             id: 1,
//         //             name: 'Shop all',
//         //             url: '@/assets/roundimage1.webp'
//         //         },
//         //         {
//         //             id: 2,
//         //             name: 'Anniversary data flyer',
//         //             url: '../../assets/roundimage1.webp'
//         //         },
//         //         {

//         //             id: 3,
//         //             name: ' Grocery',
//         //             url: '../../assets/roundimage1.webp'
//         //         },
//         //         {
//         //             id: 4,
//         //             name: 'Outdoor living',
//         //             url: '../../assets/roundimage1.webp'
//         //         }
//         //     ]
//         // }
//         const url = ref(new URL(`../../assets/roundimage1.webp`, import.meta.url).href)
//         return {
//             specialItemsData,
//             styleData,
//             url,
//         }

//     }
// }

import RoundImageComponent from '../../components/image-section/RoundImageComponent.vue'
export default {
    props: ['customStyles', 'specialItems', 'url'],
    components: { RoundImageComponent },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>



<style>
.sp {
    padding: 2px;
}
</style>



<!-- <div class="grid lg:grid-rows-2 grid-cols-2 gap-10 w-full">
                <div class="w-full  " v-for="n in 4" :key="n">
                    <a href="" class="sp flex justify-center items-center">
                        <img class="rounded-full w-28 h-28" src="../../assets/roundimage1.webp" alt="image description">
                    </a>
                </div>

            </div> -->