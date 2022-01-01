<template>
  <form @submit.prevent="enterToAccount" class="m-auto h-max">
    <h1 class="form__title text-center">Sign up/Log in.</h1>
    <input
      type="text"
      placeholder="Your name:"
      v-model="username"
      class="form__input block"
    />
    <input
      type="password"
      placeholder="Your password:"
      v-model="password"
      class="form__input block"
    />
    <button class="form__button bg-quaternary w-full">Next</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  layout: "chat",
  data() {
    return {
      username: "",
      password: null,
    };
  },
  methods: {
    ...mapMutations("auth", ["enter_to_account"]),
    enterToAccount() {
      this.enter_to_account({
        username: this.username,
        password: this.password,
      });
      this.$router.push({ name: "chat" });
    },
  },
};
</script>
