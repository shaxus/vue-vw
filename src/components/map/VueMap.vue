<template>
  <div>
    <div class="amap-page-container">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :zoom="zoom">
      </el-amap>

      <div class="toolbar">
        <span v-if="loaded">
          location: lng = {{ lng }} lat = {{ lat }}
        </span>
        <span v-else>正在定位</span>
      </div>
    </div>
<!--    <div class="amap-wrapper">-->
<!--      <el-amap class="amap-box" :vid="'amap-vue'" :center="center"></el-amap>-->
<!--    </div>-->
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
          zoom:18,
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
          // VueAMap.initAMapApiLoader({
          //   key: '959c5e7992c2d20fa0d1f665ca658c0d',
          //   plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
          //   v: '1.4.4'
          // });
        }
    }
</script>

<style scoped>
  .amap-demo {
    height: 300px;
  }
</style>
