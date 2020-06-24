<template>
  <div>
    <!--使用组件-->
    <!--通过:msg将父组件的数据传递给子组件-->
    <!--父组件向子组件传值 v-bind 绑定 -->
    <!--父组件监听子组件触发的say方法，调用自己的parentSay方法-->
    <div>{{xingMing}}</div>
    <ul>
      <li v-for="(item,index) in arry2" :key="index">{{item}}</li>
    </ul>
    <p>nihao</p>
    <!--<div v-if="isZhengxu">xianshi</div>-->
    <!--<div v-else>buxianshi</div>-->
<<<<<<< HEAD
    <Test></Test>
    <div>{{textData}}</div>
    <input type="text" v-model="textData">
    <ChildComponent @testChangeName="changeName" v-bind="bookinfo" ></ChildComponent>

=======

    <div>{{textData}}</div>
    <input type="text" v-model="textData">
    <ChildComponent @testChangeName="changeName" v-bind="bookinfo" ></ChildComponent>
>>>>>>> 8a56bcac5a95ae981716dd93f299eb88137ee929
    <!--<SonComponent ref="SonComponent" v-bind="studentinfo" :class="{zhengxu:isZhengxu}" @say="helloSon"></SonComponent>-->
  </div>
</template>

<script>
  //引入组件
import SonComponent from '../components/SonComponent.vue'
import ChildComponent from './ChildComponent.vue'
<<<<<<< HEAD
import Test from './slot/Test.vue'
=======
>>>>>>> 8a56bcac5a95ae981716dd93f299eb88137ee929
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arry2:['liubang','xiangyu','hangxin','xiaohe','zhangliang'],
      textData:'zhengxu',
      isZhengxu:true,
      firstName:'xufei',
      lastName:'zheng',
      studentinfo:{
        studentid:'123456',
        studentage:25,
        studentsex:'女',
        studentaddress:'安徽省合肥市'
      },
      bookinfo:{
        bookid:'文学类',
        bookname:'平凡世界',
        bookaddress:'人民教育出版社'
      }
    }
  },
  //注册组件
<<<<<<< HEAD
  components:{SonComponent,ChildComponent,Test},
=======
  components:{SonComponent,ChildComponent},
>>>>>>> 8a56bcac5a95ae981716dd93f299eb88137ee929
  /*
  * 当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，
  * 因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
  * */
  computed:{
    xingMing() {
      let {firstName,lastName} = this;
      return firstName + lastName;
    }
  },
  /*
  * 当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，
  * 使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，
  * 限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。
  * 这些都是计算属性无法做到的。
  * */
  watch:{

  },
  methods:{
    //msg 子组件传递过来的数据
    helloSon(msg){
      console.log('hello',msg);
    },
    changeName(val){
      this.bookinfo.bookname = val;
    }
  },
  mounted(){
    console.log(this.$refs.SonComponent);
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.zhengxu{
  font-size: 36px;
  color: red;
}
</style>
