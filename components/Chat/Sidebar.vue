<template>
  <aside v-if="dialogs" class="chats w-1/5 h-screen overflow-y-auto">
    <section
      v-for="dialog in filteredDialogs"
      :key="dialog.params.id"
      class="chats__child cursor-pointer"
      @click="viewDialog(dialog.params.id)"
    >
      <h6 class="chats__child__title">{{ dialog.title }}</h6>
      <span class="chats__child__date">
        {{ $moment(dialog.updated_at).calendar() }}
      </span>
      <BaseImage :logo="dialog.status" />
      <p class="chats__child__lastmessage">
        {{ dialog.last_message }}
      </p>
    </section>
  </aside>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("chat", ["dialogs", "dialog"]),
    filteredDialogs() {
      return this.dialogs
        .filter((dialogs) => {
          return dialogs;
        })
        .sort(function (a, b) {
          return new Date(b.updated_at) - new Date(a.updated_at);
        });
    },
  },
  methods: {
    ...mapActions("chat", ["load_dialogs", "load_dialog"]),
    viewDialog(dialogID) {
      this.$router.push({ name: "chat-id", params: { id: dialogID } });
    },
  },
  created() {
    this.load_dialogs();
  },
};
</script>
