<template>
  <el-card class="box-card">
    <p><b>{{ status }}</b></p>
    <template #header>
      <div class="card-header">
        <p>{{ props.question.question }}</p>
      </div>
    </template>
    <div class="card-answers">
      <el-card
          :key="index"
          class="card-answer"
          v-for="(answer, index) in props.question.allAnswers"
      ><label>
        <input
            type="radio"
            :id="id + '-' + index"
            :value="answer"
            v-model="selectedAnswer"
        />
        {{ answer }}</label>
      </el-card>
    </div>
  </el-card>
</template>

<script setup>
import {ref, defineProps, defineEmits, computed, watch } from "vue";
import {v4 as uuidv4} from 'uuid';

const id = uuidv4();

const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
});

const status = computed(() => selectedAnswer.value ? `You answered ${selectedAnswer.value}` : 'Not answered')

const emit = defineEmits(["on-answer"]);

const selectedAnswer = ref("");

const onAnswer = (answer) => {
  const payload = {
    id: props.question.id,
    answer: answer,
  };
  emit("on-answer", payload);
};

watch(selectedAnswer, async (newAnswer) => {
  onAnswer(newAnswer)
})
</script>
<style scoped>
::v-deep .el-card__header {
  background: #00b3b0;
  font-weight: bold;
  color: white;
}

.box-card {
  width: 680px
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-answers {
  display: flex;
  flex-flow: row nowrap;
  text-align: center;
  justify-content: center;
}

.card-answer {
  cursor: pointer;
  text-align: center;
}

.card-answer + .card-answer {
  margin-left: 1rem;
}

.card-answer input {
  display: none;
}

</style>
