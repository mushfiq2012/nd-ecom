<template style-="px-3">

    <div
        class="col-start-1 col-span-2 shadow-2 h-96  flex flex-col items-center bg-white rounded-lg md:flex-row  hover:bg-gray-100  dark:bg-zinc-700 dark:hover:bg-gray-700">

        <img v-show="imageLoaded"
            class=" object-cover w-full rounded-t-lg h-96 sm:h-60 md:h-full md:w-full md:rounded-none md:rounded-s-lg"
            :src="i" alt="">
        <div v-show="!imageLoaded">Loading</div>
        <div
            class="rounded-lg bg-zinc-700  flex flex-col h-full lg:w-3/6 w-full md:w-3/6 sm:w-full justify-between p-4 leading-normal overflow-hidden">
            <h5 class="mb-none text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{ response[0].name }}
            </h5>
            <p class="mb-3 font-normal sm:text-sm text-gray-700 dark:text-gray-400">
                {{ response[0].description }}</p>
            <button type="button"
                class="py-2.5 px-5 me-2 mb-2 wid place-items-center text-sm font-medium text-white focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Shop</button>
        </div>

    </div>

    <!-- <div class="bg-zinc-700">abcd</div>
    <div>abcd</div> :src="`../../assets/${response[0].ur}`"-->


</template>
<script>
//import { ref } from 'vue'
export default {
    props: ['response'],
    data() {
        return {
            // result: ref(this.response)
            imageLoaded: true,
            img: '',
            i: null
        }
    },
    mounted() {
        // const img = new Image();
        // img.src = '../../assets/' + this.response[0].url
        // img.onload = () => {
        //     this.imageLoaded = true;
        // };
        //this.loadImage('hero2.png')
    },
    created() {
        this.i = new URL('../../assets/' + 'hero2.png', import.meta.url).href
        this.handleImageLoad()
    },
    methods: {
        async handleImageLoad() {
            this.imageLoaded = true;
        },
        async loadImage(path) {
            //console.log('loadImage')
            //this.i = new URL('../../assets/' + path, import.meta.url).href
            this.img = new Image()
            this.img.src = new URL('../../assets/' + path, import.meta.url).href
            this.img.onload = await this.handleImageLoad()
            //console.log(this.i)
            //Sconsole.log(this.img)
            //return i.href;
        }
    }
}
</script>
<style>
.wid {
    width: 45%;
}

.wid2 {
    width: 810px;
    margin: 8px;
}
</style>