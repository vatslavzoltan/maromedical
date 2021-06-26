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
            <router-link class="hero_btn" to="/products"
              >GO TO SHOP</router-link
            >
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
      </Container>
      <Carousel v-if="featuredProducts.length" :list="featuredProducts" />
    </div>
    <Brands />
    <div class="home_contact">
      <Container>
        <Row custom="jb">
          <div class="adress">
            <p class="adress_1">keep in touch</p>
            <p class="adress_2">Сontact us if you have any questions</p>
            <Row custom="jb">
              <div class="adress_col">
                <p class="adress_3" v-if="contacts.person">Contact person:</p>
                <p class="adress_4" v-if="contacts.person">
                  {{ contacts.person }}
                </p>
                <p class="adress_3" v-if="contacts.phone">Phone Number:</p>
                <p
                  class="adress_4"
                  v-for="phone in contacts.phone"
                  :key="phone"
                >
                  <a :href="`tel:${phone}`">{{ phone }}</a>
                </p>
              </div>
              <div class="adress_col">
                <p class="adress_3">Email us:</p>
                <p class="adress_4">
                  <span
                    class="adress_4"
                    v-for="email in contacts.email"
                    :key="email"
                  >
                    <a :href="`mailto:${email}`">{{ email }}</a>
                    <br />
                  </span>
                </p>
                <p class="adress_3">Showroom for local customers:</p>
                <p
                  v-for="(item, index) in showrooms"
                  :key="index"
                  class="adress_4"
                >
                 {{ item.address }}
                </p>
              </div>
            </Row>
          </div>
          <div class="map">
            <GmapMap
              :center="center"
              :zoom="12"
              style="width: 100%; height: 400px"
            >
              <GmapMarker :position="center" />
            </GmapMap>
          </div>
        </Row>
      </Container>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Carousel from "../components/Carousel";
import Brands from "../components/Brands";
export default {
  name: "Home",
  components: {
    Carousel,
    Brands,
  },
  data: () => {
    return {
      featuredProducts: [],
      contacts: [],
      showrooms: [],
      center: { lat: 25.9843882, lng: -80.13344310000001 },
      currentPlace: null,
    };
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    getFeaturedProducts: (th) => {
      axios
        .get(th.$apiUrl + "/products")
        .then((res) => {
          th.featuredProducts = res.data || [];
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getContacts: (th) => {
      axios
        .get(th.$apiUrl + "/contact")
        .then((res) => {
          th.contacts = res.data || [];
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getShowroom: (th) => {
      axios
        .get(th.$apiUrl + "/contact/showroom")
        .then((res) => {
          th.showrooms = res.data || [];
          var addressObj = {
            address_line_1: res.data[0].address,
          };
          th.$geocoder.send(addressObj, (response) => {
            console.log(response);
            th.center = response.results[0].geometry.location;
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    this.getFeaturedProducts(this);
    this.getContacts(this);
    this.getShowroom(this);
  },
};
</script>
