<template>
  <q-page class="flex">
    <div class="container-top full-width">
      <TopBar class="q-mt-md"/>
      <q-separator class="full-width q-mt-sm"/>
    </div>

    <ScrollArea class="q-px-sm" />
    <PostsComp v-for="item in 10" :key="item" />

    <div class="container-bottom full-width q-pb-lg">
      <q-separator class="full-width q-mb-lg"/>
      <BottomBar />
    </div>
  </q-page>
</template>

<script setup>
import TopBar from 'src/components/TopBar.vue';
import ScrollArea from 'src/components/ScrollArea.vue';
import BottomBar from 'src/components/BottomBar.vue';
import PostsComp from 'src/components/PostsComp.vue';

defineOptions({
  name: 'IndexPage',
});
</script>

<style lang="scss" scoped>

</style>
