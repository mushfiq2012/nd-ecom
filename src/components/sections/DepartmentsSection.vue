<template>
    <div class="py-6">
        <div class="flex justify-start items-baseline">
            <section-title v-if="isLoaded" :title="result.label"></section-title>
        </div>
        <div class="h-52 relative isolate flex items-center justify-center flex-col -mx-3">
            <div
                class="grid lg:grid-rows-1 md:grid-row-2 sm:grid-flow-row-2 lg:grid-cols-8 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-3 gap-6">
                <round-image-component v-if="isLoaded" :specialItems="result"
                    :customStyles="customStyles"></round-image-component>
            </div>
        </div>
    </div>
</template>
<script>
import PostServices from '../../services/PostServices'
import RoundImageComponent from '../image-section/RoundImageComponent.vue';
import SectionTitle from "../cards/SectionTitle.vue";
export default {

    components: { RoundImageComponent, SectionTitle },
    data() {
        return {
            customStyles: "rounded-full w-[105px] h-[105px] min-w-[105px]",
            result: null,
            isLoaded: false,
            imageLoaded: false

        }
    },
    created() {
        this.fetchDepartments();
        //this.processMultipleArray();
    },
    methods: {
        async fetchDepartments() {
            try {
                const response = await PostServices.getDepartments();
                this.result = response.result
                this.isLoaded = true;
                //console.log(response);// Call filterData method with fetched data

                //this.loadImage(response.result)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        // async handleImageLoad() {
        //     this.imageLoaded = true;
        // },
        // async loadImage(response) {
        //     console.log('loadImage')

        //     const updatedResult = {
        //         ...response,
        //         data: response.map(item => ({ ...item, url: new URL('../../assets/' + item.url, import.meta.url).href }))
        //     };
        //     this.result = updatedResult;

        //     console.log(this.result);
        //     this.handleImageLoad()
        //     //this.processMultipleArray(updatedResult)
        // }
    }
}

</script>