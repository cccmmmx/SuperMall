<template>
<div class="goods-item">
  <img :src="goodsItem.cover" alt="">
  <div class="goods-info">
    <p>{{goodsItem.tags}}</p>
    <span class="price">{{goodsItem.author}}</span>
    <span class="collect">{{goodsItem.category}}</span>
  </div>
</div>
</template>

<script>
    export default {
        name: "GoodsListItem",
      props:{
        goodsItem:{
          type:Object,
          default(){
            return {}
          }
        }
      }
    }
</script>

<style scoped>
.goods-item{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
   margin-bottom: 6px;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price{
    color: var(--color-nav);
    margin-right: 20px;

  }
  .goods-info .collect{
    position: relative;
    overflow: hidden;
  }
  .goods-info .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") no-repeat 0 0/10px 10px;
  }
</style>
