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
          <el-button icon="el-icon-search" circle plain></el-button>
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
    <el-row style="margin-top:12px;">
      <el-col v-for="o in 5" :key="o">
        <el-card :body-style="{ padding: '0px' }">
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
  name: "Home",
  data() {
    return {
      backImgs: [{
          url: "./static/bg1.jpg"
        },
        {
          url: "./static/bg2.jpg"
        },
        {
          url: "./static/bg3.png"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.badge-item {
  float: left;
  margin-top: 10px;
  margin-right: 40px;
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
