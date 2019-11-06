<template>
    <div id="goods">
      <goods-listitem v-for="item in goods" :goodsItem="item"/>
   <!--{{goods}}-->
    </div>
</template>

<script>
  import GoodsListitem from './GoodsListItem'
    export default {
        name: "GoodsList",
      components:{
          GoodsListitem
      },
      props:{
          goods:{
            type:Array,
            default:[]
          }
      }
    }
</script>

<style scoped>
#goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;
}
</style>
