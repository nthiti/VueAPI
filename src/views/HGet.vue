<template>
  <h1>HTTP GET</h1>
  <button class="btn" @click="getPosts">Click</button>

  <!-- ถ้าไม่มีข้อมูลหรือถ้าเป็น errorMsg ให้แสดงข้อความของ errorMsg -->
  <h3 v-if="errorMsg">{{errorMsg}}</h3>
  
  <div v-for="post in posts" :key="post.id">
    <h3>{{post.id}}. {{post.title}}</h3>
    <p>{{post.body}}</p>
    <hr>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HGet',
  data() {
    return {
      posts: [],
      errorMsg: '' //แสดงข้อมึวามของ errorMsg
    }
  },
  methods : {
    getPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts') //เปลี่ยนเป็น ('https://jsonplaceholder.typicode.com/postsadd') จะทำใให้ไม่มีข้อมูลแล้วจะแสดงข้แความ errorMsg ได้
      .then((response) => {
        console.log(response.data)
        this.posts = response.data
      })
      .catch((error) => {
        console.log(error)
        this.errorMsg = 'Error retrieving data' //เมื่อไม่มีข้อมูลใน get หรือ ไม่ม่ข้อมูล
      }) 
    }
  }

}
</script>

<style>
.btn {
    background-color: rgb(11, 125, 255);
    width: 150px;
    height: 30px;
    border-radius: 20px;
    margin-top: 20px;
    font-size: 20px;
}
</style>