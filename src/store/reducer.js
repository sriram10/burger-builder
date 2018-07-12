const initialState = {
  burger: [],
  ingredients: [
      { type: 'cheese', name: 'Cheese', price: 10 },
      { type: 'salad', name: 'Salad', price: 15 },
      { type: 'bacon', name: 'Bacon', price: 20 },
      { type: 'meat', name: 'Meat', price: 25 }
  ]
}

const red = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD2CART':
      return {
        ...state,
        burger: state.burger.concat(action.payload),
      };
    default:
      return state;
  }
} 

export default red