<template>
    <div class="h-96 px-3 bg-zinc-100 border border-gray-200 rounded-lg shadow-2">
        <a href="#">
            <img class="rounded-t-lg" :src="item.url" alt="UG_Image" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-md font-bold tracking-light text-gray-900 dark:text=gray-900">
                    {{ item.name }}
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-700">{{ item.description }}</p>

            <shop-buttons></shop-buttons>
        </div>
    </div>
</template>
<script>
import ShopButtons from '../buttons/ShopButtons.vue';
export default {
    props: ['item'],
    components: { ShopButtons },
    data() {
        return {}
    }
}
</script>