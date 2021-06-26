<template>
  <div class="products">
    <container>
      <heading>Our Products</heading>
      <row custom="js products_nav">
        <router-link
          v-for="item in categories"
          :key="item.id"
          class="products_nav_item"
          :to="`/products/${item.id}`"
        >
          {{ item.category }}
        </router-link>
      </row>
      <div class="products_grid">
        <router-link
          v-for="item in products"
          :key="item.id"
          :to="`/product/${item.id}`"
          class="product_grid_item"
        >
          <img :src="`${$apiUrl}/image/${item.image_url}`" alt="#" class="product_grid_image" />
          <h3 class="product_grid_item_name">{{item.name}}</h3>
          <p class="product_grid_item_category">{{item.brand}}</p>
        </router-link>
      </div>
      <div
      v-if="!products.length"
      class="empty_state">
        <p>no items...</p>
      </div>
    </container>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Products",
  data: () => {
    return {
      categories: [],
      products: [],
    };
  },
  methods: {
    getCatList: function (th) {
      axios
        .get(th.$apiUrl + "/category")
        .then((res) => {
          th.categories = res.data || [];
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getProducts: function (th) {
      const url = th.$route.params.category_id
        ? "/products/category/" + th.$route.params.category_id
        : "/products";
      axios
        .get(th.$apiUrl + url)
        .then((res) => {
          th.products = res.data || [];
        })
        .catch((e) => {
          console.log(e);
          th.products = [];
        });
    },
  },
  created() {
    this.getCatList(this);
    this.getProducts(this);
  },
  watch: {
    "$route.params.category_id": {
      handler: function () {
        this.getProducts(this);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
