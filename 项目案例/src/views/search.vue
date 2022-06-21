<template>
    <div>

      <!-- 搜索框 -->
      <van-search v-model="keyword" @search="onSearch" placeholder="请输入搜索关键词" />
    
      <!-- 历史记录 -->
      <div class="history">
          <!-- 删除 -->
          <div class="shang">
              <h4>历史记录</h4>
              <div>
                  <van-icon name="delete-o" @click="$store.commit('shanall')"/>
              </div>
          </div>
          <!-- 搜索记录 -->
          <div class="xia">
              <span
              v-for="item in $store.state.history"
              :key="item.id"
              v-if="$store.state.history.length>0"
              >
              {{item}}
              </span>
                <div class="wushu" v-else>暂无数据......</div>
          </div>
      </div>

      <!--  搜索列表 -->
      <div class="list">
          <ul>
              <li
              v-for="item in arr"
              :key="item.id"
              >{{item.name}}</li>
          </ul>
      </div>



    </div>
</template>

<script>
    export default {
        data() {
            return {
                keyword: "",
                arr:[],
            }
        },
        watch:{
            async keyword(){
                if(this.keyword.length>0){
                    var res=await this.$axios.get('/shop/goods/list')
                    console.log(res.data)
                this.arr=res.data.filter(item=>{
                    return item.name.indexOf(this.keyword)>=0
                })
                console.log(this.arr)
                }
            }
        },
        methods: {
            onSearch(keyword) {
                this.$store.commit('lishi',keyword)
                this.keyword=''
            }
        },
    }
</script>

<style lang="scss" scoped>
.history{
    .shang{
        display: flex;
        justify-content: space-between;
        margin: 0 10px;
        
    }
    .xia{
        display: flex;
        flex-wrap: wrap;
        span{
            border: 1px solid #333;
            margin-left: 10px;
            margin-top: 10px;
        }
        .wushu{
            margin: 10px auto;
        }
    }
}


.list{
    ul{
        margin-top: 20px;
    }
}

</style>