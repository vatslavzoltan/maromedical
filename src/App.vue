<template>
  <div id="app">
    <div id="nav" class="nav">
      <Container>
        <Row custom='js'>
          <router-link to="/">
              <img class="logo" alt="Better life" src="@/assets/logo.png">
          </router-link>
          <div>
            <router-link class="nav_item" to="/">Home</router-link>
            <router-link class="nav_item" to="/services">Our Services</router-link>
            <router-link class="nav_item" to="/about">About</router-link>
          </div>
        </Row>
      </Container>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './assets/sass/main.sass';
@import './assets/splide-default.min.css';
</style>
