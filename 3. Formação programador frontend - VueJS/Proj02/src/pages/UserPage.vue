<template>
  <q-page class="flex">
    <q-icon name="fa-solid fa-bars" size="31px" class="absolute-right q-ms-lg" />
    <div class="full-width row items-center justify-center">
      <q-icon name="fa-solid fa-lock" color="black" size="11px" class="q-mr-xs" />
      <strong>rmmt_86</strong>
      <q-icon name="fa-solid fa-chevron-down" color="black" size="11px" class="q-ml-xs" />
    </div>
    <div class="row items-center justify-around full-width">
      <div class="userPage-avatar">
        <q-avatar size="90px">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
      </div>
      <div class="column items-center">
        <strong>54</strong>
        <span>Posts</span>
      </div>
      <div class="column items-center">
        <strong>834</strong>
        <span>Followers</span>
      </div>
      <div class="column items-center">
        <strong>162</strong>
        <span>Following</span>
      </div>
    </div>
    <div class="column q-mt-md">
      <span>
        Adicione uma descrição a sua bio.
      </span>
      <span>
        Everything is designed.
      </span>
    </div>
    <q-btn
      color="white"
      flat
      dense
      class="btn-edit full-width q-my-md"
      text-color="black"
      label="Edit Profile"
    />
    <q-btn
      color="white"
      flat
      dense
      class="btn-edit full-width q-mb-lg"
      text-color="black"
      label="Delete Profile"
    />

    <div class="container-bottom full-width q-pb-lg">
      <q-separator class="full-width q-mb-lg"/>
      <BottomBar />
    </div>
  </q-page>
</template>

<script setup>
import BottomBar from 'src/components/BottomBar.vue';

defineOptions({
  name: 'UserPage',
});
</script>

<style lang="scss" scoped>
.userPage-avatar{
  padding: 2px;
  background-color: aqua;
  border: 1px solid #f30e0e;
  border-radius: 100%;
}

.btn-edit {
  height: 35px;
  border-radius: 6px;
  text-transform: none;
  border: 1px solid rgba(60, 60, 67, 0.18);
}
</style>
