<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"> <slot name="item-icon"></slot></div>
     <div v-else><slot name="item-icon-active"></slot></div>
      <div v-bind:style="activestyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
        name: "TabBaritem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'#1296db'
        }
      },
      data(){
          return{
            // isActive:true,
          }
      },
      computed:{
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1
        },
        activestyle(){
          return this.isActive?{color:this.activeColor}:{}
        }
      },
      methods:{
          itemClick(){
            // console.log('111')
            this.$router.replace(this.path)
          }
      }
    }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  font-size:12px
  }
  .tab-bar-item img{
    width: 20px;
    height: 20px;
    margin-top: 3px;
    vertical-align: middle;
  }
  /*.active{*/
    /*color: #1296db;*/
  /*}*/
</style>
