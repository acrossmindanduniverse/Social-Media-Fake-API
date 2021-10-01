const initialState = {
  post: [],
  userPost: [],
  comment: [],
};

const post = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_DATA': {
      return {
        ...state,
      };
    }
    case 'UPDATE_USER_POST': {
      return {
        ...state,
      };
    }
    case 'DELET_POST': {
      return {
        ...state,
      };
    }
    case 'POST_COMMENT': {
      return {
        ...state,
      };
    }
    case 'GET_POST': {
      return {
        ...state,
        post: action.payload,
      };
    }
    case 'GET_COMMENT': {
      return {
        ...state,
        comment: action.payload
      };
    }
    case 'GET_USER_POST': {
      return {
        ...state,
        userPost: action.payload
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default post;
