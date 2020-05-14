<template>
    <div @click="say" >
        123
        <div>{{studentid}}</div>
        <div>{{studentage}}</div>
        <div>{{studentsex}}</div>
        <div>{{studentaddress}}</div>
    </div>
</template>

<script>
    export default {
        name: "SonComponent",
        data(){
          return{
            age:'wangyi'
          }
        },
      //父组件通过props属性传递进来的数据
        props:{
          // zhengxu:{type:String,required:false,default:''},
          studentid:{
            type:String,
            required:true
          },
          studentage:Number,
          studentsex:{
            type:String,
            required:false,
            default:'男'
          },
          studentaddress:{
            type:String,
            required:true
          }
        },
        methods:{
          say(){
            // 子组件通过emit方法触发父组件中定义好的函数，从而将子组件中的数据传递给父组件
            this.$emit('say', this.age);
          }
        }

    }
</script>

<style scoped>
  /*.zhengxu{*/
    /*color: yellow;*/
    /*font-size: 36px;*/
    /*background: skyblue;*/
  /*}*/
</style>
