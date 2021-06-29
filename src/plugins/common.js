import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import Container from '@/components/Container.vue'
import Row from '@/components/Row.vue'
import Heading from '@/components/Heading.vue'
import Header from '@/components/Header.vue'
import SinglePage from '@/components/SinglePage.vue'
import VueSplide from '@splidejs/vue-splide';
import * as VueGoogleMaps from 'vue2-google-maps'
import Geocoder from "@pderas/vue2-geocoder";

Vue.use(VueSplide);
Vue.use(VueCompositionAPI)
Vue.component('Row', Row)
Vue.component('Container', Container)
Vue.component('Heading', Heading)
Vue.component('Header', Header)
Vue.component('SinglePage', SinglePage)
Vue.prototype.$apiUrl = 'http://174.138.50.91';
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCPG2JyerWOknzh0uvwOHPkCo6ni3Yb83s',
        libraries: 'places',
        language: 'en',
    }
});
Vue.use(Geocoder, {
    defaultCountryCode: null, // e.g. 'CA'
    defaultLanguage: null, // e.g. 'en'
    defaultMode: 'address', // or 'lat-lng'
    googleMapsApiKey: 'AIzaSyCPG2JyerWOknzh0uvwOHPkCo6ni3Yb83s'
});
