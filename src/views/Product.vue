<template>
  <div class="products">
    <container>
      <heading>Our Products</heading>
      <button class="back_button" onclick="window.history.back()">Back to List of products</button>
      <row custom="single_product_row js">
        <img
          :src="`${$apiUrl}/image/${product.image_url}`"
          alt="#"
          class="single_product_image"
        />
        <div class="product_descr">
          <p class="p1">{{product.brand}}</p>
          <p class="p2">{{product.name}}</p>
          <p class="p3">{{product.description}}</p>
        </div>
      </row>
    </container>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Product",
  data: () => {
    return {
      product: {},
    };
  },
  methods: {
    getProduct: function (th) {
      axios
        .get(th.$apiUrl + "/product/" + th.$route.params.id)
        .then((res) => {
          th.product = res.data || [];
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    this.getProduct(this);
  },
  watch: {
    "$route.params.id": {
      handler: function () {
        this.getProduct(this);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
