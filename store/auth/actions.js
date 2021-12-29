export default {
  enter_to_account({ commit }, { uName, uPassword }) {
    axios
      .post("", {
        name: uName,
        password: uPassword,
      })
      .then(({ data }) => {
        commit("STORE_USER", data);
      });
  },
};
