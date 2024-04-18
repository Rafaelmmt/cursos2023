<template>
  <q-scroll-area
      horizontal
      :visible="false"
      class="scroll-area full-width"
    >
      <div class="row no-wrap">
        <div class="full-width" v-for="item in 10" :key="item">
          <div class="column items-center justify-center q-mr-md">
            <q-avatar size="80px">
              <img class="avatar-img" src="https://cdn.quasar.dev/img/avatar.png">
            </q-avatar>
            <span>Nome</span>
          </div>
        </div>
      </div>
    </q-scroll-area>
</template>

<script setup>
defineOptions({
  name: 'ScrollArea',
});
</script>

<style lang="scss" scoped>
.scroll-area {
  height: 100px;
  margin-top: 75px;
}
.q-avatar{
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(#FBAA47,#D91A46, #A60F91);
  padding: 2px;
}
</style>
