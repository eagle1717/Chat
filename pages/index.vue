<template>
  <form @submit.prevent="enterToAccount">
    Sign up/Log in.
    <input type="text" placeholder="Your name:" v-model="uName" />
    <input type="password" placeholder="Your password:" v-model="uPassword" />
    <button>Next</button>
  </form>
</template>

<script>
export default {
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
