<template>
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="@/assets/elogo.gif" alt="GLab" />
            </a>
        </div>
        <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = true" :open="mobileMenuOpen">
                <span class=" sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
            <a v-for=" item  in  navigation " :key="item.name" :href="item.href"
                class="text-sm font-semibold leading-6 text-gray-900">{{ item.name }}</a>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in </a>
        </div>
    </nav>
</template>
<script>
import { ref } from 'vue'
import { Bars3Icon } from "@heroicons/vue/24/outline";
//import { imageUrl } from '../custom-functions/common'
// import imgUrl from '@/assets/elogo.gif'

export default {
    // eslint-disable-next-line vue/no-reserved-component-names
    components: { Bars3Icon },

    setup() {
        const mobileMenuOpen = ref(false)
        const navigation = [
            { name: "About", href: "#" },
            { name: "Companies", href: "#" },
        ]
        return {
            mobileMenuOpen,
            navigation
        };
    },
};
</script>