<template>
  <layout-seven :transparent="true">
    <breadcrumb-area :title="$t('bread-crumb.details.title')" :subtitle="$t('bread-crumb.details.subtitle')" />
    <shop-details-area :item="item" />
  </layout-seven>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~~/layout/Layout.vue'
import LayoutSeven from '~/layout/LayoutSeven.vue'
import BreadcrumbArea from '~~/components/common/breadcrumb/BreadcrumbArea.vue'
import { useProductsStore } from '~~/store/useProducts'
import ShopDetailsArea from '~~/components/shop-details/ShopDetailsArea.vue'

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    ShopDetailsArea,
    LayoutSeven
  },
  setup () {
    const state = useProductsStore()
    const id = useRoute().params.id
    const item = state.products.find(p => Number(p.id) === Number(id))
    useHead({
      title: 'Product Details',
    })
    return { item }
  },
})
</script>
