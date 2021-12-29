export default {
  SET_DIALOGS(state, payload) {
    state.dialogs = payload;
  },
  SET_DIALOG(state, messages) {
    state.dialog.messages = messages;
  },
  //
  setUser(state, user) {
    state.user = user;
  },
  SOCKET_newMessage(state, msg) {
    state.messages = [...state.messages, msg];
  },
  SOCKET_updateUsers(state, users) {
    state.users = users;
  },
  clearData(state) {
    state.user = {};
    state.messages = [];
    state.users = [];
  },
  setTypingStatus(state, status) {
    state.user.typingStatus = status;
  },
  CLEAR_DATA(state) {
    state.dialogs = {
      isLoadMore: false,
      nextLink: null,
      dialogs_content: {},
    };
    (state.noCurrentDialog = true),
      (state.dialog = {
        currentDialogId: null,
        top_sides: [],
        dialog_content: [],
        dialog_relation_objects: [],
        isLoadMore: false,
        nextLink: null,
      });
  },
};
