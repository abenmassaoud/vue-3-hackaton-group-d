const questions = [
  {
    "id": "1",
    // "category": "Tech",
    "question": "Who is the creator of Vue?",
    "correctAnswer": 'Evan You',
    // Add this property; a union between incorrectAnswers and correctAnswer, shuffled
    allAnswers: [
      'Evan You',
      'Rich Harris',
      'Douglas Crockford',
    ],
  },
  {
    "id": "2",
    // "category": "Tech",
    "question": "What is an immutable object?",
    "correctAnswer": 'Object state can’t be modified',
    // Add this property; a union between incorrectAnswers and correctAnswer, shuffled
    allAnswers: [
      'Object state can be replaced',
      'Object state can’t be replaced',
      'Object state can’t be modified',
      'Object state can be modified',
    ],
  },
]

const givenAnswers = [{
  id: 'abc123',
  answer: 'Evan You'
}]
