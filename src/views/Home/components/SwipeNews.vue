<!-- 首页滚动新闻 -->
<template>
  <div class="swipe-news">
    <div class="news-title">
      <img :src="imgTitle" alt />
    </div>
    <ul :class="{'news-list':true,'trans':flag==true,'move':flag==true,'move01':flag==false}" ref="news">
      <li v-for="list in newListDatas" :key="list.id">{{list.title}}</li>
      
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      imgTitle:require("@/assets/images/news-title.png"),
      flag:false,
      timer: "",
      newListDatas:[
        {
          id:"1",
          title:"新闻00001"
        }, {
          id:"2",
          title:"新闻00002"
        }, {
          id:"3",
          title:"新闻00003"
        }, {
          id:"4",
          title:"新闻00004"
        }, {
          id:"5",
          title:"新闻00005"
        }, {
          id:"6",
          title:"新闻00006"
        }, {
          id:"7",
          title:"新闻00007"
        }, {
          id:"8",
          title:"新闻00008"
        }
      ]
    };
  },
  methods:{
     scrollnew(){
      //  var oul = this.$refs.news;  //获取ul节点
      //  console.log(oul)
      //  oul.style.marginTop = "-5rem";
       var that = this;
       that.flag=!that.flag;
       setTimeout(function(){
          that.newListDatas.push(that.newListDatas[0]);
          that.newListDatas.shift();
          // oul.style.marginTop = "0";
          that.flag = !that.flag;
       },500)
     }
  },
  mounted(){
    this.timer = setInterval(this.scrollnew, 2000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>
<style lang="less">
.swipe-news {
  display: flex;
  height: 5rem;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 0 10px;
  overflow: hidden;
  .news-title {
    img {
      height: 3rem;
      margin-top: 1rem;
    }
  }
  .trans {
    transition: all 0.5s;
  }
  .move{
    margin-top: -5rem;
  }
  .move01{
    margin-top: 0;
  }
  .news-list {
    margin-left: 2rem;
    
    li {
      height: 5rem;
      line-height: 5rem;
      font-size: 1.4rem;
    }
  }
}
</style>