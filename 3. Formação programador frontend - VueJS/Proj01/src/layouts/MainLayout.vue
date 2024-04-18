<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="t-title">Frases App</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: 'MainLayout',
});
</script>

<style lang="scss" scoped>
.t-title {
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
