<template>
  <component :is="URL" @click="$emit('make-event')" />
</template>

<script>
export default {
  emits: ["make-event"],
  props: {
    logo: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      URL: null,
    };
  },
  methods: {
    loadURL() {
      this.URL = () => import(`@/assets/images/${this.logo}.svg`);
    },
  },
  watch: {
    logo() {
      this.loadURL();
    },
  },
  mounted() {
    this.loadURL();
  },
};
</script>
