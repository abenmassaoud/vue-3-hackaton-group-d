<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <p>{{ props.question.question }}</p>
      </div>
    </template>
    <div
      :key="index"
      class="card-answer"
      v-for="(answer, index) in props.question.allAnswers"
    >
      <input
        type="radio"
        :id="index"
        :value="answer"
        v-model="selectedAnswer"
        @click="onAnswer"
      />
      <label :for="index">{{ answer }}</label>
    </div>
  </el-card>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["on-answer"]);

const selectedAnswer = ref("");

const onAnswer = () => {
  const payload = {
    id: props.question.id,
    answer: selectedAnswer.value,
  };
  console.log("on-answer-bar", payload);
  emit("on-answer", payload);
};
</script>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
.card-answer {
  cursor: pointer;
}
</style>
