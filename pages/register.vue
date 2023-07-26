<template>
  <layout-seven :transparent="true">
    <breadcrumb-area :title="$t('bread-crumb.register.title')" :subtitle="$t('bread-crumb.register.subtitle')" />
    <register-area />
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
      title: t('page-title.register'),
    })
  },
})
</script>
