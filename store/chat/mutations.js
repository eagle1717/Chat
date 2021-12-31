export default {
  SET_DIALOGS(state, payload) {
    state.dialogs = payload;
  },
  SET_DIALOG(state, messages) {
    state.dialog.messages = messages;
  },
};
