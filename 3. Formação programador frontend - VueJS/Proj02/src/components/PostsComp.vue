<template>
  <div class="full-width q-pb-xl">
    <div class="column full-width">
      <div class="row justify-between items-center full-width">
        <div class="row items-center">
          <q-avatar class="post-avatar q-mx-md">
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <div class="column">
            <strong>rmmt_86</strong>
            <span>Florianópolis, Brasil</span>
          </div>
        </div>
        <q-icon name="fa-solid fa-ellipsis" size="24px" />
      </div>
      <q-img
        class="q-mt-sm cursor-pointer"
        src="https://picsum.photos/500/300"
        :ratio="1"
        @click="countClicks++">
        <q-icon
          v-if="animationClass !== ''"
          :class="animationClass"
          class="absolute-center"
          name="fa-solid fa-heart"
          color="white"/>
      </q-img>
      <div class="row justify-between q-mx-sm q-my-md">
        <div>
          <q-img class="q-mr-md" width="24px" src="/media/heart.svg" ></q-img>
          <q-img class="q-mr-md" width="22px" src="/media/comment.svg" ></q-img>
          <q-img class="q-mr-md" width="25px" src="/media/direct.svg" ></q-img>
        </div>
        <q-icon class="q-mr-xl" name="fas fa-ellipsis-h" size="20px" color="dark-items"></q-icon>
        <q-img width="20px" src="/media/save-post.svg" ></q-img>
      </div>
      <div class="row items-center q-mb-xs">
        <q-avatar size="17px" class="q-ml-sm q-mr-xs">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        Liked by <strong>craig_lane</strong> and <strong>1,250 others</strong>.
      </div>
      <div class="q-mx-sm q-mb-lg">
        <strong>rmmt_86</strong> The game in Floripa is crazy.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

defineOptions({
  name: 'PostComp',
});

const animationClass = ref('');
const countClicks = ref(0);

function addLikeAnimation() {
  animationClass.value = 'animate-like';
  setTimeout(() => {
    animationClass.value = '';
  }, 500);
}

watch(countClicks, (newCount) => {
  setTimeout(() => {
    if (newCount !== 2) {
      countClicks.value = 0;
    }
  }, 500);
  if (newCount === 2) {
    addLikeAnimation();
    countClicks.value = 0;
  }
});

</script>

<style lang="scss" scoped>
.post-avatar{
  cursor: pointer;
  height: 30px;
  width: 30px;
}
.q-icon{
  color: $dark-items;
}
.animate-like {
  animation-duration: 500ms;
  animation-name: liked;
}
@keyframes liked {
  from {
    font-size: 0px;
  }
  25% {
    font-size: 37,5px;
  }
  50% {
    font-size: 75px;
  }
  75% {
    font-size: 37,5px;

  }
  to {
    font-size: 0,0px;
  }
}
</style>
