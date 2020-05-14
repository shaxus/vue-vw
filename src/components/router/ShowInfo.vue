<template>
  <div>
    <div>ShowInfo</div>
    <!--父子路由，父组件一定要加上下面一行，不然子组件内容不会被渲染显示-->
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "ShowInfo"
    }
</script>

<style scoped>

</style>
