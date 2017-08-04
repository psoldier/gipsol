// The types of actions that you can dispatch to modify the state of the store
export const types = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  ADD_CATEGORIES: 'ADD_CATEGORIES'
}

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  add: (item) => {
    return {type: types.ADD, payload: item}
  },
  remove: (item) => {
    return {type: types.REMOVE, payload: item}
  },
  addCategories: (categories) =>{
    return {type: types.ADD_CATEGORIES, payload: categories}
  }
}

// Initial state of the store
const initialState = {categories: []}

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
            category.lifes = 2;
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
  case types.ADD_CATEGORIES: {
    return {
      ...state,
      categories: payload
    }
  }
  default:
    return state;
  }
}