import { createStore } from 'vuex'

export default createStore({
state: {
    usertname: 'null',
    lastName: 'Doe',
  },
mutations: {
  addusername(state, user) {
    state.username = user
  }
},
actions: {

    
},
getters: {

}
})