<template>
  <div class="sidebar__widget mb-55">
    <div class="sidebar__widget-title mb-25">
      <h3>{{ $t('categories.title') }}</h3>
    </div>
    <div class="sidebar__widget-content">
      <div class="categories">
        <div id="accordion">
          <div
            v-for="(item, i) in [
              ...new Set(
                categoryData.filter(
                  (arr, index, self) =>
                    index ===
                    self.findIndex((t) => t.parentTitle === arr.parentTitle)
                )
              ),
            ]"
            :key="item.id"
            class="card"
          >
            <div id="cloth" class="card-header white-bg">
              <h5 class="mb-0">
                <button
                  :class="`shop-accordion-btn collapsed text-capitalize ${
                    state.activeCls === item.parentTitle
                      ? 'active'
                      : ''
                  }`"
                  data-bs-toggle="collapse"
                  :data-bs-target="`#collapse-${i}`"
                  aria-expanded="false"
                  :aria-controls="`collapse-${i}`"
                  @click="state.handleParentCategory(item.parentTitle)"
                >
                  {{ $t(`${item.parentTitle}`) }}
                </button>
              </h5>
            </div>
            <div
              :id="`collapse-${i}`"
              class="collapse"
              aria-labelledby="cloth"
              data-bs-parent="#accordion"
            >
              <div class="card-body">
                <div class="categories__list">
                  <ul>
                    <li v-for="(list, i) in item.children" :key="i">
                      <a
                        href="#"
                        :class="`text-capitalize ${
                          state.activeCls === list ? 'active' : ''
                        }`"
                        @click.prevent="state.handleCategory(list)"
                      >
                        {{ $t(list) }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import categoryData from '~~/mixins/categoryData'
import { useProductsStore } from '~~/store/useProducts'

export default defineComponent({
  mixins: [categoryData],
  setup () {
    const state = useProductsStore()
    return { state }
  },
})
</script>
