<template>
  <div>

    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="800" indicator-color="white">
      <van-swipe-item
      v-for="item in lunbo"
      :key="item.id"
      >
      <img :src="item.picUrl" alt="">
      </van-swipe-item>
    </van-swipe>

    <!-- 人气推荐 -->
    <h2>人气推荐</h2>
    <ul>
      <li
      v-for="item in rqtj"
      :key="item.id"
      >
        <img :src="item.pic" alt="">
        <div v-html="item.name"></div>
      </li>
    </ul>


    <!-- 点击返回顶部 -->
    <div class="goback" @click="goback"></div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        lunbo:[],
        rqtj:[],
      }
    },
    created () {
      this.getdata();
      this.getrqtj();

      // 点击返回顶部
      document.addEventListener('scroll',function(){
        if(window.pageYOffset>100){
          document.querySelector('.goback').style.display="block"
        }else{
          document.querySelector('.goback').style.display="none"
        }
      })
    },
    methods: {
      // 点击返回顶部
      goback(){
        window.scroll(0,0)
      },
      // 轮播图渲染
      async getdata() {
        var res=await this.$axios.get('/banner/list')
        this.lunbo=res.data
      },
      // 人气推荐渲染
      async getrqtj(){
        var res=await this.$axios.get('/shop/goods/list')
        console.log(res.data.slice(-4))
        this.rqtj=res.data.slice(-4)
      }
    },
  }
</script>

<style lang="scss" scoped>
h2{
  background-color: #ddd;
  text-align: center;
}

ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  li{
    width: 48%;
    img{
      width: 100%;
      height: 100%;
    }
  }
}


.goback{
  width: 30px;
  height: 30px;
  background-color: yellow;
  position: fixed;
  right: 20px;
  bottom: 60px;
  border-radius: 50%;
  display: none;
}
</style>