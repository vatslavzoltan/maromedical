<template>
  <div class="home">
    <div class="hero">
      <Container>
        <Row custom="jb">
          <div class="hero_text">
            <h1 class="hero_1">BETTER LIFE</h1>
            <p class="hero_2">Medical & Surgical Supply</p>
            <p class="hero_3">
              MEDICAL & SURGICAL SUPPLY HAS BEEN SERVING MEDICAL SUPPLY NEEDS OF
              RESIDENTS AND HEALTH CARE PROVIDERS IN ALL NEW YORK STATE AREA.
            </p>
            <router-link class="hero_btn" to="/products">GO TO SHOP</router-link>
          </div>
          <div class="hero_img">
            <img alt="Better life" src="@/assets/hero_img.png" />
          </div>
        </Row>
        <div class="why_section">
          <Heading> WHY BETTER LIFE SUPPLY? </Heading>
          <Row custom="jc">
            <div class="why_item">
              <img src="@/assets/w1.svg" alt="#" />
              <p class="why_name">Service</p>
              <p class="why_descr">6 days customer service.</p>
            </div>
            <div class="why_item">
              <img src="@/assets/w2.svg" alt="#" />
              <p class="why_name">Delivery</p>
              <p class="why_descr">
                7 days delivery.<br />Same day & next day delivery.
              </p>
            </div>
            <div class="why_item">
              <img src="@/assets/w3.svg" alt="#" />
              <p class="why_name">Store</p>
              <p class="why_descr">
                Multiple showrooms<br />for our customers.
              </p>
            </div>
            <div class="why_item">
              <img src="@/assets/w4.svg" alt="#" />
              <p class="why_name">Brands</p>
              <p class="why_descr">
                Premium absorbency brands and supplies<br />with regular HCPCS
                codes.
              </p>
            </div>
            <div class="why_item">
              <img src="@/assets/w5.svg" alt="#" />
              <p class="why_name">Location</p>
              <p class="why_descr">
                Shipping all over the New<br />
                York state.
              </p>
            </div>
          </Row>
        </div>
      </Container>
    </div>
    <div class="featured">
      <Container>
        <Heading>Featured latest Products</Heading>
        <Carousel />
      </Container>
    </div>
    <div class="brands">
      <Container>
        <Heading>BRANDS WE PROVIDE</Heading>
        <Row custom="jc brands_row">
          <img src="@/assets/b1.png" class="brand_image" alt="#" />
          <img src="@/assets/b2.png" class="brand_image" alt="#" />
          <img src="@/assets/b3.png" class="brand_image" alt="#" />
          <img src="@/assets/b4.png" class="brand_image" alt="#" />
          <img src="@/assets/b5.png" class="brand_image" alt="#" />
          <img src="@/assets/b6.png" class="brand_image" alt="#" />
          <img src="@/assets/b7.png" class="brand_image" alt="#" />
          <img src="@/assets/b8.png" class="brand_image" alt="#" />
          <img src="@/assets/b9.png" class="brand_image" alt="#" />
          <img src="@/assets/b10.png" class="brand_image" alt="#" />
          <img src="@/assets/b11.png" class="brand_image" alt="#" />
        </Row>
      </Container>
    </div>
    <div class="home_contact">
      <Container>
        <Row custom="jb">
          <div class="adress">
            <p class="adress_1">keep in touch</p>
            <p class="adress_2">Сontact us if you have any questions</p>
            <Row custom="jb">
              <div class="adress_col">
                <p class="adress_3">Contact person:</p>
                <p class="adress_4">Sardor Muminov<br />(Sam)</p>
                <p class="adress_3">Phone Number:</p>
                <p class="adress_4">
                  <a href="tel:(929) 509-0690">(929) 509-0690</a>
                </p>
              </div>
              <div class="adress_col">
                <p class="adress_3">Email us:</p>
                <p class="adress_4">
                  <a href="mailto:info@maromedical.net">info@maromedical.net</a>
                  <br>
                  <a href="mailto:orders@maromedical.net"
                    >orders@maromedical.net</a
                  >
                </p>
                <p class="adress_3">Showroom for local customers:</p>
                <p class="adress_4">Hallandale Beach, FL</p>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
export default {
  name: "Home",
  components: {
    Carousel,
  },
};
</script>
