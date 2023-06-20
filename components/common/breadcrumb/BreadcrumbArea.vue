<template>
  <section class="page__title p-relative d-flex align-items-center" :style="{ backgroundImage: `url(${bg})`}">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="page__title-inner text-center">
            <h1>{{ title }}</h1>
            <div class="page__title-breadcrumb">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item">
                    <nuxt-link :to="localePath('/')">
                      {{ $t('bread-crumb.home') }}
                    </nuxt-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {{ subtitle }}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import bg from '~/assets/img/page-title/page-title-1.jpg'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
  setup () {
    const localePath = useLocalePath()
    return {
      localePath,
    }
  },
  data () {
    return {
      bg,
    }
  },
})
</script>
