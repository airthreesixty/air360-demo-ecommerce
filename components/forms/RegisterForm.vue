<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div class="mb-20">
      <label for="name">{{ $t('signup.username') }}<span>**</span></label>
      <Field id="name" name="name" type="text" placeholder="Enter Username" />
      <ErrorMessage name="name" class="text-danger" />
    </div>

    <div class="mb-20">
      <label for="email-id">{{ $t('signup.email') }}<span>**</span></label>
      <Field id="email-id" name="email" type="text" placeholder="Email address..." />
      <ErrorMessage name="email" class="text-danger" />
    </div>

    <div class="mb-20">
      <label for="pass">{{ $t('signup.password') }} <span>**</span></label>
      <Field id="pass" name="password" type="password" placeholder="Enter password..." />
      <ErrorMessage name="password" class="text-danger" />
    </div>

    <div class="mt-10" />
    <button type="submit" class="os-btn w-100">
      {{ $t('signup.register') }}
    </button>
    <div class="or-divide">
      <span>{{ $t('signup.or') }}</span>
    </div>
    <nuxt-link href="/login" class="os-btn os-btn-black w-100">
      {{ $t('signup.login') }}
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
      name: yup.string().required().label('Name'),
      email: yup.string().required().email().label('Email'),
      password: yup.string().required().min(6).label('Password'),
    })

    function onSubmit (values: object, { resetForm }: {resetForm: () => void}) {
      // alert(JSON.stringify(values, null, 2))
      alert("You're not allowed to create an account.")
      resetForm()
    }
    return { schema, onSubmit }
  },
})
</script>
