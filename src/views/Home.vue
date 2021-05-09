<template>
  <div class="home">
    <div class="hero">
      <Container>
        <Row custom='jb'>
          <div class="hero_text">
            <h1 class="hero_1">
              BETTER LIFE
            </h1>
            <p class="hero_2">
              Medical & Surgical Supply
            </p>
            <p class="hero_3">
              MEDICAL & SURGICAL SUPPLY HAS BEEN SERVING MEDICAL SUPPLY NEEDS OF RESIDENTS AND HEALTH CARE PROVIDERS IN ALL NEW YORK STATE AREA. 
            </p>
            <router-link class="hero_btn" to="/">GO TO SHOP</router-link>
          </div>
          <div class="hero_img">
              <img alt="Better life" src="@/assets/hero_img.png">
          </div>
        </Row>
      </Container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
