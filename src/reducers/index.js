const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
        },
      };
    }
    default:
      return state;
  }
}
// The below line sets the state as an array of items, allowing us to map through for the react component, when state is an object
export const getStoreItemArray = (state) => Object.values(state);
