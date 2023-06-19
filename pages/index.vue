<template>
  <!-- <layout>
    <home-hero-slider />
    <category-area />
    <trending-products />
    <shop-banner/>
    <sale-off-product/>
    <client-brand-slider/>
    <blog-area/>
    <subscribe-area/>
  </layout> -->
    <layout-seven>
    <home-seven-hero-slider />
    <category-area-two />
    <best-saller-products />
    <video-box />
    <featured-products />
    <home-seven-testimonial />
    <blog-area-two />
    <client-brand-slider-two />
  </layout-seven>
</template>

<script lang="ts">
// import { defineComponent } from "vue";
// import HomeHeroSlider from "~~/components/hero-banner/HomeHeroSlider.vue";
// import Layout from "~~/layout/Layout.vue";
// import CategoryArea from "~~/components/category/CategoryArea.vue";
// import TrendingProducts from "~~/components/products/TrendingProducts.vue";
// import ShopBanner from "~~/components/shop-banner/ShopBanner.vue";
// import SaleOffProduct from "~~/components/products/SaleOffProduct.vue";
// import ClientBrandSlider from "~~/components/client-brands/ClientBrandSlider.vue";
// import BlogArea from "~~/components/blogs/BlogArea.vue";
// import SubscribeArea from "~~/components/subscribe/SubscribeArea.vue";

// export default defineComponent({
//   components: {
//     Layout,
//     HomeHeroSlider,
//     CategoryArea,
//     TrendingProducts,
//     ShopBanner,
//     SaleOffProduct,
//     ClientBrandSlider,
//     BlogArea,
//     SubscribeArea,
//   },
//   setup() {
//     useHead({
//       title: "Home Main - Outstock Clean, Minimal eCommerce Vue Nuxt 3 Template",
//     });
//   },
// });
import LayoutSeven from "~~/layout/LayoutSeven.vue";
import HomeSevenHeroSlider from "~~/components/hero-banner/HomeSevenHeroSlider.vue";
import CategoryAreaTwo from "~~/components/category/CategoryAreaTwo.vue";
import BestSallerProducts from "~~/components/products/BestSallerProducts.vue";
import VideoBox from "~~/components/video-box/VideoBox.vue";
import FeaturedProducts from "~~/components/products/FeaturedProducts.vue";
import HomeSevenTestimonial from "~~/components/testimonial/HomeSevenTestimonial.vue";
import BlogAreaTwo from "~~/components/blogs/BlogAreaTwo.vue";
import ClientBrandSliderTwo from "~~/components/client-brands/ClientBrandSliderTwo.vue";

export default defineComponent({
  components: {
    LayoutSeven,
    HomeSevenHeroSlider,
    CategoryAreaTwo,
    BestSallerProducts,
    VideoBox,
    FeaturedProducts,
    HomeSevenTestimonial,
    BlogAreaTwo,
    ClientBrandSliderTwo,
  },
  setup() {
    useHead({
      title: "Home Seven",
    });
  },
});
</script>
