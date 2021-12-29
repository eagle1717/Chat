<template>
  <main v-if="filteredDialog" class="chat w-full overflow-y-auto">
    <section class="chat__header flex justify-between items-center">
      <div class="chat__header__companion">
        <span class="chat__header__companion__name text-secondary">{{
          companion.name
        }}</span>
        <small class="chat__header__companion__action text-tertiary">{{
          companion.action
        }}</small>
      </div>
      <div class="chat__header__actions">
        <BaseImage logo="search" class="chat__header__actions__search" />
        <BaseImage logo="more" class="chat__header__actions__more" />
      </div>
    </section>
    <section class="chat__content">
      <!-- h-screen  -->
      <div class="overflow-y-auto">
        <div v-for="(message, key) in filteredDialog" :key="message.id">
          <span
            v-if="dateCondition(key)"
            class="chat__content__date text-tertiary block text-center"
          >
            {{ $moment(message.created_at).format("dddd") }}
          </span>
          <div
            class="chat__content__msg flex"
            :class="{
              'justify-start': message.type == 0,
              'justify-end': message.type == 1,
            }"
          >
            <div class="w-max">
              <div
                v-if="message.type == 1"
                class="chat__content__msg__container bg-quaternary"
              >
                <p
                  v-if="message.text"
                  class="chat__content__msg__container__text text-secondary"
                >
                  {{ message.text }}
                </p>
                <figure>
                  <img
                    :src="message.user.avatar"
                    alt="opponent-avatar"
                    class="chat__content__msg__container__avatar"
                  />
                </figure>
              </div>
              <div v-else class="chat__content__msg__container bg-senary">
                <p
                  v-if="message.text"
                  class="chat__content__msg__container__text text-secondary"
                >
                  {{ message.text }}
                </p>
              </div>
              <span class="chat__content__msg__sendedtime text-tertiary">
                {{ $moment(message.created_at).format("LT") }}
              </span>
              <BaseImage logo="status" class="chat__content__msg__status" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="chat__footer flex justify-between">
      <div class="relative w-full">
        <div
          ref="message"
          contenteditable
          data-text="Введите сообщение..."
          class="chat__footer__field break-all bg-senary text-secondary"
        ></div>
        <button
          class="chat__footer__field__send absolute right-0 top-0 bottom-0"
          @click="sendMessage"
        >
          <BaseImage logo="send" />
        </button>
      </div>
      <input type="file" id="attach" class="hidden" />
      <label for="attach" class="chat__footer__field__attach bg-senary">
        <BaseImage logo="attach" />
      </label>
    </section>
  </main>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("chat", ["dialog"]),
    ...mapGetters("chat", ["companion"]),
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
    sendMessage() {
      this.$refs.message.textContent = "";
    },
  },
  created() {
    this.load_dialog();
  },
};
</script>

<style lang="scss" scoped>
[contentEditable="true"] {
  &:empty {
    &:before {
      content: attr(data-text);
      color: $tertiary;
      cursor: text;
    }
  }
}
.chat {
  &__header {
    max-height: 85px;
    height: 100%;
  }
  &__container {
    max-height: 100vh;
    height: 100%;
  }
  &__footer {
    min-height: 74px;
    height: max-content;
    textarea {
      resize: none;
    }
  }
}
</style>
