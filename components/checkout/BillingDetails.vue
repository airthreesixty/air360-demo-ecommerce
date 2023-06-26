<template>
  <div class="row">
    <div class="col-md-12">
      <country-select />
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>{{ $t('checkout.details.first-name') }} <span class="required">*</span></label>
        <input type="text" :placeholder="$t('checkout.details.first-name')">
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>{{ $t('checkout.details.last-name') }}<span class="required">*</span></label>
        <input type="text" :placeholder="$t('checkout.details.last-name')">
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>{{ $t('checkout.details.company-name') }}</label>
        <input type="text" :placeholder="$t('checkout.details.company-name')">
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>{{ $t('checkout.details.address') }} <span class="required">*</span></label>
        <input type="text" :placeholder="$t('checkout.details.street-address')">
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <input
          type="text"
          :placeholder="$t('checkout.details.street-address-details')"
        >
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>{{ $t('checkout.details.town') }} <span class="required">*</span></label>
        <input type="text" placeholder="Town / City">
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>{{ $t('checkout.details.state') }} <span class="required">*</span></label>
        <input type="text" :placeholder="$t('checkout.details.state')">
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>{{ $t('checkout.details.zip') }} <span class="required">*</span></label>
        <input type="text" :placeholder="$t('checkout.details.zip')">
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>{{ $t('checkout.details.email') }} <span class="required">*</span></label>
        <input type="email" :placeholder="$t('checkout.details.email')">
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>{{ $t('checkout.details.phone') }}<span class="required">*</span></label>
        <input type="text" :placeholder="$t('checkout.details.phone')">
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list create-acc">
        <input id="cbox" type="checkbox" @click="handleCreateAccount">
        <label for="cbox">{{ $t('checkout.details.create-account') }}</label>
      </div>
      <!-- <div v-if="createAccount" id="cbox_info" class="checkout-form-list create-account">
        <p>
          Create an account by entering the information below. If you are a
          returning customer please login at the top of the page.
        </p>
        <label>{{ $t('checkout.details.password') }}<span class="required">*</span></label>
        <input type="password" placeholder="password">
      </div>
    </div> -->
    </div>
  </div>
</template>

<script>
import CountrySelect from './CountrySelect.vue'

export default {
  components: { CountrySelect },
  data () {
    return {
      createAccount: false,
    }
  },
  methods: {
    handleCreateAccount () {
      this.createAccount = !this.createAccount
    },
  },
}
</script>
