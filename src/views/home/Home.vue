<template>
  <div class="index">
   <nav-bar class="home-nav"><div slot="center">商城</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recomment-view :recommends="recommends"></recomment-view>
  </div>

</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar';
  import HomeSwiper from  '../../views/home/childComs/HomeSwiper';
  import RecommentView from '../../views/home/childComs/RecommentView'
  import {getHomeMultidata} from "../../components/network/home";


  export default {
        name: "Home",
      components:{
        NavBar,
        HomeSwiper,
        RecommentView
      },
    data(){
          return{
            banners:[],
            recommends:[]
          }
    },
      created(){
        getHomeMultidata().then(
          res=>{
            console.log(res)
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
          })
      },
    }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-nav);
  color: white;
}
</style>
