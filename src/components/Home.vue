<template>
  <div id="div1">
    {{message}}
    <router-link to="/">首页</router-link>
  </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
          return {
            "message": "我叫八九，你叫十，十有八九，八九不离十,人这辈子很长，恰到好处的喜欢最舒服，你不用多好，我喜欢就好，我没有多好，你不嫌弃就好"
          }
        }
    }
</script>

<style scoped>
   #div1{
     margin-left: 38%;
     border: black 5px ridge;
     text-align: center;
     width: 450px;
     height: 150px;
     background: aqua;
     color: crimson;
     font-size: 25px;
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
   }
</style>
