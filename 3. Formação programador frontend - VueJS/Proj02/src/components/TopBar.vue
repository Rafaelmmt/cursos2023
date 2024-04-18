<template>
  <div class="full-width row justify-between">
    <q-img class="q-ml-sm camera" src="/media/camera.svg" ></q-img>
    <q-img class="logo" src="/media/instadev-logo.svg"></q-img>
    <div>
      <q-img class="q-mr-lg" src="/media/reels.svg" width="28px"></q-img>
      <q-img class="q-mr-sm" src="/media/direct.svg" width="28px"></q-img>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'TopBar',
});
</script>

<style lang="scss" scoped>
.logo {
  width: 115px;
  height: 30px;
}
.camera {
  width: 29px;
  height: 26px;
}
.q-img {
  cursor: pointer;
}
</style>
