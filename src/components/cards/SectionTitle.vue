<template>
    <div class="pl-1 pb-2 -mx-3 text-center font-mono -mb-none text-lg font-bold tracking-tight text-black dark:text-black"
        role="alert">
        <span class="font-bold">{{ title }}</span>
    </div>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {}
    }
}
</script>