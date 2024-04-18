<template>
  <q-page class="flex column main-container">
    <q-img class="img-btn" @click="fraseApp()" src="/media/quotelogo.svg"/>
    <p class="text-center main-text">
      "{{ arrayFrases[arrayPosition] }}"
    </p>
  </q-page>
</template>

<script setup>
import { reactive, ref } from 'vue';

defineOptions({
  name: 'IndexPage',
});

const arrayFrases = reactive([
  'Só se vê bem com o coração, o essencial é invisível aos olhos.',
  'Quando acordei hoje de manhã, eu sabia quem eu era, mas acho que já mudei muitas vezes desde então.',
  'As coisas têm vida própria. Tudo é questão de despertar a sua alma.',
  'Por você, faria isso mil vezes.',
  'Tudo depende do tipo de lente que você utiliza para ver as coisas.',
  'Quando os pés estão corretos, todo o resto nos acompanha.',
  'Às vezes, se apaixonar é a atitude mais corajosa que alguém pode ter.',
  'Também o amor se aprende.',
  'Um grande amor vale anos de espera.',
  'Amor não é coisa que se possa pedir a alguém.',
  'O amor não força nada, ao contrário, ele abre caminho.',
  'Pretender-se que a vida dos homens seja sempre dirigida pela razão é destruir toda a possibilidade de vida.',
  'Há coisas que são preciosas por não durarem.',
  'Esse é o problema da dor. Ela precisa ser sentida.',
]);

const favoritas = [0, 6, 8, 11];

const arrayPosition = ref(favoritas[Math.floor(Math.random() * favoritas.length)]);

function fraseApp() {
  arrayPosition.value = Math.floor(Math.random() * arrayFrases.length);
  return arrayPosition;
}
</script>

<style lang="scss" scoped>
.main-container {
  background-color: #e0e1dd;
  text-align: center;
}
.img-btn {
  margin: 75px auto;
  height: 50px;
  width: 50px;
  cursor: pointer;
}
.main-text {
  color: #415a77;
  text-transform: uppercase;
  font-size: 45pt;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  font-style: normal;
  margin: 0px 15vw;
}

@media screen and (max-width: 900px) {
  .main-text {
  font-size: 30pt;
  margin: 0px 10vw;
  }
}
</style>
