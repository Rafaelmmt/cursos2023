<template>
  <q-page>
    <q-icon
      name="fas fa-chevron-left"
      size="23px"
      class="absolute-left q-mt-lg"
      color="grey"
    />

    <div class="full-width column items-center cont-padding">
      <q-img class="logo q-mb-lg" src="/media/instadev-logo.svg"/>

      <q-form class="full-width">
        <q-input filled v-model="name" label="Name" class="full-width q-mb-md"/>
        <q-input filled v-model="email" label="E-mail" class="full-width q-mb-md"/>
        <q-input filled v-model="userName" label="User Name" class="full-width q-mb-md"/>
        <q-input filled v-model="password" label="Password"
          type="password" class="full-width q-mb-md"
        />
        <q-input filled v-model="confirmPassword" label="Confirm Password"
          type="password" class="full-width"
        />
        <q-btn
          type="submit"
          color="primary"
          label="Sign Up"
          class="sign-up-button full-width q-mt-lg"
        />
      </q-form>

      <div class="full-width row items-center justify-center q-my-xl">
        <q-separator class="separator" inset/>OR<q-separator class="separator" inset/>
      </div>

      <div class="full-width row items-center justify-center ">
        <span class="text-black-opacity">Already have an account?</span>
        <a href="#" class="link q-ml-xs">Sign In.</a>
      </div>
    </div>

    <div class="full-width column items-center absolute-bottom">
      <q-separator class="full-width"/>
      <div class="q-my-lg">
        <span class="text-black-opacity">Instagram of Facebook</span>
      </div>
    </div>

  </q-page>
</template>

<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'SignUp',
});

const name = ref('');
const email = ref('');
const userName = ref('');
const password = ref('');
const confirmPassword = ref('');

</script>

<style lang="scss" scoped>
.cont-padding {
  padding-top: 15vh;
}
.logo {
  height: 49px;
  width: 182px;
}
.sign-up-button {
  height: 44px;
  border-radius: 5px;
}
.separator {
  width: 35%;
}
</style>
