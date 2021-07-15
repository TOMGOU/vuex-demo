import { createStore } from 'vuex'
import count from './modules/count'
const store = createStore({
  modules: {
    count: count
  }
})

export default store