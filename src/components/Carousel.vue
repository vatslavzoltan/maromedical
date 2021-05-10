<template>
  <div class="wrapper">
    <splide :options="options" @splide:moved="moved">
      <splide-slide v-for="slide in slides" :key="slide.src">
        <p>{{ slide.src }}</p>
      </splide-slide>
    </splide>
  </div>
</template>

<script>

export default {
  data() {
    return {
      options: {
        rewind: true,
        gap: "1rem",
      },
      slides: [
        { src: "image01.jpg" },
        { src: "image02.jpg" },
        { src: "image03.jpg" },
      ],
    };
  },

  methods: {
    moved(splide, newIndex) {
      console.log("moved", newIndex);
    },
  },
};
</script>