import { resolve } from 'core-js/fn/promise'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const loadRecrions =()=>{


}
export default new Vuex.Store({
  state: {
    name:'',
    tel:'',
    emal:'',
    agreeWithConditions:false,
  },
  mutations: {
  },
  actions:{
    async loadRecrions(){
        try{
            const reactions = await loadRecrions()
        } catch(error){
            console.error(error)
        }
    }
  }
})
