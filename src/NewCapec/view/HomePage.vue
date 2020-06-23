<template>
  <div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <HeadComponent></HeadComponent>
      <div class="main">
        <div>
          <van-tabs
            type="line"
            color="rgba(255,255,255,0)"
            swipe-threshold="6"
            title-style="font-size:12px"
            background="rgb(4,97,167)"
            title-active-color="#ffffff"
            title-inactive-color="#ffffff">
            <van-tab title="首页" :to="{ path: '/HomePage' }"></van-tab>
            <van-tab title="解决方案">内容 2</van-tab>
            <van-tab title="产品中心">内容 3</van-tab>
            <van-tab title="公司新闻">内容 4</van-tab>
            <van-tab title="关于我们">内容 4</van-tab>
          </van-tabs>
        </div>
        <div class="scroll">
          <van-swipe class="my-swipe" :loop=loop :autoplay="3000" :duration="2000" :showIndicators="false" indicator-color="white">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img v-lazy="image" style="width: 100%;height: auto">
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="content">
          <div class="clear">
            <van-notice-bar
              left-icon="comment-o"
              color="#000000"
              text="新开普获蚂蚁金服战略投资，携手打造校园新生态"
            />
          </div>
          <div class="hangye">
            <div class="hytitle">
              <span>行业解决方案</span>
            </div>
            <div class="hylist">
              <van-grid :border="false" :column-num="4" >
                <van-grid-item v-for="(imageList, index) in hyLists" :key="index">
                  <van-image width="60px" height="60px" :src=imageList />
                  <span class="hylist_xiabiao">{{hyData[index]}}</span>
                </van-grid-item>
              </van-grid>
            </div>
          </div>
          <div class="indexpro">
            <div class="protitle">
              <span>产品中心</span>
            </div>
            <div class="prolist">
              <van-grid :border="true" :column-num="3" :gutter="5">
                <van-grid-item v-for="(imageList, index) in prolistImage" :key="index">
                  <van-image  :src=imageList />
                  <span class="prolist_xiabiao">{{prolistData[index]}}</span>
                </van-grid-item>
              </van-grid>
            </div>
          </div>
        </div>
      </div>
      <FootComponent></FootComponent>
    </van-pull-refresh>
  </div>
</template>

<script>
    import Vue from 'vue';
    import { Lazyload ,Toast} from 'vant';
    import HeadComponent from './HeadComponent'
    import FootComponent from './FootComponent'
    Vue.use(Lazyload);
    export default Vue.extend({
      name: "HomePage",
      data(){
        return{
          count: 0,
          isLoading: false,
          loop:true,
          images: [
            require("../../assets/newcapec/image/index1.jpg"),
            require("../../assets/newcapec/image/index2.jpg"),
            require("../../assets/newcapec/image/index3.jpg"),
            require("../../assets/newcapec/image/index4.jpg"),
          ],
          hyLists:[
            require('../../assets/newcapec/image/edu.gif'),
            require('../../assets/newcapec/image/ent.gif'),
            require('../../assets/newcapec/image/city.gif'),
            require('../../assets/newcapec/image/hulian.gif')
          ],
          hyData:[
            '教育行业',
            '企事业',
            '城市金融',
            '移动互联'
          ],
          prolistImage:[
            require("../../assets/newcapec/image/zhifu.jpg"),
            require("../../assets/newcapec/image/shibie.jpg"),
            require("../../assets/newcapec/image/meter.jpg"),
            require("../../assets/newcapec/image/dlzb.jpg"),
            require("../../assets/newcapec/image/ranqi.jpg"),
            require("../../assets/newcapec/image/rfid.jpg"),
          ],
          prolistData:[
            '电子支付产品',
            '智能识别产品',
            '智能水电产品',
            '电力载波产品',
            '智能燃气产品',
            '射频识别产品',
          ]
        }
      },
      components:{
        HeadComponent,
        FootComponent
      },
      mounted(){
      },
      methods:{
        onRefresh() {
          setTimeout(() => {
            Toast('刷新成功');
            this.isLoading = false;
            this.count++;
          }, 1000);
        },
      }})
</script>

<style scoped>
.line_hide{
  background_color: rgb(0,0,0);
}
.font_size{
  font-size: 12px;
  /*padding: 0 10px;*/
  /*transform: scale(1,0.9);*/
}
.van-tabs>>>.van-tab{
    font-size: 12px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  /*background-color: #39a9ed;*/
}

.van-swipe >>>{
  height: 123px;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
  .hytitle{
    background: rgb(0,92,161);
    height: 50px;
    line-height: 50px;
  }
  .hytitle>span{
    font-size: 24px;
    display: inline-block;
    margin-left: 35px;
    color: #ffffff;
  }
  .hylist{
    padding: 10px 10px;
    background: #ffffff;
    -webkit-box-shadow: 0 0 5px #999;
  }
  .van-grid-item >>>{
    font-size: 12px;
  }
  .hylist_xiabiao{
    display: inline-block;
    margin-top: 12px;
    /*background: rgb(0,92,161);*/
  }
  .protitle{
    background: rgb(0,92,161);
    height: 50px;
    line-height: 50px;
    margin-top: 20px;
  }
  .protitle>span{
    font-size: 24px;
    display: inline-block;
    margin-left: 35px;
    color: #ffffff;
  }
  .prolist{
    background: #ffffff;
    -webkit-box-shadow: 0 0 5px #999;
  }
  .prolist_xiabiao{
    width: 100%;
    display: inline-block;
    margin-top: 15px;
    padding: 0 0;
    background: rgb(0,92,161);
    text-align: center;
  }
</style>
