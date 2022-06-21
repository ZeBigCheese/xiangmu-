<template>
  <div>
    <!-- 实现二级路由跳转 -->
    <div class="tiao">
      <router-view></router-view>
    </div>

    <van-tabbar v-model="active">
      <van-tabbar-item to="/index" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/classify" icon="search">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/mine" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>


  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.tiao{
  padding-bottom: 55px;
}
</style>