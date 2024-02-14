<script setup>
const props = defineProps (['books']); 
</script>

<template>
    <div class="books-list">
        <div v-for="book in books" :key="book.id" class="book">
          <div class="readIt" v-if="book.alreadyRead">
            <i class="fa-solid fa-eye"></i>
          </div>
          <div class="book-cover">
            <img :src="book.cover">
            
            <button
            @click="$emit('toggleIsRead', book.id)" 
            :class="{ isRead : book.alreadyRead }">
              <i class="fa-solid fa-eye"></i>
              <span>{{ book.alreadyRead ? 'Já li' : 'Ainda não li' }}</span>
            </button>
          </div>
          <div class="book-details">
          <p class="book-author">{{ book.author }}</p>
          <h3 class="book title">{{ book.title }}</h3>
          </div>
        </div>
      </div>
</template>
