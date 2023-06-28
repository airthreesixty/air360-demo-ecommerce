<template>
  <section class="checkout-area pb-70">
    <div class="container">
      <form @submit.prevent="handleFormSubmit">
        <div class="row">
          <div class="col-lg-6">
            <div class="checkbox-form">
              <h3>{{ $t('checkout.details.title') }}</h3>
              <!-- billing details start -->
              <div class="row">
                <!-- <div class="col-md-12">
                  <country-select />
                </div> -->
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.last-name') }}<span class="required">*</span></label>
                    <input id="lastName" v-model="info.lastName" type="text" :placeholder="$t('checkout.details.last-name')" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.first-name') }} <span class="required">*</span></label>
                    <input id="firstName" v-model="info.firstName" type="text" :placeholder="$t('checkout.details.first-name')" required>
                    <!-- <checkout-input-component id="first-name" type="text" :placeholder="$t('checkout.details.first-name')" :label="$t('checkout.details.first-name')" /> -->
                  </div>
                </div>
                <!-- <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.company-name') }}</label>
                    <input id="companyName" v-model="info.companyName" type="text" :placeholder="$t('checkout.details.company-name')">
                  </div>
                </div> -->
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.address') }} <span class="required">*</span></label>
                    <input id="address" v-model="info.address" type="text" :placeholder="$t('checkout.details.street-address')" required>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="checkout-form-list">
                    <input
                      id="addressDetails"
                      v-model="info.addressDetails"
                      type="text"
                      :placeholder="$t('checkout.details.street-address-details')"
                    >
                  </div>
                </div>
                <!-- <div class="col-md-12">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.town') }} <span class="required">*</span></label>
                    <input id="town" v-model="info.town" type="text" placeholder="Town / City" required>
                  </div>
                </div> -->
                <!-- <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.state') }} <span class="required">*</span></label>
                    <input id="state" v-model="info.state" type="text" :placeholder="$t('checkout.details.state')" required>
                  </div>
                </div> -->
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.zip') }} <span class="required">*</span></label>
                    <input id="zip" v-model="info.zip" type="text" :placeholder="$t('checkout.details.zip')" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.email') }} <span class="required">*</span></label>
                    <input id="email" v-model="info.email" type="email" :placeholder="$t('checkout.details.email')" required>
                  </div>
                </div>
                <!-- <div class="col-md-6">
                  <div class="checkout-form-list">
                    <label>{{ $t('checkout.details.phone') }}<span class="required">*</span></label>
                    <input id="phone" v-model="info.phone" type="text" :placeholder="$t('checkout.details.phone')" required>
                  </div>
                </div> -->
              </div>

              <!-- billing details end -->

              <!-- different address start -->
              <different-address />
              <!-- different address end -->
            </div>
          </div>
          <div class="col-lg-6">
            <!-- order area start -->
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
                        <span class="amount">{{ $t('currency-mark') }}{{ locale==='ja' ? (item.price * 100).toLocaleString(): item.price }}</span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr class="cart-subtotal">
                      <th>{{ $t('checkout.details.order.subtotal') }}</th>
                      <td><span class="amount">{{ $t('currency-mark') }}{{ locale === 'ja' ? (state.totalPriceQuantity.total * 100).toLocaleString() : state.totalPriceQuantity.total }}</span></td>
                    </tr>
                    <tr class="shipping">
                      <th>{{ $t('checkout.details.order.shipping') }}</th>
                      <td>
                        <ul>
                          <li>
                            <input
                              id="flat-rate"
                              v-model="ship_cost"
                              :value="locale === 'ja' ? 700 : 7"
                              name="ship-cost"
                              type="radio"
                              checked
                            >
                            <label for="flat-rate">
                              {{ $t('checkout.details.order.flat-rate') }}: <span class="amount">{{ $t('currency-mark') }}{{ locale === 'ja'? 700: 7 }}</span>
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
                            {{ $t('currency-mark') }}{{ typeof ship_cost === 'number' && ship_cost > 0 ?
                              locale === 'ja' ? ((state.totalPriceQuantity.total) * 100 + ship_cost).toLocaleString() :(state.totalPriceQuantity.total + ship_cost).toLocaleString()
                              : locale === 'ja' ? (state.totalPriceQuantity.total * 100).toLocaleString() : state.totalPriceQuantity.total.toLocaleString() }}
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
            <!-- order area end -->
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
// import { ref } from '@vue/composition-api'
import BillingDetails from './BillingDetails.vue'
import DifferentAddress from './DifferentAddress.vue'
import OrderArea from './OrderArea.vue'
import CountrySelect from './CountrySelect.vue'
import { useCartStore } from '~/store/useCart'

const router = useRouter()
const localePath = useLocalePath()
const state = useCartStore()
const { locale } = useI18n()

let ship_cost
if (locale.value === 'ja') {
  ship_cost = ref(700)
} else {
  ship_cost = ref(7)
}

const info = reactive({
  firstName: '',
  lastName: '',
  companyName: '',
  address: '',
  addressDetails: '',
  town: '',
  state: '',
  zip: '',
  email: '',
  phone: '',
})

const handleFormSubmit = () => {
  console.log('submit form')
  console.log(info)
  state.clear_cart_checkout()
  router.push(localePath('/thank-you'))
}
</script>
