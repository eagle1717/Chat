export default {
  async load_dialogs({ commit }) {
    // this.$axios.$get("dialogs").then(({ data }) => {
    //   commit("SET_DIALOGS", data);
    // });
    commit("SET_DIALOGS", [
      {
        title: "Пропуск на Иванов М. В.",
        status: 1,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-12-29 01:45:06",
        params: {
          id: 3,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 0,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-09-15 23:17:06",
        params: {
          id: 4,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 0,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-09-15 23:30:06",
        params: {
          id: 5,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 1,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-12-29 01:45:06",
        params: {
          id: 3,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 0,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-09-15 23:17:06",
        params: {
          id: 4,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 0,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-09-15 23:30:06",
        params: {
          id: 5,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 1,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-12-29 01:45:06",
        params: {
          id: 3,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 0,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-09-15 23:17:06",
        params: {
          id: 4,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 0,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-09-15 23:30:06",
        params: {
          id: 5,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 1,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-12-29 01:45:06",
        params: {
          id: 3,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 0,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-09-15 23:17:06",
        params: {
          id: 4,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 0,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-09-15 23:30:06",
        params: {
          id: 5,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 1,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-12-29 01:45:06",
        params: {
          id: 3,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 0,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-09-15 23:17:06",
        params: {
          id: 4,
        },
      },
      {
        title: "Пропуск на Иванов М. В.",
        status: 0,
        last_message:
          "Выдача пропуска для въезда (прохода) лиц и транспортных средств....",
        updated_at: "2021-09-15 23:30:06",
        params: {
          id: 5,
        },
      },
    ]);
  },
  async load_dialog({ commit }, id) {
    // this.$axios.$get(`dialog_messages`, id).then(({ data }) => {
    //   commit("SET_DIALOG", data);
    // });
    commit("SET_DIALOG", [
      {
        id: 1,
        text: "Отправьте фото",
        status: 1,
        type: 1,
        created_at: "2021-09-15 23:17:06",
        user: {
          id: 1,
          firstname: "Роман",
          lastname: "Мишин",
          avatar: ""
        },
        files: [],
      },
      {
        id: 2,
        text: "Салам",
        status: 1,
        type: 0,
        created_at: "2021-09-15 23:30:06",
        user: {
          id: 4,
          firstname: "Иван",
          lastname: "Иванов",
          avatar: ""
        },
      },
      {
        id: 2,
        text: "Салам",
        status: 1,
        type: 0,
        created_at: "2021-09-15 23:30:06",
        user: {
          id: 4,
          firstname: "Иван",
          lastname: "Иванов",
          avatar: ""
        },
      },
      {
        id: 3,
        text: "Спасибо",
        status: 0,
        type: 1,
        created_at: "2021-09-16 01:45:06",
        user: {
          id: 1,
          firstname: "Роман",
          lastname: "Мишин",
          avatar: ""
        },
        files: [],
      },
    ]);
  },
  //
  socketEmit(_, { action, payload }) {
    return this._vm.$socket.emit(action, payload);
  },
  createMessage({ dispatch, state }, msg) {
    const { user } = state;
    const payload = {
      msg,
      id: user.id,
    };

    dispatch("socketEmit", {
      action: "createMessage",
      payload,
    });
  },
  joinRoom({ dispatch, state }) {
    const { user } = state;

    dispatch("socketEmit", {
      action: "joinRoom",
      payload: user,
    });
  },
  leftRoom({ commit, dispatch }) {
    dispatch("socketEmit", {
      action: "leftChat",
      payload: null,
    });

    commit("clearData");
  },
  setTypingStatus({ dispatch, commit, state }, typingStatus) {
    commit("setTypingStatus", typingStatus);
    const { user } = state;
    dispatch("socketEmit", {
      action: "setTypingStatus",
      payload: user,
    });
  },
  async createUser({ commit, dispatch }, user) {
    const { id } = await dispatch("socketEmit", {
      action: "createUser",
      payload: user,
    });

    commit("setUser", { id, ...user });
  },
  SOCKET_reconnect({ state, dispatch }) {
    const { user } = state;
    if (Object.values(user).length) {
      const { id, ...userInfo } = user;
      dispatch("createUser", userInfo);
      dispatch("joinRoom");
    }
  },
};
