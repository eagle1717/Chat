<template>
  <div class="base-slider">
    <CoolLightBox
      :items="imagesArray"
      :index="index"
      @close="index = null"
      closeOnClickOutsideMobile
    />
    <div
      class="images-wrapper"
      :class="{
        loading: !isVisibleImage,
        'grid-cols-2': imagesArray.length > 1,
        'grid-cols-1': imagesArray.length == 1,
      }"
    >
      <div
        class="relative img-slider"
        v-for="(image, imageIndex) in previewArray.slice(0, limit)"
        :class="{ 'rounded-none': previewArray.length == 1 }"
        :key="imageIndex"
        @click="showSlider(imageIndex)"
      >
        <img
          v-show="isVisibleImage"
          :src="image"
          class="image bg-no-repeat"
          @load="isVisibleImage = true"
        />
        <div
          v-if="
            limit &&
              imageIndex == 3 &&
              previewArray.length - 1 > 3 &&
              isVisibleImage
          "
          class="files-rest absolute m-auto left-0 right-0 top-0 bottom-0 cursor-pointer table"
        >
          <span class="table-cell text-center align-middle"
            >{{ previewArray.length - 4 }}&#43;</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
export default {
  data() {
    return {
      index: null,
      previewArray: [],
      imagesArray: [],
      isVisibleImage: false,
    };
  },
  components: {
    CoolLightBox,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    limit: {
      type: [String, Number],
      required: false,
    },
  },
  methods: {
    showSlider(imageIndex) {
      // if (imageIndex == 3) {
      //   this.index = 0;
      // }
      // else {
      this.index = imageIndex;
      // }
    },
  },
  mounted() {
    this.items.filter((itm) => {
      return this.previewArray.push(itm.preview);
    });
    this.items.filter((itm) => {
      if (itm.image) {
        return this.imagesArray.push(itm.image);
      } else if (itm.file) {
        return this.imagesArray.push(itm.file);
      }
    });
  },
};
</script>
<style lang="scss">
.base-slider {
  width: fit-content;
}
.rounded-none {
  border-radius: 0px !important;
}
</style>
