<template>
  <div id="app">
    <Header />
    <router-view />
    <footer class="footer">
      <container>
        <p>
          Copyright © 2020 « Maro».
          <br />
          All rights reserved. Privacy Policy
        </p>
      </container>
    </footer>
  </div>
</template>

<style lang="scss">
@import "./assets/sass/main.sass";
@import "./assets/splide-default.min.css";
</style>
