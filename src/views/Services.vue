<template>
  <SinglePage>
    <div class="services">
      <container>
        <heading>Our Services</heading>
        <p class="services_heading_text">
          Our company provides guaranteed 100 % customer satisfaction with best
          in class quality dme supplies and we are contracted with top
          production Manufacturers: Covidien, dr.Comfort, Presto, First Quality
          and Some More …
        </p>
        <row custom="jb">
          <div v-for="item in list" :key="item.id" class="service_item">
            <p class="service_count">{{ item.title }}</p>
            <p class="service_descr">
              {{ item.description }}
            </p>
          </div>
        </row>
      </container>
    </div>
  </SinglePage>
</template>
<script>
import axios from "axios";

export default {
  name: "Services",
  data: () => {
    return {
      list: [],
    };
  },
  created() {
    axios
      .get(this.$apiUrl + "/services")
      .then((res) => {
        this.list = res.data || [];
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>