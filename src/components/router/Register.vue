<template>
  <div>
    <p>注册</p>
    <div>
      <button @click="transPage">跳转</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Register",
        methods:{
          transPage(){
            const userId = '123';

            this.$router.push({path:`/Login/${userId}`});
            // this.$router.push({name:'Login',params:{userId}});
            //如果提供了 path，params 会被忽略
            // this.$router.push({path:'/Login',params:{userId}});
          }
        }
    }
</script>

<style scoped>

</style>
