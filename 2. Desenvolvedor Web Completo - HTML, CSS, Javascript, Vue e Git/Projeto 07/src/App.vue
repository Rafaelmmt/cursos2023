<!-- HTML -->

<template>
  <div>

    <scoreBoard :humanPoints="this.humanPoints" :pcPoints="this.pcPoints" />
    
    <template v-if="this.question">

      <h1 v-html="this.question"></h1>
  
      <template v-for="(answer, index) in this.answers" v-bind:key="index">
        
        <input
        :disabled="this.answerSubmitted" 
        type="radio" 
        name="options" 
        :value="answer" 
        v-model="this.uAnswer"
        >
        
        <label v-html="answer"></label><br>
      
      </template>
      
      <button
      v-if="!this.answerSubmitted" 
      @click="this.submitAnswer()"
      class="send" 
      type="button">Enviar</button>

      <section v-if="this.answerSubmitted" class="result">
        <h4 v-if="this.uAnswer == vAnswer" v-html="'&#9989; Você acertou, parabéns!'"></h4>
        <h4 v-else v-html="'&#10060; Você escolheu a alternativa errada. A resposta correta é &quot;' + this.vAnswer + '&quot;.'"></h4>
        <button @click="this.getNewQuestion()" class="nextQ" type="button">Próxima Pergunta</button>
      </section>
    
    </template>
  
    
  </div>
    
      
</template>



<!-- JAVASCRIPT -->

<script>

import scoreBoard from './/components/scoreBoard.vue'
export default {

  name: 'App',
  components: {
    scoreBoard
  },
  
  data() {
    return {
      question: undefined,
      fAnswers: undefined,
      vAnswer: undefined,
      uAnswer: undefined,
      answerSubmitted: false,
      humanPoints: 0,
      pcPoints: 0
    }
  },

  computed: {
    answers() {
      var answers = JSON.parse(JSON.stringify(this.fAnswers));
      answers.splice( Math.round(Math.random() * answers.length), 0, this.vAnswer);
      return answers;
    }
  },

  methods: {
    submitAnswer() {
      if (!this.uAnswer){
        alert('Selecione uma opção.');
      } else {
        this.answerSubmitted = true;
        if (this.uAnswer == this.vAnswer) {
          this.humanPoints++;
        } else{
          this.pcPoints++; 
        }
      }
    },

    getNewQuestion() {
      
      this.answerSubmitted = false;
      this.uAnswer = undefined;
      this.question = undefined;

      this.axios
      .get('https://opentdb.com/api.php?amount=1&category=20')
      .then((response) => {
        this.question = response.data.results[0].question;
        this.fAnswers = response.data.results[0].incorrect_answers;
        this.vAnswer = response.data.results[0].correct_answer;
        console.log(response.data.results[0])
      })
    }
  },

  created() {
      this.getNewQuestion();
    }
}

</script>


<!-- CSS -->

<style lang="scss">
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px auto;
    max-width: 960px;

    input[type=radio] {
      margin: 12px 4px;
    }

    button.send {
      margin-top: 12px;
      height: 40px;
      min-width: 120px;
      padding: 0 16px;
      color: #fff;
      background-color: #1867c0;
      border: 1px solid #1867c0;
      cursor: pointer;
    }

    button.nextQ {
      margin-top: 12px;
      height: 40px;
      min-width: 120px;
      padding: 0 16px;
      color: #fff;
      background-color: #1867c0;
      border: 1px solid #1867c0;
      cursor: pointer;
    }

  }

</style>
