<template>
  <form @submit.prevent="enterToAccount" class="form">
    <h1 class="form__title">Sign up/Log in.</h1>
    <input
      type="text"
      placeholder="Your name:"
      v-model="uName"
      class="form__input"
    />
    <input
      type="password"
      placeholder="Your password:"
      v-model="uPassword"
      class="form__input"
    />
    <button class="form__button">Next</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  layout: "chat",
  data() {
    return {
      uName: "",
      uPassword: null,
    };
  },
  methods: {
    ...mapMutations("auth", ["enter_to_account"]),
    async enterToAccount() {
      await this.enter_to_account({
        uName: this.uName,
        uPassword: this.uPassword,
      });
      this.$router.push("chat");
    },
  },
};
</script>
