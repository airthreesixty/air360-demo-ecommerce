<template>
  <layout :transparent="true">
    <breadcrumb-area :title="$t('bread-crumb.login.title')" :subtitle="$t('bread-crumb.login.subtitle')" />
    <login-area />
  </layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from '~~/layout/Layout.vue'
import BreadcrumbArea from '~~/components/common/breadcrumb/BreadcrumbArea.vue'
import LoginArea from '~~/components/login-register/LoginArea.vue'

export default defineComponent({
  components: {
    Layout,
    BreadcrumbArea,
    LoginArea,
  },
  setup () {
    const { t } = useI18n()
    useHead({
      title: t('page-title.login'),
    })
  },
})
</script>
