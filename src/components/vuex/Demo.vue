<template>
    <div>
      <div>{{count}}</div>
      <button @click="changeNumber">changeNumber</button>
    </div>
</template>

<script>
    // import store from '../../store/store'
    export default {
        name: "Demo",
        computed:{
          count(){
            return this.$store.state.count;
          }
        },
        methods:{
          changeNumber(){
            // this.$store.commit('SHA_XU',2);
            //分发 Action
            this.$store.dispatch('add');
            console.log(this.$store.state.a);
          }
        }
    }
</script>

<style scoped>

</style>
