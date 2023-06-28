<template>
  <client-only>
    <section class="cart-area pt-100 pb-100">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div v-if="state.cart_products.length === 0" class="text-center">
              <h3>{{ $t('cart.no-cart') }}</h3>
              <nuxt-link class="os-btn os-btn-black mt-20" :to="localePath('/shop')">
                {{ $t('cart.shop-now') }}
              </nuxt-link>
            </div>
            <form v-if="state.cart_products.length > 0" action="#">
              <div class="table-content table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">
                        {{ $t('cart.image') }}
                      </th>
                      <th class="cart-product-name">
                        {{ $t('cart.product') }}
                      </th>
                      <th class="product-price">
                        {{ $t('cart.unit-price') }}
                      </th>
                      <th class="product-quantity">
                        {{ $t('cart.quantity') }}
                      </th>
                      <th class="product-subtotal">
                        {{ $t('cart.total') }}
                      </th>
                      <th class="product-remove">
                        {{ $t('cart.remove') }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <cart-item v-for="(cartItem,i) in state.cart_products" :key="i" :item="cartItem" />
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="coupon-all">
                    <div class="coupon">
                      <input
                        id="coupon_code"
                        required
                        class="input-text"
                        name="coupon_code"
                        value=""
                        :placeholder="$t('cart.coupon-code')"
                        type="text"
                      >
                      <button class="os-btn os-btn-black" name="apply_coupon" type="button">
                        {{ $t('cart.coupon') }}
                      </button>
                    </div>
                    <div class="coupon2">
                      <button class="os-btn os-btn-black" name="update_cart" type="button" @click="state.clear_cart">
                        {{ $t('cart.clear-cart') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-5 ms-auto">
                  <div class="cart-page-total">
                    <h2>{{ $t('cart.total') }}</h2>
                    <ul class="mb-20">
                      <li>{{ $t('cart.subtotal') }}<span>{{ $t('currency-mark') }}{{ locale === 'ja' ? (state.totalPriceQuantity.total * 100).toLocaleString() : state.totalPriceQuantity.total }}</span></li>
                      <li>{{ $t('cart.total') }} <span>{{ $t('currency-mark') }}{{ locale === 'ja' ? (state.totalPriceQuantity.total * 100).toLocaleString() : state.totalPriceQuantity.total }}</span></li>
                    </ul>
                    <nuxt-link class="os-btn" :to="localePath('/checkout')">
                      {{ $t('cart.checkout') }}
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </client-only>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CartItem from './CartItem.vue'
import { useCartStore } from '~~/store/useCart'

export default defineComponent({
  components: { CartItem },
  setup () {
    const state = useCartStore()
    const localePath = useLocalePath()
    const { locale } = useI18n()
    return { state, localePath, locale }
  },
})
</script>
