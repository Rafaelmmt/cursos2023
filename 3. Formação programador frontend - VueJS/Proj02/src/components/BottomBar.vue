<template>
  <div class="full-width row justify-around">
    <q-img src="/media/house.svg" ></q-img>
    <q-img src="/media/search.svg" ></q-img>
    <q-img src="/media/add.svg" ></q-img>
    <q-img width="29px" src="/media/heart.svg" ></q-img>
    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>
  </div>
</template>

<script setup>
defineOptions({
  name: 'BottomBar',
});
</script>

<style lang="scss" scoped>
.q-img {
  cursor: pointer;
  height: 25px;
  width: 25px;
}
.q-avatar{
  cursor: pointer;
  height: 25px;
  width: 25px;
}
</style>
