<template>
    <div>
      <div>{{count}}</div>
      <button @click="changeNumber">changeNumber</button>
      <div id="container" style="width:600px;height:500px;"></div>
    </div>
</template>

<script>
    // import store from '../../store/store'
    export default {
        name: "Demo",
        data(){
          return{
            longitude:0,//经度
            latitude:0,//纬度
            city:'',
            city:''
          }
        },
        computed:{
          count(){
            return this.$store.state.count;
          }
        },
        mounted(){
          // var geolocation = new qq.maps.Geolocation("2I5BZ-SI4CV-N7BPO-UXU7G-WLYQK-KHFKQ", "myapp");
          // console.log(geolocation);
          this.getMyLocation();
        },
        methods:{
          changeNumber(){
            // this.$store.commit('SHA_XU',2);
            //分发 Action
            this.$store.dispatch('add');
            console.log(this.$store.state.a);
          },
          //定位获得当前位置信息
          getMyLocation() {
            var geolocation = new qq.maps.Geolocation("2I5BZ-SI4CV-N7BPO-UXU7G-WLYQK-KHFKQ", "myapp");
            // geolocation.getIpLocation(this.showPosition, this.showErr);
            geolocation.getLocation(this.showPosition, this.showErr);//或者用getLocation精确度比较高

          },
          showPosition(position) {
            console.log(position);
            console.log();
            this.latitude = position.lat;
            this.longitude = position.lng;
            this.city = position.city;
            this.setMap();
          },
          showErr() {
            console.log("定位失败");
            this.getMyLocation();//定位失败再请求定位，测试使用
          },
//第二部分
          //位置信息在地图上展示
          setMap() {
            //步骤：定义map变量 调用 qq.maps.Map() 构造函数   获取地图显示容器
            //设置地图中心点
            var myLatlng = new qq.maps.LatLng(this.latitude,this.longitude);
            //定义工厂模式函数
            var myOptions = {
              zoom: 13,               //设置地图缩放级别
              center: myLatlng,    //设置中心点样式
              mapTypeId: qq.maps.MapTypeId.ROADMAP  //设置地图样式详情参见MapType
            }
            // //获取dom元素添加地图信息
            var map = new qq.maps.Map(document.getElementById("container"), myOptions);
//第三部分
            //给定位的位置添加图片标注
            var marker = new qq.maps.Marker({
              position: myLatlng,
              map: map
            });
            // //给定位的位置添加文本标注
            // var marker = new qq.maps.Label({
            //   position: myLatlng,
            //   map: map,
            //   content:'这是我当前的位置，偏差有点大，哈哈'
            // });
          }
        }
    }
</script>

<style scoped>

</style>
