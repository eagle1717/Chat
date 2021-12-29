<template>
  <main v-if="filteredDialog" class="w-4/5 h-screen overflow-y-auto">
    <section>
      <div v-for="(message, key) in filteredDialog" :key="message.id">
        <span v-if="dateCondition(key)">
          {{ $moment(message.created_at).format("dddd") }}
        </span>
        <p v-if="message.text">
          {{ message.text }}
        </p>
        <div v-if="message.files">
          <!-- <BaseSlider :items="message.files" /> -->
        </div>
        <span>
          {{ $moment(message.created_at).format("LT") }}
        </span>
        <BaseImage logo="status" />
        <figure v-if="message.type == 1">
          <img :src="message.user.avatar" />
        </figure>
      </div>
    </section>
    <section>
      <div>
        <textarea placeholder="Введите сообщение..." />
        <BaseImage logo="send" />
      </div>
      <input type="file" id="attach" />
      <label for="attach">
        <BaseImage logo="clip" />
      </label>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("chat", ["dialog"]),
    filteredDialog() {
      return this.dialog.messages
        .filter((message) => {
          return message;
        })
        .sort(function (a, b) {
          return new Date(a.created_at) - new Date(b.created_at);
        });
    },
  },
  methods: {
    ...mapActions("chat", ["load_dialog"]),
    scrollTo() {
      let chat = this.$refs.distance;
      if (chat) {
        chat.scrollTop = chat.scrollHeight;
      }
    },
    dateCondition(key) {
      return (
        this.$moment(this.filteredDialog[key].created_at).format("dddd") !=
        (this.filteredDialog[key - 1]
          ? this.$moment(this.filteredDialog[key - 1].created_at).format("dddd")
          : null)
      );
    },
  },
  created() {
    this.load_dialog();
  },
};
</script>
