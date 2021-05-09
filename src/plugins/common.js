import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import Container from '@/components/Container.vue'
import Row from '@/components/Row.vue'

Vue.use(VueCompositionAPI)
Vue.component('Row', Row)
Vue.component('Container', Container)
