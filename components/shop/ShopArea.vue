<template>
  <section class="shop__area pt-100 pb-100">
    <div class="container">
      <div class="row">
        <div v-if="!shop_right" class="col-xl-3 col-lg-3 col-md-4">
          <shop-sidebar />
        </div>
        <div class="col-xl-9 col-lg-9 col-md-8">
          <div class="shop__content-area">
            <div class="shop__header d-sm-flex justify-content-between align-items-center mb-40">
              <div class="shop__header-left">
                <div class="show-text">
                  <span>Showing 1–{{ store.filterProducts.slice(pageStart, pageStart + countOfPage).length }} of {{ store.products.length }} results</span>
                </div>
              </div>
              <div class="shop__header-right d-flex align-items-center justify-content-between justify-content-sm-end">
                <!-- sort-filtering -->
                <!-- <sort-filtering /> -->
                <!-- sort-filtering -->
                <!-- <ul id="pills-tab" class="nav nav-pills" role="tablist">
                  <li class="nav-item">
                    <a
                      id="pills-grid-tab"
                      class="nav-link active"
                      data-bs-toggle="pill"
                      href="#pills-grid"
                      role="tab"
                      aria-controls="pills-grid"
                      aria-selected="true"
                    ><i class="fas fa-th" /></a>
                  </li>
                  <li class="nav-item">
                    <a
                      id="pills-list-tab"
                      class="nav-link"
                      data-bs-toggle="pill"
                      href="#pills-list"
                      role="tab"
                      aria-controls="pills-list"
                      aria-selected="false"
                    ><i class="fas fa-list-ul" /></a>
                  </li>
                </ul> -->
              </div>
            </div>
            <div id="pills-tabContent" class="tab-content">
              <div id="pills-grid" class="tab-pane fade show active" role="tabpanel" aria-labelledby="pills-grid-tab">
                <div class="row custom-row-10">
                  <div v-for="(item,i) in store.filterProducts.slice(pageStart, pageStart + countOfPage)" :key="i" class="col-xl-4 col-lg-4 col-md-6 col-sm-6 custom-col-10">
                    <product-item :item="item" />
                  </div>
                </div>
              </div>
              <div id="pills-list" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-list-tab">
                <product-list-item v-for="(item,i) in store.filterProducts.slice(pageStart, pageStart + countOfPage)" :key="i" :item="item" />
              </div>
            </div>

            <div class="row mt-40">
              <div class="col-xl-12">
                <pagination
                  :items="store.filterProducts"
                  :count-of-page="9"
                  @paginatedData="paginatedData"
                />
              </div>
            </div>
          </div>
        </div>
        <div v-if="shop_right" class="col-xl-3 col-lg-3 col-md-4">
          <shop-sidebar />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductItem from '../products/ProductItem.vue'
import ProductListItem from '../products/ProductListItem.vue'
import SortFiltering from './filter-widget/SortFiltering.vue'
import ShopSidebar from './ShopSidebar.vue'
import { useProductsStore } from '~~/store/useProducts'
import Pagination from '~~/ui/Pagination.vue'
import ProductType from '~~/types/productType'

export default defineComponent({
  components: { ShopSidebar, SortFiltering, ProductItem, ProductListItem, Pagination },
  props: {
    shop_right: {
      type: Boolean,
      default: false,
    },
  },
  setup () {
    const store = useProductsStore()
    return { store }
  },
  data () {
    return {
      filteredRows: [] as ProductType[],
      pageStart: 0 as number,
      countOfPage: 9 as number,
    }
  },
  methods: {
    paginatedData (filteredRows:ProductType[], pageStart:number, countOfPage:number) {
      this.filteredRows = filteredRows
      this.pageStart = pageStart
      this.countOfPage = countOfPage
    },
  },
})
</script>
