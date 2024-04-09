<template>
    <!-- <h1 class="mb-12 text-center font-sans text-5xl font-bold">Recent Posts</h1> -->
    <div class=" w-full flex flex-nowrap overflow-hidden" ref="carousel" :class="{ 'scrollbar-hide': !scrollable }">

        <article v-for="(item, index) in result" :key="index" @scroll="checkOverflow"
            class="h-auto w-[180px] min-h-full min-w-[180px] cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2">
            <a href="#" class="">
                <img class="object-cover" alt="featured image" :src="item.url" />

                <div class="w-full bg-white p-4">
                    <add-cart-button></add-cart-button>
                    <p class="mb-2 text-base font-bold ">{{ item.afterDiscountPrice > 0 ? item.currency +
                        item.afterDiscountPrice : item.currency + item.price }}
                        <span v-if="item.afterDiscountPrice > 0"
                            class="dark:text-gray-400 dark:decoration-green-500 line-through text-sm">{{ item.currency
                                +
                                item.price }}</span>
                    </p>
                    <p class="text-md font-light text-gray-800 overflow-hidden line-clamp-3">{{ item.title }}</p>
                </div>
                <div class="relative justify-center mt-4 flex flex-wrap items-center">
                    <!-- <div class="mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">#js</div> -->
                    <div class=" h-auto mr-2 mt-1 rounded-2xl bg-blue-100 py-1.5 px-4 text-xs text-gray-600">
                        {{ `${item.shippingDays}+ day${item.shippingDays > 1 ? 's' : ''} shipping ` }}
                    </div>
                </div>
            </a>
        </article>
        <button type="button" @click="scrollLeft" v-if="scrollable"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" @click="scrollRight" v-if="scrollable"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full  cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>

</template>
<script>
import AddCartButton from '../buttons/AddCartButton.vue'
export default {
    props: ['result'],
    components: { AddCartButton },
    data() {
        return {
            scrollable: false,
            carousel: ''
        }
    }, methods: {
        scrollLeft() {
            console.log('scrollLeft')
            this.carousel = this.$refs.carousel;
            this.carousel.scrollBy({ left: -300, behavior: 'smooth' }); // Adjust the scroll amount as needed
        },
        scrollRight() {
            console.log('scrollRight')
            this.carousel = this.$refs.carousel;
            this.carousel.scrollBy({ left: 150, behavior: 'smooth' }); // Adjust the scroll amount as needed

            console.log(this.$refs.carousel)
        },
        checkOverflow() {
            this.carousel = this.$refs.carousel;
            this.scrollable = this.carousel.scrollWidth > this.carousel.clientWidth ? true : false;
            console.log(this.scrollable)
            console.log(this.carousel.scrollWidth)
            console.log(this.carousel.clientWidth)
            console.log(this.$refs.carousel)
        }
    },
    mounted() {
        this.checkOverflow();
        //console.log(this.result)
    }
}

</script>
<style>
/* Hide horizontal scrollbar */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>