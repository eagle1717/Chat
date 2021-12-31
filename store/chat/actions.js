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
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        status: 1,
        type: 1,
        created_at: "2021-09-15 23:17:06",
        user: {
          id: 1,
          firstname: "Роман",
          lastname: "Мишин",
          avatar: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
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
          avatar: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
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
          avatar: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
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
          avatar: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        files: [],
      },
    ]);
  },
};
