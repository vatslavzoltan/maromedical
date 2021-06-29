<template>
  <SinglePage>
    <div class="products">
      <container>
        <heading>Our Products</heading>
        <button class="back_button" onclick="window.history.back()">
          Back to List of products
        </button>
        <row custom="single_product_row js">
          <img
            :src="`${$apiUrl}/image/${product.image_url}`"
            alt="#"
            class="single_product_image"
          />
          <div class="product_descr">
            <p class="p1">{{ category }}</p>
            <p class="p3">{{ product.name }}</p>
            <p class="p2">{{ product.brand }}</p>
            <p class="p3" v-html="product.description"></p>
          </div>
        </row>
      </container>
    </div>
  </SinglePage>
</template>
<script>
import axios from "axios";

export default {
  name: "Product",
  data: () => {
    return {
      product: {},
      category: "",
    };
  },
  methods: {
    getProduct: function () {
      axios
        .get(this.$apiUrl + "/product/" + this.$route.params.id)
        .then((res) => {
          this.product = res.data || [];
          if (res.data.category_id) this.getCategory(res.data.category_id);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getCategory: function (id) {
      axios
        .get(this.$apiUrl + "/category/" + id)
        .then((res) => {
          this.category = res.data.category || [];
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  // created() {
  //   this.getProduct();
  // },
  watch: {
    "$route.params.id": {
      handler: function () {
        this.getProduct();
        this.getCategory();
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
