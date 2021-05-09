<template>
  <div :class="itemClass">
    <slot></slot>
  </div>
</template>
<script>
import { computed } from '@vue/composition-api'

export default {
  name: "Row",
  props: {
    custom: String,
  },
  setup(props) {
    const itemClass = computed(() => `row ${props.custom || ''}`)
    return {
        itemClass
    };
  }
};
</script>