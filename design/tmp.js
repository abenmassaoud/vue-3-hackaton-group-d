const answers = questions.map(question => ({
    ...question,
    allAnswers: [
        ...questions.incorrectAnswers,
        question.correctAnswer,
    ].shuffle()
}))