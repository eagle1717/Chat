export default {
  STORE_USER(state, user) {
    state.token = user.token;
    state.uName = user.name;
  },
};
