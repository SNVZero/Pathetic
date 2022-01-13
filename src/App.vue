<template>
<div id="app">
  <Header/>
  <Osn/>
  <Suport/>
  <Laptop/>
  <Trafic/>
  <Service/>
  <Team/>
  <Lastcases/>
  <Reviews/>
  <Partners/>
  <Faq/>
  <Webform/>
</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Reviews from '@/components/Reviews.vue'
import Faq from '@/components/Faq.vue'
import Webform from '@/components/Webform.vue'
import Partners from '@/components/Partners.vue'
import Lastcases from '@/components/Last-cases.vue'
import Service from '@/components/Service.vue'
import Team from '@/components/Team.vue'
import Trafic from '@/components/Trafic.vue'
import Laptop from '@/components/Laptop.vue'
import Suport from '@/components/Suport.vue'
import Osn from '@/components/Osn.vue'
import Header from '@/components/Header.vue'
import Vmodal from '@/components/Modal/v-modal.vue'
export default {
  name: 'App',
  components: {
    Header,
    Osn,
    Suport,
    Laptop,
    Trafic,
    Vmodal,
    Service,
    Team,
    Lastcases,
    Reviews,
    Faq,
    Webform,
    Partners
  },
 
    module: {
    rules: [
      {
       test: /\.svg$/,
       loader: 'vue-svg-loader', 
      },
    ],
  },
}
</script>

<style>

</style>
