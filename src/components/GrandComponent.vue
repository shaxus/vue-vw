<template>
    <div>
      <button @click="changeName">changeName</button>
<<<<<<< HEAD
      <slot></slot>
=======
>>>>>>> 8a56bcac5a95ae981716dd93f299eb88137ee929
    </div>
</template>

<script>
<<<<<<< HEAD
export default {
=======
    export default {
>>>>>>> 8a56bcac5a95ae981716dd93f299eb88137ee929
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
