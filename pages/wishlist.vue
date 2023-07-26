<template>
  <layout-seven :transparent="true">
    <breadcrumb-area :title="$t('bread-crumb.wishlist.title')" :subtitle="$t('bread-crumb.wishlist.subtitle')" />
    <wishlist-area />
  </layout-seven>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~~/layout/Layout.vue'
import LayoutSeven from '~/layout/LayoutSeven.vue'
import BreadcrumbArea from '~~/components/common/breadcrumb/BreadcrumbArea.vue'
import WishlistArea from '~~/components/cart-wishlists/WishlistArea.vue'

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    WishlistArea,
    LayoutSeven
  },
  setup () {
    const { t } = useI18n()
    useHead({
      title: t('page-title.wishlist'),
    })
  },
})
</script>
