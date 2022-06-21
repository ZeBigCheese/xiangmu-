<template>
  <div>
    <!-- 搜索框 -->
    <van-search
      shape="round"
      background="#4fc08d"
      placeholder="请输入搜索关键词"
      @click="$router.push('/search')"
    />

    <!-- 所有分类 -->
    <div class="allcate">
      <!-- 左侧分类 -->
      <div class="left">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item title="所有分类" />
          <van-sidebar-item 
          v-for="item in leftcate"
          :key="item.id"
          :title="item.name" />
        </van-sidebar>
      </div>
      <!-- 右侧分类 -->
      <div class="right">
        <van-swipe class="my-swipe" :autoplay="700" indicator-color="white">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <ul>
          <li
          v-for="item in rightcate"
          :key="item.id"
          >
            <img :src="item.icon" alt="">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>




  </div>
</template>

<script>
  export default {
      data() {
        return {
          activeKey: 0,
          
          allcate:[],
          leftcate:[],
          rightcate:[],
        }
      },
      created () {
        this.getdata();
      },
      methods: {
        // 点击左侧分类
        onChange(index){
          if(index==0){
            this.rightcate=this.allcate
          }else{
            var id=this.leftcate[index-1].id
            this.rightcate=this.allcate.filter(item=>{
              return item.pid==id
            })
            console.log(this.rightcate)
          }
        },
        // 所有数据+左侧分类
        async getdata() {
          var res=await this.$axios.get('/shop/goods/category/all')
          // console.log(res.data)
          // 所有数据
          this.allcate=res.data
          this.rightcate=res.data
          // 左侧数据
          this.leftcate=res.data.filter(item=>{
            return item.pid==0
          })
          // console.log(this.leftcate)
        }
      },
  }
</script>

<style lang="scss" scoped>
.allcate{
  width: 100%;
  display: flex;
  .left{
    width: 20%;
  }
  .right{
    width: 80%;
    .van-swipe {
      width: 80%;
      margin: 30px auto;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    li{
      width: 28%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  }
}
</style>