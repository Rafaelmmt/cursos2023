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
        <q-input filled label="E-mail ou usuário" class="full-width q-mb-md"/>
        <q-input filled label="Password" type="password" class="full-width"/>
        <div class="column items-end full-width">
          <a class="q-mt-md link" href="">Forgot password?</a>
        </div>
        <q-btn
          type="submit"
          color="primary"
          label="Log in"
          class="sign-in-button full-width q-mt-lg"
        />
      </q-form>

      <div class="flex full-width row items-center justify-center q-mt-xl">
        <q-img class="facebook-icon" src="/media/facebook-logo.svg"/>
        <a href="" class="link q-ml-xs">Log in with Facebook</a>
      </div>

      <div class="full-width row items-center justify-center q-my-xl">
        <q-separator class="separator" inset/>OR<q-separator class="separator" inset/>
      </div>

      <div class="full-width row items-center justify-center">
        <span class="text-black-opacity">Don't have an account?</span>
        <a href="#/signup" class="link q-ml-xs">Sign up.</a>
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
defineOptions({
  name: 'SignIn',
});
</script>

<style lang="scss" scoped>
.cont-padding {
  padding-top: 15vh;
}
.logo {
  height: 49px;
  width: 182px;
}
.sign-in-button {
  height: 44px;
  border-radius: 5px;
}
.facebook-icon {
  height: 17px;
  width: 17px;
}
.separator {
  width: 35%;
}
</style>
