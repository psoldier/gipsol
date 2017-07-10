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
      //listado de preguntas
      //id_ultima pregunta preguntada
    },
    {
      id: 2,
      title: 'Transporte',
      score: 0,
      lifes: 3,
    },
    {
      id: 3,
      title: 'Test',
      score: 0,
      lifes: 3,
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
//
  switch (action.type) {
  case types.ADD: {
    return {
      ...state,
      categories: state.categories.map(category => category.id === payload.id ? 
        { ...category, score: category.score + 1 } : category
      )
    }
  }
  case types.REMOVE: {
    return {
      ...state,
      categories: state.categories.map(category => category.id === payload.id ? 
        { ...category, lifes: category.lifes - 1 } : category
      )
    }
  }
  default:
    return state;
  }
}