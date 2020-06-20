<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--路由-->
    <!--<router-link to="/Login/1">登录</router-link>-->
    <!--<router-link to="/Login/2">登录</router-link>-->
    <!--<router-link :to="{name:'Register',params: { id: 123 }}">注册</router-link>-->
    <!--<router-link to="/ShowInfo">显示信息</router-link>-->
    <!--<router-link to="/ShowInfo/LeftContent">1</router-link>-->
    <!--<router-link to="/ShowInfo/RightContent">2</router-link>-->
    <!--<router-view></router-view>-->
    <!--状态管理-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
