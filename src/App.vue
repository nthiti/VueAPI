<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/send">Send</router-link> |
    <router-link to="/webframe">Iframe</router-link> |
    <router-link to="/learn">Learn</router-link> |
    <router-link to="/list">List</router-link> |
    <router-link to="/hget">GET</router-link> |
    <router-link to="/hpost">Post</router-link> |
    <router-link to="/listsearch">ListSearch</router-link> |
  </nav>

  <!-- <h1>Option Style</h1>
  <button @click="onClick">{{counter}}</button>
  <hr>
  <Demo1RefAndReactive/>

  <hr>
  <Demo2CounterHook/>

  <hr>
  <Demo3LifeCycleHooks/> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
// import Demo1RefAndReactive from "./components/Demo1RefAndReactive"
// import Demo2CounterHook from "./components/Demo2CounterHook"
// import Demo3LifeCycleHooks from "./components/Demo3LifeCycleHooks"

// export default {
//   components:{Demo1RefAndReactive, Demo2CounterHook, Demo3LifeCycleHooks},
  
//   data() {
//     return {
//       counter: 0
//     }
//   },
//   methods: {
//     onClick(){
//       this.counter++
//     }
//   },
// }
</script>