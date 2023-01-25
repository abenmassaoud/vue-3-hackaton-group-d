<template>
  <el-container>
    <el-header>
      <h1>
        The Quiz Game
      </h1>
    </el-header>
    <el-main>
      <div class="questions">
        {{ JSON.stringify(givenAnswers) }}
        <div
          v-for="question in questions"
          v-bind:key="question.id"
        >
            {{ givenAnswer(question) ? `You answered "${givenAnswer(question)?.answer}"` : 'Not answered' }}
            <QuestionCard :question="question" @on-answer="onAnswer" />
        </div>
      </div>
    </el-main>
    <el-footer>By Storyblok - Group D</el-footer>
  </el-container>
</template>

<script>
import QuestionCard from "./QuestionCard.vue";
import { fetchQuestions } from "../fetchQuestions";
import { ref } from 'vue-demi';

export default {
  components: { QuestionCard },
  async setup() {
    const questions = await fetchQuestions(10);
    const givenAnswers = ref([])
    function onAnswer(answer) {
      givenAnswers.value.push(answer)
    }
    const givenAnswer = (question) => givenAnswers.value.find(givenAnswer => question.id === givenAnswer.id)
    return { questions, onAnswer, givenAnswers, givenAnswer };
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
