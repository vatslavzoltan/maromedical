<template>
  <div id="nav" class="nav">
    <Container>
      <Row custom="jc header_row">
        <router-link to="/" class="logo_link">
          <img class="logo" alt="Better life" src="@/assets/logo.png" />
        </router-link>
        <div class="desc_menu">
          <router-link class="nav_item" to="/">Home</router-link>
          <router-link class="nav_item" to="/services"
            >Our Services</router-link
          >
          <router-link class="nav_item" to="/products">Products</router-link>
          <router-link class="nav_item" to="/about">About</router-link>
          <router-link class="nav_item" to="/contact">Contact</router-link>
        </div>
        <img
          v-if="!isOpen"
          @click="openMenu"
          class="hamburger"
          alt="Better life"
          src="@/assets/menu.svg"
        />
        <img
          v-else
          @click="hideMenu"
          class="hamburger"
          alt="Better life"
          src="@/assets/close.svg"
        />
        <div :class="menuClass">
          <router-link class="mobile_nav_item" to="/">Home</router-link>
          <router-link class="mobile_nav_item" to="/services"
            >Our Services</router-link
          >
          <router-link class="mobile_nav_item" to="/products"
            >Products</router-link
          >
          <router-link class="mobile_nav_item" to="/about">About</router-link>
          <router-link class="mobile_nav_item" to="/contact"
            >Contact</router-link
          >
          <router-link class="hero_btn" to="/products">GO TO SHOP</router-link>
        </div>
      </Row>
    </Container>
  </div>
</template>
<script>
export default {
  name: "Header",
  data: () => {
    return {
      isOpen: false,
    };
  },
  methods: {
    openMenu: function () {
      this.isOpen = true;
    },
    hideMenu: function () {
      this.isOpen = false;
    },
  },
  computed: {
    menuClass: function () {
      return this.isOpen ? "mobile_menu active" : "mobile_menu";
    },
  },
  watch: {
    $route() {
      this.isOpen = false;
    },
  },
};
</script>