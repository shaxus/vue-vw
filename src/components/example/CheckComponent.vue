<template>
  <div class="container">
    <div>
      <mt-header   title="账号绑定">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <!--<mt-button icon="more" slot="right"></mt-button>-->
      </mt-header>
    </div>
    <div class="top">
      <span style="display: inline-block">我是家长</span>
      <span style="display: inline-block">我是老师</span>
    </div>
    <div class="center">
      <div class="touxiang" >
        <img src="../../assets/unnamed.jpg" alt="">
        <div>羊羽</div>
      </div>
      <div class="touxiang" >
        <img src="../../assets/unnamed.jpg" alt="">
        <div>我的孩子</div>
      </div>
    </div>
    <div class="bottom">
      <div>
       <div style="display: inline-block;width: 230px"> <mt-field label="手机号" placeholder="" type="tel" :attr="{ maxlength: 10 }" ></mt-field></div>
       <div style="display: inline-block;width: 120px;"><span><mt-button size="small" type="primary">发送验证码</mt-button></span></div>
      </div>
      <div>
        <mt-field label="验证码" placeholder="" :attr="{ maxlength: 7 }"></mt-field>
      </div>
      <div class="footer">
        <div class="list">
          <div>如果提交不成功，请确认</div>
         <ui >
           <li>1、输入正确的手机号</li>
           <li>2、验证码的有效期为5分钟</li>
           <li>3、每天同账号最多获取5此，1分钟之内只能获取两条</li>
           <li>4、手机号信息已经给学校相关负责人</li>
         </ui>
        </div>
      </div>
      <div style="margin-top: 20px">
        <mt-button  type="primary" @click.native="handleClick">确认绑定</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CheckComponent",
        data(){
          return{

          }
        },
      methods:{
        handleClick(){
          alert('绑定')
        }
      }
    }
</script>

<style scoped>
  .container{
    /*background: aliceblue;*/
    /*position: fixed;*/
  }
  .top{
    width: 100%;
    height:80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 0px;
    background: yellow;
  }

  .center{
    width: 100%;
    height:240px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    background: darkgrey;
  }
  .touxiang{
    width: 150px;
    height: 120px;
    display: inline-block;
  }
  .touxiang>img{
    width: 100%;
    height: 100%;
  }
  .list{
    list-style: none;
    text-align: left;
    /*position: absolute;*/
    /*left: 80px;*/
    margin-left: 80px;
  }
  .footer{
    text-align: left;
    font-size: 16px;
    margin-top: 20px;
    /*position: relative;*/
  }
</style>

