import Vue from "vue"
import vuex from "vuex"
import state from "./state"
import mutations from "./mutations"

Vue.use(vuex)

const store = new vuex.Store({
    state,
    mutations
})
export default store
// import Vue from "vue"
// import Vuex from "vuex"
// import state from "./state"
// import mutations from "./mutations"
// import getters from "./getters"
// import actions from "./actions"

// Vue.use(Vuex)

// const store = new Vuex.Store({
//     state,
//     getters,
//     actions,
//     mutations
// })

// export default store
