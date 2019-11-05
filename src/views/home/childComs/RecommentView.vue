<template>
<div class="recommentview">
  <div v-for="item in recommends" class="recommentview-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </a>
  </div>
</div>
</template>

<script>
    export default {
        name: "RecommentView",
      props:{
          recommends:{
            type:Array,
            default:[]
          }
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/base.css";
.recommentview{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}
  .recommentview-item{
    flex: 1;
  }
  .recommentview-item img{
    width: 60px;
    height: 60px;
   margin-bottom: 10px;
  }
  .recommentview-item div{
    color: var(--color-text);
  }
</style>
