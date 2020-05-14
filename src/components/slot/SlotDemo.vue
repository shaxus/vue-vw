<template>
  <div>
    <Test>
      <!--            vue2.6.0 之前的版本-->
      <!--        <template slot="default" slot-scope="slotProps">-->
      <!--            {{slotProps.msg}}-->
      <!--        </template>-->

      <!--        vue2.6.0+-->
      <!-- 接收 prop 的具名插槽 -->
      <template v-slot:zhengxu="slotProps">
        {{slotProps.msg}}
      </template>
    </Test>
<!--  具名插槽  -->
    <Test2>
      <template v-slot:header>
        <h1></h1>
      </template>
      <template v-slot:main>
        <p>1</p>
        <p>2</p>
      </template>
      <template v-slot:footer>
        <h1>dibu</h1>
      </template>
    </Test2>
  </div>
</template>

<script>
  import Test from "./Test";
  import Test2 from "./Test2";
    export default {
        name: "SlotDemo",
        data(){
          return{}
        },
        components:{Test2,Test},
        methods:{},
    }
</script>

<style scoped>

</style>
