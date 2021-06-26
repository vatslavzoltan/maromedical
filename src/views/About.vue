<template>
  <div class="about">
    <div class="about_hero">
      <img src="@/assets/about_hero.jpg" alt="#" class="about_hero_image" />
      <div class="about_hero_descr">
        <img class="logo" alt="Better life" src="@/assets/logo.png" />
        <h3 class="about_hero_header">Medical & Surgical supplies</h3>
        <p class="about_hero_text">
          MARO MEDICAL & SURGICAL SUPPLY HAS BEEN SERVING MEDICAL SUPPLY NEEDS
          OF RESIDENTS AND HEALTH CARE PROVIDERS IN ALL NEW YORK STATE AREA. WE
          ARE A FULL-SERVICE PROVIDER OF HOME MEDICAL EQUIPMENT, INCONTINENCE
          AND URINARY CARE ITEMS, ORTHOPEDIC, DIABETIC SUPPLIES AND OSTOMY
          SUPPLIES, ORTHOTICS & PROSTHETICS, BED AND DOOR ALARMS WITH
          INSTALLATION, BATHROOM SAFETY EQUIPMENT, GRAB BARS AND HANDHELD SHOWER
          WITH INSTALLATION, ENTERAL NUTRITIONALS, SHOES, SOCKS AND ETC. WE
          PROVIDE PREMIUM QUALITY, BEST IN CLASS RESTORATIVE ITEMS AND
          INCONTINENCE SUPPLIES.
        </p>
        <router-link class="hero_btn" to="/services">Our Services</router-link>
      </div>
    </div>
    <container>
      <Brands />
      <div class="about_contact">
        <heading>find us</heading>
        <br />
        <div class="row jc">
          <div
            v-for="(item, index) in showrooms"
            :key="index"
            class="showroom_item"
          >
            <p class="about_showroom_heading">Showroom №{{ index + 1 }}</p>
            <p class="about_showroom_text">{{ item.address }}</p>
          </div>
        </div>
      </div>
    </container>
    <div class="about_map">
      <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
        <GmapMarker :position="center" />
      </GmapMap>
    </div>
  </div>
</template>
<script>
import axios from "axios";

import Brands from "../components/Brands";

export default {
  name: "About",
  components: {
    Brands,
  },
  data: () => {
    return {
      showrooms: [],
      center: { lat: 25.9843882, lng: -80.13344310000001 },
    };
  },
  methods: {
    getShowroom: (th) => {
      axios
        .get(th.$apiUrl + "/contact/showroom")
        .then((res) => {
          th.showrooms = res.data || [];
          var addressObj = {
            address_line_1: res.data[0].address,
          };
          th.$geocoder.send(addressObj, (response) => {
            th.center = response.results[0].geometry.location;
          });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  created() {
    this.getShowroom(this);
  },
};
</script>

