<template>
  <el-container>
    <el-header>
      <h1>The Quiz Game</h1>
    </el-header>
    <el-main>
      <div class="questions">
        <div
          v-for="question in questions"
          :key="question.id"
        >
            <QuestionCard :question="question" @on-answer="onAnswer" />
        </div>
        <div>Score: {{ correctAnswersCount }} / {{ questions.length }}</div>
      </div>
    </el-main>
    <el-footer>By Storyblok - Group D</el-footer>
  </el-container>
</template>

<script>
import QuestionCard from "./QuestionCard.vue";
import { fetchQuestions } from "../fetchQuestions";
import { computed, ref, watch } from "vue-demi";

export default {
  components: { QuestionCard },
  async setup() {
    const questions = await fetchQuestions(10);
    const givenAnswers = ref([]);
    const givenAnswer = (question) =>
      givenAnswers.value.find((givenAnswer) => question.id === givenAnswer.id);
    function onAnswer(answer) {
      if (
        givenAnswers.value.find((givenAnswer) => answer.id === givenAnswer.id)
      ) {
        // Do nothing
        return;
      }
      givenAnswers.value.push(answer);
      console.log(givenAnswers.value);
    }
    const questionById = (id) =>
      questions.find((question) => question.id === id);
    const isCorrect = (question, answer) => question.correctAnswer === answer;
    const correctAnswersCount = computed(
      () =>
        givenAnswers.value.filter((givenAnswer) =>
          isCorrect(questionById(givenAnswer.id), givenAnswer)
        ).length
    );
    watch(correctAnswersCount, () => {
      localStorage('correctAnswersCount', correctAnswersCount)
    })
    return { questions, onAnswer, givenAnswers, givenAnswer, correctAnswers: correctAnswersCount };
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
