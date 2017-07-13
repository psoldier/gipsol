// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  add: (item) => {
    return {type: types.ADD, payload: item}
  },
  remove: (item) => {
    return {type: types.REMOVE, payload: item}
  }
}

// Initial state of the store
const initialState = {
  categories: [
    {
      id: 1,
      title: 'Energías Renovables',
      score: 0,
      lifes: 3,
      maxScore: 0,
      questions: [
        {
          id: 1,
          question: '¿Cuál de las siguientes fuentes de energías no es renovable?',
          options:[{id: 1, text: 'HIDRÁULICA', value: false},{id: 2, text: 'SOLAR',value: false},{id: 3, text: 'EÓLICA',value: false},{id: 4, text: 'PETROLEO',value: true}]
        },
        {
          id: 2,
          question: '¿Qué elemento es el mayor generador de energía eólica?',
          options:[{id: 1, text: 'ESPEJOS', value: false},{id: 2, text: 'MOLINOS',value: true},{id: 3, text: 'VOLCANES',value: false},{id: 4, text: 'SPINNERS',value: false}]
        },
        {
          id: 3,
          question: '¿En que sector se consume más energía?',
          options:[{id: 1, text: 'SECTOR TRANSPORTE', value: true},{id: 2, text: 'SECTOR INDUSTRIAL',value: false},{id: 3, text: 'SECTOR DOMÉSTICO',value: false},{id: 4, text: 'SECTOR CREATIVO',value: false}]
        },
        {
          id: 4,
          question: 'Petróleo, carbón, uranio, sol y viento, son...',
          options:[{id: 1, text: 'FUENTES DE ENERGÍAS', value: true},{id: 2, text: 'ENERGÍAS',value: false},{id: 3, text: 'FUERZAS',value: false},{id: 4, text: 'INVENTOS HUMANOS',value: false}]
        }
      ],
      question_id: 1
    },
    {
      id: 2,
      title: 'Transporte',
      score: 0,
      lifes: 3,
      maxScore: 0,
      questions: [
        {
          id: 1,
          question: '¿Super o Premium?',
          options:[{id: 1, text: 'SUPER', value: false},{id: 2, text: 'PREMIUM',value: false},{id: 3, text: 'INFINIA',value: false},{id: 4, text: 'POWERADE',value: true}]
        }
      ],
      question_id: 1
    },
    {
      id: 3,
      title: 'Test',
      score: 0,
      lifes: 3,
      maxScore: 0,
      questions: [
        {
          id: 1,
          question: '¿Mejor equipo de futbol?',
          options:[{id: 1, text: 'BOCA', value: false},{id: 2, text: 'LOBO',value: true},{id: 3, text: 'PINCHA',value: false},{id: 4, text: 'RIBER',value: false}]
        }
      ],
      question_id: 1
    }
  ],
}

// Function to handle actions and update the state of the store.
// Notes:
// - The reducer must return a new state object. It must never modify
//   the state object. State objects should be treated as immutable.
// - We set \`state\` to our \`initialState\` by default. Redux will
//   call reducer() with no state on startup, and we are expected to
//   return the initial state of the app in this case.
export const reducer = (state = initialState, action) => {
  const {categories} = state
  const {type, payload} = action

  switch (action.type) {
  case types.ADD: {
    return {
      ...state,
      categories: state.categories.map(category => category.id === payload.id ? 
        { ...category, score: category.score + 1, question_id: (category.questions.length == category.question_id ? 1 : category.question_id + 1) } : category
      )
    }
  }
  case types.REMOVE: {
    return {
      ...state,
      categories: state.categories.map((category)=>{
        if(category.id === payload.id){
          if (category.lifes == 0){
            category.maxScore = category.maxScore < category.score ? category.score : category.maxScore;
            category.lifes = 3;
            category.score = 0;
          }else{
            category.lifes = category.lifes - 1;
          }
        category.question_id = (category.questions.length == category.question_id ? 1 : category.question_id + 1);
        }
        return category
      })
    }
  }
  default:
    return state;
  }
}