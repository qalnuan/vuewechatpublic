<template>
<el-container class="container-home">
  <el-container v-if="isSearch">
    <el-header style="position:fixed; left:0px; top:0px; z-index:100; padding-top:6px; background-color:white;width:100%;">
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="title-left">
            <div class="title-header">
              <img src="../assets/logo.jpg"/>
            </div>
              <span>福州劵淘网</span>
            </div>
        </el-col>
        <el-col :span="10" style="float:right;">
          <div class="title-right">
            <el-button icon="el-icon-search" circle plain v-on:click="goSearch"></el-button>
            <el-button icon="icon-el-icon-third-user" circle plain v-on:click="goUser"></el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>

    <el-main style="padding:2px;margin-top:4em;margin-bottom:4em;">
      <el-carousel :interval="3000" arrow="hover">
        <el-carousel-item v-for="item in banners" :key="item.id" @click="goDetail(item)">
          <img style="width:100%;height:100%" :src="baseURL + item.pic"/>
        </el-carousel-item>
      </el-carousel>
      <el-card class="box-card">
        <el-row :gutter="30">
          <el-col :span="6" v-for="item in selectItems" :key="item.id">
            <div class="select-div" @click="goDetail(item)">
              <img :src="baseURL + item.image" class="select-img">
              <div><span>{{item.store_name}}</span></div>
            </div>
          </el-col>
        </el-row>
      </el-card>
      <div class="more-title el-card__header el-card">
        <span class="all-product">全部产品</span>
        <el-button class="look-more" type="text">查看更多>></el-button>
      </div>
      <el-row>
        <el-col v-for="item in hotItems" :key="item.id" @click.native="goDetail(item)">
          <el-card :body-style="{ padding: '0px' }">
            <el-row>
              <el-col :span="10" style="margin-top: 12px;">
                <div style="position:absolute; z-index:2; background-color:rgba(0, 0, 0, 0.5); color:white;">
                  {{'销售量' + item.sort}}
                </div>
                <img :src="baseURL + item.image" class="image">
            </el-col>
                <el-col :span="14">
                  <div style="padding: 4px;">
                    <div style="text-size:13px;">
                      <span style="font-size:10px;">{{item.store_name}}</span>
                    </div>
                    <div style="color:orange;text-align:left;text-size:13px;">
                      <span>{{'¥' + item.price}}</span>
                    </div>
                  </div>
                </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>

  <el-container v-if="!isSearch">
    <el-header class="search-header">
      <el-button type="text" style="color:green;margin-right:5px;font-size:16px;" v-on:click="searchToHome">返回</el-button>
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" clearable size="medium" v-model="searchCondition">
      </el-input>
      <el-button type="warning" style="margin-left:5px;" round>搜索</el-button>
    </el-header>

    <el-main style="padding:2px">
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import request from '../utils/request'
export default {
  name: "Home",
  created() {
    this.getHomeInfo()
  },
  data() {
    return {
      isSearch: true,
      baseURL: process.env.VUE_APP_API_URL + ':10000',
      banners: [],
      selectItems: [],
      hotItems: []
    };
  },
  methods: {
    goSearch: function (event) {
      this.isSearch = false;
    },
    searchToHome: function (event) {
      this.isSearch = true;
    },
    goDetail: function (item) {
      this.$router.push({
        path: "/detail",
        name: "Detail",
        params: {
          'id': item.id
        }
      });
    },
    goUser: function (event) {
      this.$router.push({
        path: "/user",
        name: "User",
        params: {}
      });
    },
    getHomeInfo() {
      request({
        url: '/routine/auth_api',
        method: 'get'
      }).then(res => {
        console.log(res)
        if (res.code === 200) {
          this.banners = res.data.banner
          this.selectItems = res.data.best
          this.hotItems = res.data.hot
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.look-more {
  float: right;
  color: #b3b3b3;
  font-size: 24px;
  padding: 5px;
}

.all-product {
  font-size: 36px;
  margin-top: 12px;
}

.more-title {
  margin-top: 8px;
  background-color: white;
}

.title-left {
  height: 100%;
  width: 100%;
}

.title-right {
  float: right;
  height: 36px;
  margin: auto;
  padding: 12px 0px;
  text-align: center;
}

.title-header {
  padding: auto;
  height: 72px;
  width: 72px;
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
}

.title-left img {
  width: 100%;
  height: 100%;
}

.title-left span {
  font-size: 24px;
  margin-left: 12px;
  position: relative;
  bottom: 24px;
}

.select-div {
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 24px;
  padding-bottom: 24px;
}

.select-img {
  width: 100%;
  padding-bottom: 24px;
}

.container-home {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100%;
}

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

.el-button.is-circle {
  padding: 24px;
  position: relative;
  bottom: 12px;
}
</style>
