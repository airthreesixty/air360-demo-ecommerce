<template>
  <client-only>
    <div class="sidebar__widget mb-55">
      <div class="sidebar__widget-title mb-30">
        <h3>{{ $t('sidebar-products.filter-by-price') }}</h3>
      </div>
      <div class="sidebar__widget-content">
        <div class="price__slider">
          <div id="slider-range" />
          <div>
            <form @submit.prevent="state.filterPrice">
              <Slider
                v-model="state.priceRange"
                :tooltips="false"
                :max="500"
                @change="state.onChangeRange"
              />
              <button type="submit">
                {{ $t('sidebar-products.filter') }}
              </button>
              <label for="amount">{{ $t('sidebar-products.price') }} : ${{ state.priceRange[0] }} - ${{ state.priceRange[1] }}</label>
            </form>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'
import { useProductsStore } from '~~/store/useProducts'

export default defineComponent({
  components: { Slider },
  setup () {
    const state = useProductsStore()
    return { state }
  },
})
</script>

<style scoped>
</style>
