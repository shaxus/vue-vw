<template>
  <div>
    <!--<div class="amap-page-container">-->
      <!--<el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :zoom="zoom">-->
      <!--</el-amap>-->

      <!--<div class="toolbar">-->
        <!--<span v-if="loaded">-->
          <!--location: lng = {{ lng }} lat = {{ lat }}-->
        <!--</span>-->
        <!--<span v-else>正在定位</span>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="amap-wrapper">-->
      <!--<el-amap class="amap-box" :vid="'amap-vue'" :center="center"></el-amap>-->
    <!--</div>-->

      <!--<div id="container"></div>-->
    <div id="iCenter"></div>
  </div>
</template>

<script>
  // import VueAMap from 'vue-amap';
    export default {
        name: "VueMap",
      data() {
        let self = this;
        return {
          center: [121.59996, 31.197646],
          lng: 0,
          lat: 0,
          zoom:15,
          loaded: false,
          plugin: [{
            pName: 'Geolocation',
            events: {
              init(o) {
                // o 是高德地图定位插件实例
                o.getCurrentPosition((status, result) => {
                  if (result && result.position) {
                    self.lng = result.position.lng;
                    self.lat = result.position.lat;
                    self.center = [self.lng, self.lat];
                    self.loaded = true;
                    self.$nextTick();
                  }
                });
              }
            }
          }]
        };
      },
        mounted(){
         let mapObj = new AMap.Map('iCenter');
          mapObj.plugin('AMap.Geolocation', function () {
            geolocation = new AMap.Geolocation({
              enableHighAccuracy: true,//是否使用高精度定位，默认:true
              timeout: 10000,          //超过10秒后停止定位，默认：无穷大
              maximumAge: 0,           //定位结果缓存0毫秒，默认：0
              convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
              showButton: true,        //显示定位按钮，默认：true
              buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
              buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
              showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
              showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
              panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
              zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            mapObj.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', this.onComplete);//返回定位信息
            AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
          });
          // var map = new AMap.Map('container', {
          //   zoom:11,//级别
          //   center: [116.397428, 39.90923],//中心点坐标
          //   viewMode:'3D'//使用3D视图
          // });
          //
          // console.log(map);
        },
        methods:{
          onComplete(CitySearchResult){
              console.log(CitySearchResult);
          }
        }
    }
</script>

<style scoped>
  .amap-demo {
    height: 800px;
  }
  .amap-page-container{
  }
  #container {width:100%; height: 500px; }
  #iCenter{
    width:100%; height: 500px;
  }
</style>
