<template>
  <div class="contact">
    <container>
      <heading>Contact</heading>
      <div class="contact_row row jb">
        <div class="contact_text_info row jb">
          <div class="adress_col">
            <p class="adress_3" v-if="contacts.person">Contact person:</p>
            <p class="adress_4" v-if="contacts.person">
              {{ contacts.person }}
            </p>
            <p class="adress_3" v-if="contacts.phone">Phone Number:</p>
            <p class="adress_4" v-for="phone in contacts.phone" :key="phone">
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
          </div>
        </div>
        <div class="showrooms_col">
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
  name: "Contact",
  components: {
    Brands,
  },
  data: () => {
    return {
      showrooms: [],
      contacts: [],
      center: { lat: 25.9843882, lng: -80.13344310000001 },
    };
  },
  methods: {
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
    this.getContacts(this);
  },
};
</script>

