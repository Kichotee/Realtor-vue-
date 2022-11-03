import Vue from 'vue'
import {createStore} from 'vuex'

// Import axios to make HTTP requests
import axios from "axios"

export default createStore({
    state: {
        property: []
    },
    getters: {
      getUsers: (state) => state.property
    },
    actions: {
      async fetchProperty({ commit }) {
          
            const data = await axios.get(' http://localhost:3000/props')
            .then(response=> response.data)
            .then(property =>{
              
              commit('SET_property', property)
            })
             
            
           
        }
    },
    mutations: {
        SET_property(state, property) {
          state.property = property
      }
    }
})




