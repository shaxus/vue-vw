<template>
    <div>
      <button @click="changeName">changeName</button>
    </div>
</template>

<script>
    export default {
        name: "GrandComponent",
        methods:{
          changeName(){
            this.$emit('testChangeName','人生');
          }
        }
    }
</script>

<style scoped>

</style>
