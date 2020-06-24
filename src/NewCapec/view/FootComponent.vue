<template>
    <footer>
      <div class="footer_tel">
        <span>点击拨打服务热线：4006 300248</span>
      </div>
      <div class="footer_top">
        <span>电脑版</span>
        <span>手机版</span>
      </div>
      <div class="footer_bottom">
        <span>Copyright © 2014 新开普电子股份有限公司</span>
      </div>
    </footer>
</template>

<script>
    export default {
        name: "FootComponent"
    }
</script>

<style scoped>
  footer{
    text-align: center;
  }
  .footer_tel{
    background: rgb(153,153,153);
  }
  .footer_tel>span{
    display: inline-block;
    font-size: 16px;
    font-weight: 700;
    color: #fc3304;
    -webkit-text-fill-color: #fc3304;
    /*-webkit-text-stroke: 2px #fff;*/
  }
  .footer_top{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 16px;
    font-size: 14px;
  }
  .footer_top>span:nth-child(2){
    color: #fc3304;
  }
  .footer_bottom{
    margin-top: 15px;
    font-size: 16px;
  }
</style>
