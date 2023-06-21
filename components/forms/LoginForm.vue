<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="mb-20">
      <label for="email-id">{{ $t('login.email') }} <span>**</span></label>
      <Field id="email-id" name="email" type="text" :placeholder="$t('login.placeholder.email')" />
      <ErrorMessage name="email" class="text-danger" />
    </div>

    <div class="mb-20">
      <label for="pass">{{ $t('login.password') }} <span>**</span></label>
      <Field id="pass" name="password" type="password" :placeholder="$t('login.placeholder.password')" />
      <ErrorMessage name="password" class="text-danger" />
    </div>

    <div class="login-action mb-20 fix">
      <span class="log-rem f-left">
        <input id="remember" type="checkbox">
        <label for="remember">{{ $t('login.remember-me') }}</label>
      </span>
      <span class="forgot-login f-right">
        <a href="#">{{ $t('login.lost-password') }}</a>
      </span>
    </div>
    <button class="os-btn w-100">
      {{ $t('login.login') }}
    </button>
    <div class="or-divide">
      <span>or</span>
    </div>
    <nuxt-link href="/register" class="os-btn os-btn-black w-100">
      {{ $t('login.register') }}
    </nuxt-link>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default defineComponent({
  components: { Field, Form, ErrorMessage },
  setup () {
    const schema = yup.object({
      email: yup.string().required().email().label('Email'),
      password: yup.string().required().min(6).label('Password'),
    })

    function onSubmit (values: object, { resetForm }: {resetForm: () => void}) {
      alert(JSON.stringify(values, null, 2))
      resetForm()
    }
    return { schema, onSubmit }
  },
})
</script>
