const INITIAL_STATE = { memes: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "NEW_MEME":
      // return { ...state, count: state.count + 1 };
      return {...state, memes: [...state.memes, action.payload]}

    case "REMOVE_MEME":
      // return { ...state, count: state.count - 1 };
      return {...state, memes: state.memes.filter(m => m.imgSrc !== action.imgSrc)};

    default:
      return state;
  }
}

export default rootReducer;
