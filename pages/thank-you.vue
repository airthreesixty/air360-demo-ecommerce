<template>
  <layout-seven :transparent="true">
    <breadcrumb-area :title="$t('bread-crumb.thank-you.title')" :subtitle="$t('bread-crumb.thank-you.subtitle')" />
    <div class="shop__area pt-100 pb-100 container">
      <h1>{{ $t('thank-you.title') }}</h1>
      <p>{{ $t('thank-you.desc') }}</p>
    </div>
  </layout-seven>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~~/layout/Layout.vue'
import LayoutSeven from '~/layout/LayoutSeven.vue'
import BreadcrumbArea from '~~/components/common/breadcrumb/BreadcrumbArea.vue'
import RegisterArea from '~~/components/login-register/RegisterArea.vue'

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    RegisterArea,
    LayoutSeven
  },
  setup () {
    const { t } = useI18n()
    useHead({
      title: t('page-title.thank-you'),
    })
  },
})
</script>
