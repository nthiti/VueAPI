<template>
    <h1>Iframe</h1>
    <hr><br>
    <button class="btn-click1" @click="LoadWebpage(1)">Vuetify</button><br>
    <iframe v-if="showWebpage1" :src="Webpage1" frameborder="0" height="500px" width="1000px"></iframe>
    <button class="btn-click2" @click="LoadWebpage(2)">Google</button><br>
    <iframe v-if="showWebpage2" :src="Webpage2" frameborder="0" height="500px" width="1000px"></iframe>
    <button class="btn-click3" @click="LoadWebpage(3)">Vocab</button><br>
    <iframe v-if="showWebpage3" :src="Webpage3" frameborder="0" height="500px" width="1000px"></iframe>

</template>

<script>
export default {
    data() {
        return{
            showWebpage1: false,
            Webpage1: 'https://vuetifyjs.com/en/',
            showWebpage2: false,
            Webpage2: 'https://www.google.com/search?igu=1',
            showWebpage3: false,
            Webpage3: 'https://www.vocabulary.com/lists/',
        }
    },
    methods: {
        LoadWebpage(page) {
             // ถ้าหน้าเว็บถูกแสดงอยู่แล้ว ให้ปิดไป
            if ((page === 1 && this.showWebpage1) ||
                (page === 2 && this.showWebpage2) ||
                (page === 3 && this.showWebpage3)) {
                this.showWebpage1 = false
                this.showWebpage2 = false
                this.showWebpage3 = false
            } else {
                // ไม่งั้น ให้แสดงหน้าเว็บที่ถูกคลิก
               this.showWebpage1 = page === 1;
               this.showWebpage2 = page === 2;
               this.showWebpage3 = page === 3;
            }

            // this.showWebpage1 = false
            // this.showWebpage2 = false
            // this.showWebpage3 = false

            // if(page === 1) {
            //     this.showWebpage1 = !this.showWebpage1
            // } else if(page === 2) {
            //     this.showWebpage2 = !this.showWebpage2
            // } else if (page === 3) {
            //     this.showWebpage3 = !this.showWebpage3
            // }
        }
    }
}
</script>

<style>
.btn-click1 {
    color: blue;
    height: 60px;
    width: 1000px;
    font-size: 25px;
    background-color: lightskyblue;
    border: 0ch;
    /* border-radius: 50px; */
}
.btn-click2 {
    color: rgb(0, 131, 11);
    height: 60px;
    width: 1000px;
    font-size: 25px;
    background-color: rgb(160, 255, 178);
    border: 0ch;
    /* border-radius: 50px; */
}
.btn-click3 {
    color: rgb(196, 0, 0);
    height: 60px;
    width: 1000px;
    font-size: 25px;
    background-color: rgb(255, 168, 168);
    border: 0ch;
    /* border-radius: 50px; */
}
</style>