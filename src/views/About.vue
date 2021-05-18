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
          <Brands/>
          <div class="about_contact">
            <heading>find us in HALLANDALE BEACH, FLORIDA</heading>
            <br>
            <heading>1464 E HALLANDALE BEACH BLVD, HALLANDALE BEACH, FL 33009</heading>
          </div>
    </container>
  </div>
</template>
<script>
import Brands from "../components/Brands";

export default {
  name: "About",
  components: {
    Brands
  },
};
</script>

