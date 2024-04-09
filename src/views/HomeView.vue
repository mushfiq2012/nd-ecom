<script>
import PostServices from '../services/PostServices.js'
import TheWelcome from '../components/TheWelcome.vue'
//import HeroComponent from '../components/hero-section/HeroComponent.vue';
//import HeroCardComponent from "../components/hero-section/HeroCardComponent.vue"
//import FlatImageCard from "../components/cards/FlatImageCard.vue"
//import RoundImageCard from '../components/cards/RoundImageCard.vue';
import BannerLayout from '../components/cards/BannerLayout.vue'
import DepartmentsSection from '../components/sections/DepartmentsSection.vue';
//import ProductCard from '../components/cards/ProductCard.vue'
//import SectionTitle from '../components/cards/SectionTitle.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import DepartmentPromotionSection from '../components/sections/DepartmentPromotionSection.vue'
import SeasonalPromotionSection from '../components/sections/SeasonalPromotionSection.vue'
import ProductListSection from '../components/sections/ProductListSection.vue'
import { ref } from 'vue'
export default {
  components: { HeroSection, ProductListSection, SeasonalPromotionSection, DepartmentPromotionSection, TheWelcome, BannerLayout, DepartmentsSection },
  data() {
    return {
      imageLoaded: false,
      customStyle: "rounded-full w-[105px] h-[105px] min-w-[105px]",
      specialItems: {
        id: 1,
        label: "Anniversary deals",
        data: [
          {
            id: 1,
            name: 'Shop all',
            url: new URL('../assets/roundimage5.webp', import.meta.url)
          },
          {
            id: 2,
            name: 'Anniversary deals flyer',
            url: new URL('../assets/roundimage6.webp', import.meta.url)
          },
          {

            id: 3,
            name: ' Grocery',
            url: new URL('../assets/roundimage7.webp', import.meta.url)
          },
          {
            id: 4,
            name: 'Outdoor living',
            url: new URL('../assets/roundimage8.webp', import.meta.url)
          }
        ]
      }, specialItems2: {
        id: 1,
        label: "Anniversary deals",
        data: [
          {
            id: 1,
            name: 'Grocery',
            url: new URL('../assets/roundimage1.webp', import.meta.url)
          },
          {
            id: 1,
            name: 'Clothing, shoes & accessories',
            url: new URL('../assets/roundimage2.webp', import.meta.url)
          },
          {
            id: 1,
            name: 'Electornics',
            url: new URL('../assets/roundimage3.webp', import.meta.url)
          },
          {
            id: 1,
            name: 'Toys',
            url: new URL('../assets/roundimage4.webp', import.meta.url)
          },
          {
            id: 1,
            name: 'Shop all',
            url: new URL('../assets/roundimage5.webp', import.meta.url)
          },
          {
            id: 1,
            name: 'Shop all',
            url: new URL('../assets/roundimage5.webp', import.meta.url)
          },
          {
            id: 2,
            name: 'Anniversary deals flyer',
            url: new URL('../assets/roundimage6.webp', import.meta.url)
          },
          {

            id: 3,
            name: ' Grocery',
            url: new URL('../assets/roundimage7.webp', import.meta.url)
          }
        ]
      },
      url: ref(new URL(`../assets/roundimage1.webp`, import.meta.url).href),

      // result: [
      //   {
      //     id: 1,
      //     title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
      //     price: 40,
      //     currency: "$",
      //     shippingDays: 3,
      //     afterDiscountPrice: 30,
      //     productDescription: "",
      //     url: "https://i5.walmartimages.com/asr/b2f080ee-1a82-49d6-b781-599adbd31c63.851d23808b80a9c15a8f41ff168329e8.jpeg?odnHeight=350&odnWidth=350&odnBg=FFFFFF"
      //   },
      //   {
      //     id: 2,
      //     title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
      //     price: 40,
      //     currency: "$",
      //     shippingDays: 4,
      //     afterDiscountPrice: 30,
      //     productDescription: "",
      //     url: new URL('../assets/product2.webp', import.meta.url)
      //   },
      //   {
      //     id: 3,
      //     title: "Costway 12V Kids Ride On Car ",
      //     price: 40,
      //     currency: "$",
      //     shippingDays: 1,
      //     afterDiscountPrice: 30,
      //     productDescription: "",
      //     url: new URL('../assets/product3.webp', import.meta.url).href
      //   },
      //   {
      //     id: 4,
      //     title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
      //     price: 40,
      //     currency: "$",
      //     shippingDays: 7,
      //     afterDiscountPrice: 30,
      //     productDescription: "",
      //     url: new URL('../assets/product4.webp', import.meta.url).href
      //   },
      //   {
      //     id: 5,
      //     title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
      //     price: 40,
      //     currency: "$",
      //     shippingDays: 3,
      //     afterDiscountPrice: 30,
      //     productDescription: "",
      //     url: new URL('../assets/product5.webp', import.meta.url).href
      //   },
      //   {
      //     id: 6,
      //     title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
      //     price: 40,
      //     currency: "$",
      //     shippingDays: 4,
      //     afterDiscountPrice: 30,
      //     productDescription: "",
      //     url: new URL('../assets/product6.webp', import.meta.url).href
      //   },
      //   {
      //     id: 6,
      //     title: "Costway 12V Kids Ride On Car Licensed Volkswagen Beetle w/ Remote Control & Music White",
      //     price: 40,
      //     currency: "$",
      //     shippingDays: 3,
      //     afterDiscountPrice: 30,
      //     productDescription: "",
      //     url: new URL('../assets/product6.webp', import.meta.url).href
      //   },
      // ]
      result: null,
      isLoaded: false
    }

  },
  created() {
    this.fetchSeasonalDepartment()
  },
  methods: {
    async handleImageLoad() {
      this.imageLoaded = true;
    },
    async loadImage(response) {
      //console.log('loadImage')
      const updatedResult = {
        ...response,
        data: response.data.map(item => ({ ...item, url: new URL('../assets/' + item.url, import.meta.url).href }))
      };
      this.result = updatedResult;

      //console.log(updatedResult);
      this.handleImageLoad()
    },
    async fetchSeasonalDepartment() {
      try {
        const response = await PostServices.getSeasonalDepartment();
        //this.result = response.result.data[0]
        this.isLoaded = true;
        this.loadImage(response.result);
        //console.log('seasonal')
        //console.log(response.result.data[0]);// Call filterData method with fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
}
</script>



<template>
  <main class="">
    <TheWelcome />
    <div class="mx-auto max-w-[1280px] px-6 mt-6">
      <!-- hero section goes here -->
      <hero-section></hero-section>
      <!-- hero section goes here -->

      <!-- seasonal promotional department section goes here -->
      <seasonal-promotion-section :result="result" v-if="isLoaded && imageLoaded"></seasonal-promotion-section>
      <!-- seasonal promotional department section ends here -->

      <banner-layout></banner-layout>
      <!-- promotional department section goes here -->
      <department-promotion-section></department-promotion-section>
      <!-- promotional department section ends here -->

      <!-- department section goes here -->
      <departments-section></departments-section>
      <!-- department section ends here -->

      <banner-layout></banner-layout>

      <!-- product list section goes here -->
      <product-list-section></product-list-section>
      <!-- product list section ends here -->

    </div>

  </main>
</template>
<style>
.image-div {
  min-height: inherit;
}
</style>
