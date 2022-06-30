const initialState = {
  characters: [],
  episode: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CHAR":
      return {
        ...state,
        characters: action.payload,
      };
    case "GET_EPI":
      return {
        ...state,
        episode: action.payload,
      };
    case "CREATE_CHAR":
    return {
      ...state,
     }
    default:
      return state;
  }
}
