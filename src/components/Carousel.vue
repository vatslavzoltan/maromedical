<template>
  <div class="wrapper carousel">
    <splide :options="options">
      <splide-slide v-for="slide in list" :key="slide.id">
        <img
          :src="`${$apiUrl}/image/${slide.image_url}`"
          alt="#"
          class="featured_product_image"
        />
      </splide-slide>
    </splide>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      options: {
        rewind: true,
        perPage: 5,
        arrows: false
      }
    };
  }
};
</script>