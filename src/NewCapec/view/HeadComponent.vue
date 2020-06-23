<template>
    <div class="header">
      <van-nav-bar title="title">
        <template #left>
          <van-image width="36" height="23" :src="require('../../assets/newcapec/image/back.gif')" />
        </template>
        <template #title>
          <span class="newcapec_logo">
            <van-image width="120" height="20" :src="require('../../assets/newcapec/image/logo.gif')" />
          </span>
        </template>
        <template #right>
          <van-icon name="chat-o" size="30" />
        </template>
      </van-nav-bar>
    </div>
</template>

<script>
    export default {
        name: "HeadComponent",
        data(){
          return{
              title:'新开普电子'
          }
        }
    }
</script>

<style scoped>
.header{

}

.newcapec_logo{
  display: inline-block;
  margin-top: 5px;
}
</style>
