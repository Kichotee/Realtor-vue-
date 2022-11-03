import Vue from 'vue'
import {createStore} from 'vuex'

// Import axios to make HTTP requests
import axios from "axios"

export default createStore({
    state: {
        users: []
    },
    getters: {
      getUsers: (state) => state.users
    },
    actions: {
      async fetchUsers({ commit }) {
          
            const data = await axios.get(' http://localhost:3000/props')
            .then(response=> response.data)
            .then(users =>{
              
              commit('SET_USERS', users)
            })
             
            
           
        }
    },
    mutations: {
        SET_USERS(state, users) {
          state.users = users
      }
    }
})




