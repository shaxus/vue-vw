<template>
  <div>
    <div>{{bookid}}</div>
    <div>{{bookname}}</div>
    <GrandComponent v-bind="$attrs" v-on="$listeners"></GrandComponent>
  </div>
</template>

<script>
import GrandComponent from './GrandComponent.vue'
    export default {
        name: "ChildConponent",
        data(){
          return{

          }
        },
        props:{
          bookid:{type:String,required:true},
          bookname:{type:String,required:true}
        },
        components:{GrandComponent}
    }
</script>

<style scoped>

</style>
