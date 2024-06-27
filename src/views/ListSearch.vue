<template>
  <h1>{{ header }}</h1>
  <input v-model="newItem" type="text" placeholder="Enter Location Travel">{{ newItem }} <br>{{ newItemPriority }}
  <label for="">
    <input type="radio" v-model="newItemPriority" value="add">ADD
  </label>
  <label for="">
    <input type="radio" v-model="newItemPriority" value="delete">DELETE
  </label>
  <select v-model="newItemPriority">
    <option value="add">ADD</option>
    <option value="delete">DELETE</option>
  </select>
  <div style="width:200px; background:pink;">
    <ul>
        <li v-for="list in items" :key="list.id">{{ list.label }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            header: 'Travel List App',
            newItem: '',
            newItemHighPriority: false,
            items: [
                {id:1, label:"Thailand",},
                {id:2, label:"USA",},
                {id:3, label:"Lapan",},
                {id:4, label:"Korea",},
                {id:5, label:"China",},
            ]
        }
    }
}
</script>

<style>

</style>