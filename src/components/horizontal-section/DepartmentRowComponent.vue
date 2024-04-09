<template>
    <div
        class="grid lg:grid-rows-1 md:grid-row-2 sm:grid-flow-row-2 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-3 gap-6">
        <round-image-component :specialItems="specialItems" :customStyles="customStyles"></round-image-component>
    </div>
</template>
<script>
import RoundImageComponent from '../../components/image-section/RoundImageComponent.vue';
//import { RoundImageComponent } from "../image-section/RoundImageComponent.vue";
export default {
    props: ['specialItems', 'customStyles'],

    components: { RoundImageComponent },
    data() {
        return {}
    }
}
</script>