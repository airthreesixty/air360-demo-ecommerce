<template>
  <div class="your-order mb-30 ">
    <h3>{{ $t('checkout.details.order.title') }}</h3>
    <div class="your-order-table table-responsive">
      <table>
        <thead>
          <tr>
            <th class="product-name">
              {{ $t('checkout.details.order.product') }}
            </th>
            <th class="product-total">
              {{ $t('checkout.details.order.total') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,i) in state.cart_products" :key="i" class="cart_item">
            <td class="product-name">
              {{ $t(`${item.title}.title`) }} <strong class="product-quantity"> × {{ item.orderQuantity }}</strong>
            </td>
            <td class="product-total">
              <span class="amount">${{ item.price }}</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="cart-subtotal">
            <th>{{ $t('checkout.details.order.subtotal') }}</th>
            <td><span class="amount">${{ state.totalPriceQuantity.total.toFixed(2) }}</span></td>
          </tr>
          <tr class="shipping">
            <th>{{ $t('checkout.details.order.shipping') }}</th>
            <td>
              <ul>
                <li>
                  <input
                    id="flat-rate"
                    v-model="ship_cost"
                    :value="7.00"
                    name="ship-cost"
                    type="radio"
                    checked
                  >
                  <label for="flat-rate">
                    {{ $t('checkout.details.order.flat-rate') }}: <span class="amount">$7.00</span>
                  </label>
                </li>
                <li>
                  <input id="free" v-model="ship_cost" value="free" name="ship-cost" type="radio">
                  <label for="free">{{ $t('checkout.details.order.free-shipping') }}:</label>
                </li>
              </ul>
            </td>
          </tr>
          <tr class="order-total">
            <th>{{ $t('checkout.details.order.order-total') }}</th>
            <td>
              <strong>
                <span class="amount">
                  ${{ typeof ship_cost === 'number' && ship_cost > 0 ?
                    (state.totalPriceQuantity.total + ship_cost).toFixed(2)
                    : state.totalPriceQuantity.total.toFixed(2) }}
                </span>
              </strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <div class="payment-method">
      <div id="accordionExample" class="accordion">
        <div class="card">
          <div id="headingOne" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn-link"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {{ $t('checkout.details.order.direct') }}
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="card-body">
              {{ $t('checkout.details.order.description') }}
            </div>
          </div>
        </div>
        <div class="card">
          <div id="headingTwo" class="card-header">
            <h5 class="mb-0">
              <button
                class="btn-link collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                {{ $t('checkout.details.order.cheque-payment') }}
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="card-body">
              {{ $t('checkout.details.order.description2') }}
            </div>
          </div>
        </div>
      </div>
      <div class="order-button-payment mt-20">
        <button type="submit" class="os-btn os-btn-black">
          {{ $t('checkout.details.order.place-order') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '~~/store/useCart'

export default defineComponent({
  setup () {
    const state = useCartStore()
    return { state }
  },
  data () {
    return {
      ship_cost: 7.0,
    }
  },
})
</script>
