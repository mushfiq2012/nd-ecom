<template>
    <div
        class=" lg:border-grey-200 lg:border-1 lg:col-span-1 md:col-span-2 col-span-2 shadow-2 lg:w-full flex flex-col items-center bg-zinc-100 rounded-lg md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-zinc-100 dark:hover:bg-gray-700">

        <round-image-card :specialItems="specialItems" :customStyles="customStyles"></round-image-card>
    </div>
    <!-- <div
        class="lg:border-l-sky-950 lg:border-1 lg:col-span-1 md:col-span-2 col-span-2 m-2 shadow-lg h-96 lg:w-full flex flex-col items-center bg-white rounded-lg md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-white dark:hover:bg-gray-700"> -->
    <!-- <img class=" object-cover w-full rounded-t-lg h-96 sm:h-60 md:h-full md:w-full md:rounded-none md:rounded-s-lg"
            src="../../assets/hero2.png" alt=""> -->
    <!-- <div class="grid lg:grid-rows-[33.33%] grid-cols-2 gap-10 w-full">
            <div class="row-span-1 col-span-2 h-5">
                <h5 class="text-center -mb-none text-lg font-bold tracking-tight text-black dark:text-black">kitchen
                    {{ specialItems.label }}
                </h5>
            </div>
            <div class="w-full  " v-for="n in specialItems.data" :key="n">
                <a href="" class="sp flex justify-center items-center">
                    <img class="rounded-full w-[110] h-[110px]" :src="url" alt="image description" @error="n.url">
                </a>
            </div>

        </div>
    </div> -->
</template>

<script>
import RoundImageCard from "../cards/RoundImageCard.vue"

export default {
    props: ['specialItems', 'customStyles'],
    components: { RoundImageCard },
    data() {
        return {
        }

    },
    created() {
        //console.log(this.specialItems)
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