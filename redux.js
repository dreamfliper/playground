class Redux {
  constructor(reducer, initStore) {
    this.store = initStore
    this.reducer = reducer
  }

  dispatch(action) {
    this.store = this.reducer(this.store, action)
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return state + 1
    case "SUBTRACTION":
      return state - 1
    default:
      return state
  }
}

const store = new Redux(reducer, 0)

store.dispatch({type: "ADD"})
store.dispatch({type: "ADD"})
store.dispatch({type: "ADD"})
store.dispatch({type: "SUBTRACTION"})

console.log(store.store)
