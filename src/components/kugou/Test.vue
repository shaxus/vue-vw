<template>

</template>

<script>
    export default {
        name: "Test",
        mounted(){
          this.sousuo();
        },
        methods:{
          sousuo(){
            this.axios.get('/m_kugou/?json=true').then(({data}) => {
              console.log(data.data);
            })
          }
        }
    }
</script>

<style scoped>

</style>
