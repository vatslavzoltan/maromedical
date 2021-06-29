<template>
  <div class="wrapper carousel">
    <splide :options="options">
      <splide-slide v-for="slide in list" :key="slide.id">
        <a class="carousel_link" :href="`/product/${slide.id}`">
          <img
            :src="`${$apiUrl}/image/${slide.image_url}`"
            alt="#"
            class="featured_product_image"
          />
        </a>
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
        arrows: false,
        breakpoints: {
          968: {
            perPage: 3,
          },
          568: {
            perPage: 1,
          },
        },
      },
    };
  },
};
</script>