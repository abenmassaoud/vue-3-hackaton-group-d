## Components 

- `Layout.vue` - contains the header and footer?
  - children
- `QuizGame.vue` - fetches the questions, tracks the given answers
- `QuestionCard.vue`
  - props:
    - `question` - the question object
  - emit:
    - `givenAnswer` - the answer that was given, or undefined if not yet given

## Functions