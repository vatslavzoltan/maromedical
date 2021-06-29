<template>
  <div :class="itemClass">
    <img class="single_bg_top" src="@/assets/h_b_r_bg.svg" />
    <img class="single_bg_bottom" src="@/assets/h_t_l_bg.svg" />
    <slot></slot>
  </div>
</template>
<script>
import { computed } from '@vue/composition-api'

export default {
  name: "SinglePage",
  props: {
    custom: String,
  },
  setup(props) {
    const itemClass = computed(() => `wrapper ${props.custom || ''}`)
    return {
        itemClass
    };
  }
};
</script>