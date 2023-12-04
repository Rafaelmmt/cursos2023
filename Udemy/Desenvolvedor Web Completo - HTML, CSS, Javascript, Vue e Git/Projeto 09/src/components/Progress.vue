<script setup>
import { computed } from 'vue';

const props = defineProps (['books']);

const readBooks = computed(() => {
    return props.books.filter(book => book.alreadyRead).length;
})

const readBooksMsg = computed(() => {
    return readBooks.value >= props.books.length ? 
    'Parabéns, você leu todos os seus livros!' :
    `${readBooks.value} de ${props.books.length} livros lidos`;
})

</script>

<template>
    <div class="books-read">
        <label for="progress">Seu Progresso</label>
        <br>
        <progress :value="readBooks" :max="books.length"></progress>
        <p>{{ readBooksMsg }}</p>
    </div>
</template>