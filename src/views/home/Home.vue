<template>
  <div class="index">
   <nav-bar class="home-nav"><div slot="center">商城</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recomment-view :recommends="recommends"></recomment-view>
    <fea-true></fea-true>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control"></tab-control>
    <goods-list :goods="goods['pop'].list"></goods-list>
  </div>

</template>
<script>
  // 子组件
  import HomeSwiper from  '../../views/home/childComs/HomeSwiper';
  import RecommentView from '../../views/home/childComs/RecommentView'
  import FeaTrue from  '../../views/home/childComs/FeaTrue'

//公共组件
  import NavBar from '../../components/common/navbar/NavBar';
  import TabControl from  '../../components/content/tabControl/TabControl'
  import GoodsList from  '../../components/content/goods/GoodsList'
  //数据引入
  import {
    getHomeMultidata,
    getHomeData
  } from "../../components/network/home";

  export default {
        name: "Home",
      components:{
        NavBar,
        HomeSwiper,
        RecommentView,
        FeaTrue,
        TabControl,
        GoodsList
      },
    data(){
          return{
            banners:[],
            recommends:[],
            goods:{
              'pop':{page:0,list:[]},
              'news':{page:0,list:[]},
              'sell':{page:0,list:[]}
            }
          }
    },
      created(){
          //请求多个数据
       this.getHomeMultidata();
        //请求商品数据
       this.getHomeData('pop');
      },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(
          res=>{
            // console.log(res)
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
          })
      },
      getHomeData(type){
        getHomeData('盗墓笔记').then(res=>{
          console.log(res)
          const goodsList = res.data.data;
          this.goods[type].list.push(...goodsList)
        }).catch(rea=>console.log(rea))
        // getHomeData(type, this.goodsList[type].page).then(res => {
        //     const goodsList = res.data.data;
        // this.goodsList[type].list.push(...goodsList)
        //     this.goodsList[type].page += 1
        //
        //   }
        // )
      }

    }
    }
</script>

<style scoped>
  .index{
    padding-top: 44px;
  }
.home-nav{
  background-color: var(--color-nav);
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
