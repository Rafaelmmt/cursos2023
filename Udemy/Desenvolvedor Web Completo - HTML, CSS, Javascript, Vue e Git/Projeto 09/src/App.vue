<script setup>
import{ref, reactive} from 'vue';
import Books from './components/Books.vue';
import Progress from './components/Progress.vue';
import AddBook from './components/AddBook.vue'

let books = reactive([
  {
    id: 1,
    title: "O velho e o mar",
    cover: "https://m.media-amazon.com/images/I/419Jl7oflOL._SY445_SX342_.jpg", 
    alreadyRead: false,
    author: "Ernest Hemingway",
  },
  {
    id: 2,
    title: "A morte de Ivan Ilitch",
    cover: "https://m.media-amazon.com/images/I/51B3mmYZPrL._AC_UF1000,1000_QL80_.jpg", 
    alreadyRead: true,
    author: "Leon Tolstói",
  },
  {
    id: 3,
    title: "It: A coisa",
    cover: "https://m.media-amazon.com/images/I/51z0s3GcvwL.jpg", 
    alreadyRead: false,
    author: "Stephen King",
  }    
]);

function addBook(newBook) {
  newBook.id = Math.max(...books.map(el => el.id)) + 1; 
  books.push(newBook);
  showAddBook.value = false;
};

let showAddBook = ref (false);

function toggleIsRead(id) {
  books.forEach((book) => {
    if (book.id === id) {
      book.alreadyRead = !book.alreadyRead;
    }
  }); 
}

</script>

<template>

  <div v-if="!showAddBook" class="container">
    <h1>Meus Livros</h1>
    <div class="header-btns">
      <button class="btn" @click="showAddBook = true">Adicionar Livro</button>
      <button class="btn">Visão Lista</button>
    </div>

    <div class="books-container">

      <Books @toggleIsRead="toggleIsRead" :books="books"></Books> 
      <Progress :books="books"></Progress>
      
    </div>
  </div>
  
  <div v-else class="container">
    <AddBook @addBook="addBook" @closeAddBook="showAddBook = false"></AddBook>
  </div>

</template>
