<template>
    <h1>Send API</h1>
    <hr><br>
    <input class="text-field" type="text" name="email" v-model="email"><br><br>
    <input class="text-field" type="text" name="password" v-model="password"><br><br>
    <button class="btn-add" v-on:click="addUser()">Add New User</button><br>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        addUser()
        {
            console.warn("function called",this.email,this.password)
        }
    }
}
</script>

<style>
.text-field {
    width: 300px;
    height: 30px;
    border-style: solid;
    border-width: 3px;
    border-color: black;
}
.btn-add {
    width: 150px;
    height: 30px;
    border-radius: 50px;
    background: green;
    color: white;
}
</style>