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
      URL.value = () => import(`@/assets/images/${this.src}.svg`);
    },
  },
  watch: {
    src() {
      this.loadURL();
    },
  },
  mounted() {
    this.loadURL();
  },
};
</script>
