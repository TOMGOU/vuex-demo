<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{count}}</p>
    <button @click="handleAdd">add</button>
    <button @click="handleMinus">minus</button>
    <button @click="handleAsyncAdd">asyAdd</button>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const store = useStore();
    let count = computed(() => store.state.count.count);
    console.log({store}) // 这里注意指定user模块
    return {
      count,
      handleAdd: () => store.commit('count/ADD', 2),
      // handleAdd: () => store.dispatch('count/add', 2),
      handleMinus: () => store.dispatch('count/minus', 3),
      handleAsyncAdd: () => {
        setTimeout(() => {
          store.dispatch('count/add', 4)
        }, 1000)
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
