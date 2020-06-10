<template>
    <div>
      <p>我与春风皆过客,你携秋水揽星河</p><br/>
      <router-link to="/">首页</router-link><br/>
      <router-link to="/a1">进入A1页面</router-link>
      <!--父级挂载子路由-->
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "A"
    }
</script>

<style scoped>

</style>
