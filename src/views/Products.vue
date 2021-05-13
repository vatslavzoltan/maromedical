<template>
  <div class="products">
    <container>
      <heading>Our Products</heading>
      <row custom='js products_nav'>
        <router-link class="products_nav_item" to="/products/1">Incontinence</router-link>
        <router-link class="products_nav_item" to="/products/2">Bathroom</router-link>
        <router-link class="products_nav_item" to="/products/3">Mobility</router-link>
        <router-link class="products_nav_item" to="/products/4">Diabetic</router-link>
        <router-link class="products_nav_item" to="/products/5">Supports</router-link>
      </row>
      <div class="products_grid">
        <router-link class="product_grid_item" to="/">
          <img src="@/assets/product.jpg" alt="#" class="product_grid_image">
          <h3 class="product_grid_item_name">SHOWER CHAIR</h3>
          <p class="product_grid_item_category">Bathroom Supplies</p>
        </router-link>
        <router-link class="product_grid_item" to="/">
          <img src="@/assets/product.jpg" alt="#" class="product_grid_image">
          <h3 class="product_grid_item_name">SHOWER STOOL</h3>
          <p class="product_grid_item_category">Bathroom Supplies</p>
        </router-link>
        <router-link class="product_grid_item" to="/">
          <img src="@/assets/product.jpg" alt="#" class="product_grid_image">
          <h3 class="product_grid_item_name">RAISED TOILET SEAT</h3>
          <p class="product_grid_item_category">Bathroom Supplies</p>
        </router-link>
        <router-link class="product_grid_item" to="/">
          <img src="@/assets/product.jpg" alt="#" class="product_grid_image">
          <h3 class="product_grid_item_name">TRANSFER BENCH</h3>
          <p class="product_grid_item_category">Bathroom Supplies</p>
        </router-link>
      </div>
    </container>
  </div>
</template>
