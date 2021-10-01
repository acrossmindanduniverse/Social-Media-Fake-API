const initialState = {
  profile: [],
  users: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PROFILE': {
      return {
        ...state,
        profile: action.payload
      };
    }
    case 'GET_USERS': {
      return {
        ...state,
        users: action.payload
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default user;
