<template>
    <div>
      <p>hello world</p>
<!--      <p>{{user}}</p>-->
<!--      子组件提供数据，父组件调用显示-->
      <slot name="zhengxu"  :msg="msg"></slot>

    </div>
</template>

<script>
    export default {
        name: "Test",
      data(){
          return{
            msg:'nihhh'
          }
      },
        props:{
          user:{
            type:String,
            require:true
          }
        },
        mounted() {
          console.log(this.user);
        }
    }
</script>

<style scoped>

</style>
