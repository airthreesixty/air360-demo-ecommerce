<template>
  <layout-seven :transparent="true">
    <breadcrumb-area title="Product Details" subtitle="Product Details"/>
    <shop-details-area :item="state.products[0]"/>
  </layout-seven>
</template> 

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "~~/layout/Layout.vue";
import LayoutSeven from "~/layout/LayoutSeven.vue";
import BreadcrumbArea from "~~/components/common/breadcrumb/BreadcrumbArea.vue";
import { useProductsStore } from "~~/store/useProducts";
import ShopDetailsArea from "~~/components/shop-details/ShopDetailsArea.vue";

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    ShopDetailsArea,
    LayoutSeven
  },
  setup() {
    const state = useProductsStore();
    useHead({
      title: "Product Details",
    });
    return {state}
  },
});
</script>
