<template>

    <div class="w-full  " v-for="(item, index) in result.data" :key="index">
        <a href="" class="sp flex justify-center items-center">
            <img :class="`${customStyles}`" :src="item.url" alt="image description">
        </a>
        <div class="w-full text-center">
            <span class="">{{ item.name }}</span>
        </div>
    </div>
</template>
<script>
// import RoundImageComponent from '../image-section/RoundImageComponent'
export default {
    props: ['specialItems', 'customStyles'],

    // components: { RoundImageComponent },
    data() {
        return {
            image: null,
            imageLoaded: false,
            result: null
        }
    },
    created() {
        this.loadImage()
    },
    methods: {
        async handleImageLoad() {
            this.imageLoaded = true;
        },
        async loadImage() {
            //console.log('loadImage')
            // console.log(this.specialItems)
            const updatedResult = {
                ...this.specialItems,
                data: this.specialItems.data.map(item => ({ ...item, url: new URL('../../assets/' + item.url, import.meta.url).href }))
            };
            this.result = updatedResult;

            console.log(updatedResult);
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
}</script>