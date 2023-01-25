<template>
  <el-container>
    <el-header>
      <h1>The Quiz Game</h1>
    </el-header>
    <el-main>
      <div class="questions">
        <div>You answered: {{ givenAnswers.length }} / {{ questions.length }} questions</div>
        <div
            v-for="question in questions"
            :key="question.id"
        >
          <QuestionCard :question="question" @on-answer="onAnswer"/>
        </div>
        <div v-if="givenAnswers.length < questions.length">Waiting for you to answer all questions...</div>
        <div v-else>Score: {{ correctAnswersCount }} / {{ questions.length }}</div>
      </div>
    </el-main>
    <el-footer>By Storyblok - Group D</el-footer>
  </el-container>
</template>

<script>
import QuestionCard from "./QuestionCard.vue";
import {fetchQuestions} from "../fetchQuestions";
import {computed, ref, watch} from "vue-demi";

export default {
  components: {QuestionCard},
  async setup() {
    const questions = await fetchQuestions(5);
    const givenAnswers = ref([]);
    const givenAnswer = (question) =>
        givenAnswers.value.find((givenAnswer) => question.id === givenAnswer.id);
    const questionById = (id) =>
        questions.find((question) => question.id === id);

    function onAnswer(answer) {
      givenAnswers.value = [
        ...givenAnswers.value.filter(givenAnswer => givenAnswer.id !== answer.id),
        answer
      ]
    }

    const isCorrect = (question, givenAnswer) =>  question.correctAnswer === givenAnswer.answer;
    const correctAnswersCount = computed(
        () => givenAnswers.value.filter((givenAnswer) =>
            isCorrect(questionById(givenAnswer.id), givenAnswer)
        ).length
    );
    watch(correctAnswersCount, () => {
      console.log('correctAnswersCount', correctAnswersCount)
    })
    return {questions, onAnswer, givenAnswers, givenAnswer, correctAnswersCount};
  },
};
</script>

<style scoped>
.questions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
</style>
