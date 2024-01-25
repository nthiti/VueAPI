<template>
  <h1>Name Member</h1>
  <div v-for="mem in name" :key="mem.id">
    <h5>{{mem.id}}---{{mem.name}}---{{mem.email}}---{{mem.phone}}</h5>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name:[],
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => this.name = response.data)
  }
}
</script>

<style>

</style>