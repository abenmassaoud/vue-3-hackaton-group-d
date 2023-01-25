<template>
  <suspense>
    <quiz-game />
  </suspense>
</template>

<script>
import QuizGame from './components/QuizGame.vue'
export default {
  name: 'App',
  components: {
    QuizGame,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
