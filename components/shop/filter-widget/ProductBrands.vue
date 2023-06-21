<template>
  <div class="sidebar__widget mb-50">
    <div class="sidebar__widget-title mb-25">
      <h3>{{ $t('sidebar-products.brand') }}</h3>
    </div>
    <div class="sidebar__widget-content">
      <div class="brand">
        <ul>
          <li v-for="(brand, i) in brands" :key="i">
            <a
              :class="`${state.activeCls === brand ? 'active' : ''}`"
              href="#"
              @click.prevent="state.handleBrand(brand)"
            >
              {{ brand }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProductsStore } from '~~/store/useProducts'

export default defineComponent({
  setup () {
    const state = useProductsStore()
    const brands = [...new Set(state.products.map(p => p.brand))]
    return { state, brands }
  },
})
</script>
