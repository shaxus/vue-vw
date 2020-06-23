<template>
    <div>
      <div>
        <van-nav-bar title="标题">
          <template #left>
            <van-icon name="arrow-left" color="#ffffff" />
          </template>
          <template #title>
              <span style="color: #ffffff">账号绑定</span>
          </template>
        </van-nav-bar>
      </div>
      <div class="container">
        <div class="center">
          <span>我是家长</span>
          <span>我是老师</span>
        </div>
        <div class="touxiang">
          <div>
            <van-image
              width="80"
              height="80"
              fit="contain"
              :src="require('../../assets/touxiang1.png')"
            />
            <div>羊羽</div>
          </div>
          <div>
            <van-image
              width="70"
              height="70"
              fit="contain"
              :src="require('../../assets/55.png')"
            />
          </div>
          <div>
            <van-image
              width="80"
              height="80"
              fit="contain"
              :src="require('../../assets/touxiang2.png')"
            />
            <div>我的孩子</div>
          </div>
        </div>
        <div class="bottom">
          <div>
            <van-field
              v-model="sms"
              center
              clearable
              label="手机号码"
              placeholder="请输入手机号码"
              type="tel"
            >
              <template #button>
                <van-button round size="small" type="primary">发送验证码</van-button>
              </template>
            </van-field>
            <van-field   v-model="text"  label="验证码"  placeholder="请输入验证码"  type="tel" />
          </div>
          <div class="footer">
            <div class="list">
              <div>如果提交不成功，请确认;</div>
              <ul>
                <li>1、输入正确的手机号;</li>
                <li>2、验证码的有效期为5分钟;</li>
                <li>3、每天同账号最多获取5次，1分钟之内只能获取1条;</li>
                <li>4、手机号信息已经提交学校相关负责人;</li>
              </ul>
            </div>
          </div>
          <div>
            <van-button round type="primary" size="normal" style="width: 150px">确认绑定</van-button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RegisterVantComponet",
      data(){
          return{
            sms:'',
            text:''
          }
      },
      mounted(){
         document.querySelector('.van-nav-bar').classList.add('head_background')

      },
        methods: {
          onClickLeft() {
          // Vue.Toast('返回');
          },
          onClickRight() {
           Toast('按钮');
          },
        },
    }
</script>

<style scoped>
.head_background{
   background: rgb(4,190,142);
 }
.container{
  background: #e4e4e4;
}
.center{
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  background: #ffffff;
}
.center > span{
  display: inline-block;
}
.center > span:nth-child(1){
  color: rgb(4,190,142);
}

.touxiang{
  width: auto;
  height: 250px;
  position: relative;
  margin-top: 20px;
  background: #ffffff;
}
.touxiang>div{
  width: 150px;
  height: 150px;
  display: inline-block;
  margin-top: 15px;
  position: relative;
}
.touxiang>div:nth-child(1){
  left: -12px;
}
.touxiang>div:nth-child(2){
  width: 200px;
  top: -50px;
}
.touxiang>div:nth-child(3){
  right: -25px;
}
.bottom{
  background: #ffffff;
  margin-top: 20px;
}

.bottom>div:nth-child(3){
  /*width: 150px;*/
  margin-top: 50px;
}
.footer{
  text-align: left;
  font-size: 18px;
  margin-top: 20px;
  /*position: relative;*/
}

.list{
  list-style: none;
  text-align: left;
  margin-left: 80px;
}
</style>
