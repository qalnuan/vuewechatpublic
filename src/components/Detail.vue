<template>
<el-container>
  <el-header style="height:24px;margin-bottom:5px;">
    <el-row :gutter="20" style="height:40px;">
      <el-col :span="10" style="height:40px;">
        <div style="height:100%;">
          <!-- <img src="../assets/logo.png" style="margin-top:2px;"> -->
          <span style="text-align:center;">福州劵淘网</span>
        </div>
      </el-col>
      <el-col :span="10" style="float:right;">
        <div style="float:right;height:100%;text-align:center;">
          <el-button icon="el-icon-search" circle plain v-on:click="goSearch"></el-button>
          <el-button icon="icon-el-icon-third-user" circle plain></el-button>
        </div>
      </el-col>
    </el-row>
  </el-header>

  <el-main style="padding:2px">
    <el-carousel :interval="3000" arrow="hover">
      <el-carousel-item v-for="item in backImgs" :key="item">
        <img style="width:100%;height:100%" :src="item.url" />
        </el-carousel-item>
    </el-carousel>
    <el-card class="box-card">
      <el-row :gutter="30">
        <el-col :span="6" v-for="item in selectItems" :key="item">
          <div class="select-div">
            <img :src="item.image" class="select-img">
            <div><span>{{item.title}}</span></div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <div class="more-title el-card__header el-card">
      <span>全部产品</span>
      <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
    </div>
    <el-row>
      <el-col v-for="o in 5" :key="o">
        <el-card :body-style="{ padding: '0px' }" v-on:click="goDetail">
          <el-row>
            <el-col :span="10" style="margin-top: 12px;">
              <div style="position:absolute; z-index:2; background-color:rgba(0, 0, 0, 0.5); color:white;">
                销售量
              </div>
              <img src="../assets/product.jpg" class="image">
            </el-col>
              <el-col :span="14">
                <div style="padding: 4px;">
                  <div style="text-size:13px;">
                    <span style="font-size:10px;">【福州网红火锅店】雄柒映象火锅~会跳舞的火锅店~鸳鸯子母锅~仅￥9.9元兑换100元菜金抵用券~火锅、小吃可以放心点啦~~</span>
                  </div>
                  <div style="color:orange;text-align:left;text-size:13px;">
                    <span>¥9.9</span>
                  </div>
                </div>
              </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</el-container>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

.badge-item {
  float: left;
  margin-top: 10px;
  margin-right: 40px;
}

.search-header {
  background-color: darkgray;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 100%;
  height: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
