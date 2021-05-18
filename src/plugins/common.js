import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import Container from '@/components/Container.vue'
import Row from '@/components/Row.vue'
import Heading from '@/components/Heading.vue'
import VueSplide from '@splidejs/vue-splide';

Vue.use( VueSplide );
Vue.use(VueCompositionAPI)
Vue.component('Row', Row)
Vue.component('Container', Container)
Vue.component('Heading', Heading)
Vue.prototype.$apiUrl = 'http://174.138.50.91';
