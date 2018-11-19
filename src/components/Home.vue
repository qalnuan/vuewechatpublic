<template>
<el-container>
  <el-header style="height:40px;">
    <el-row :gutter="20" style="height:40px;">
      <el-col :span="10">
        <div style="height:100%">
          <img src="../assets/logo.png">
        </div>
      </el-col>
      <el-col :span="10" style="float:right;">
        <div style="float:right;height:100%;text-align:center;">
          <i class="el-icon-search"></i>
          <i class="icon-el-icon-third-user"></i>
        </div>
      </el-col>
    </el-row>
  </el-header>

  <el-main>
    <el-carousel :interval="5000" arrow="hover">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-table>
      <el-table-column prop="date" label="日期" width="140">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </el-main>
</el-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      item: {}
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
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
