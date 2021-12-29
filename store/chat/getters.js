export default {
  companion(state) {
    return state.dialog.companion;
  },
  typingUsers: ({ users, user }) =>
    users.filter(({ typingStatus, id }) => typingStatus && user.id !== id),
  typingStatus: ({ user }) => user.typingStatus,
};
