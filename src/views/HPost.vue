<template>
  <h1>HTTP Post</h1>
    <form @submit.prevent="createPost" class="form-style">
        <h1 style="margin-top:-20px;color:white;">Add Topic</h1>
        <div class="box-topic">
            <label for="userId" class="text-topic">Posst User Id</label>
            <input type="text" id="userId" class="box-detail" v-model="formData.userId">
        </div>
        <div class="box-topic">
            <label for="title" class="text-topic">Posst Title</label>
            <input type="text" id="title" class="box-detail" v-model="formData.title">
        </div>
        <div class="box-topic">
            <label for="body" class="text-topic">Posst Body</label>
            <input type="text" id="body" class="box-detail" v-model="formData.body">
        </div>
        <button class="btn">Create Post</button>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            formData: {
                userId: '',
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
            .then((response) => console.log(response))
        }
    }
}
</script>

<style>
.form-style {
    background-color: forestgreen;
    width: 600px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 450px;
}
.text-topic {
    color: aliceblue;
    font-size: 20px;
    margin-right: 20px;
}
.box-topic {
    margin-top: 15px;
}
.box-detail {
    width: 300px;
    height: 25px;
    border-radius: 10px;
}
.btn {
    background-color:aqua;
    width: 150px;
    height: 30px;
    border-radius: 20px;
    margin-top: 20px;
}
</style>