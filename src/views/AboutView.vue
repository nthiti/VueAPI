<template>
  <div class="about">
    <td>
      <h1>This is an about page</h1>
      <div v-for="item1 in list" :key="item1.id">
        <p>{{item1.id}}--{{item1.email}}--{{item1.first_name}}</p>
        <img :src="item1.avatar"/><br>
        <button>{{item1.first_name}}</button>
      </div>
    </td>
    <td>
      <h1>Member</h1>
      <div v-for="item2 in user" :key="item2.id">
        <p>{{item2.id}}--{{item2.email}}--{{item2.first_name}}</p>
        <img :src="item2.avatar"/><br>
        <button>{{item2.first_name}}</button>
      </div>
    </td>
    
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      list:[],
      user:[],
    }
  },
  async mounted() {
    let result = await axios.get("https://reqres.in/api/users?page=1");
    console.warn(result.data.data)
    this.list = result.data.data
    
    let member = await axios.get("https://reqres.in/api/users?page=2");
    console.warn(member.data.data)
    this.user = member.data.data
  },
  async showDetail() {
    let show = await axios.get("https://reqres.in/api/users?page=2");
    console.warn(show.data.data)
    alert(JSON.stringify(show.data.data));
  }
}
</script>

<style>

</style>
