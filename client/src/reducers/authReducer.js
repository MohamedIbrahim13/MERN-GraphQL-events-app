const initState = { authError: null };

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, authError: null };
    case "LOGIN_ERROR":
      return { ...state, authError: "Login Failed" };
    case "LOGOUT_SUCCESS":
      return state;
    case "SIGNUP_SUCCESS":
      return { ...state, authError: null };
    case "SIGNUP_ERROR":
      return { ...state, authError: action.err.message };
    default:
      return state;
  }
};

export default authReducer;
