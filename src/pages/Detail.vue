<template>
<el-container>

  <el-main style="padding:2px;height:auto;">
    <el-carousel :interval="3000" arrow="hover">
      <el-carousel-item v-for="item in productInfo.storeInfo.slider_image" :key="item">
        <img style="width:100%;height:100%" :src="baseURL+item" />
      </el-carousel-item>
    </el-carousel>
    <div style="text-size:24px;width:100%;height:auto;margin:12px;">
      <span style="font-size:24px;">{{productInfo.storeInfo.store_name}}</span>
    </div>

    <div style="color:orange;text-align:left;text-size:24px;width:100%;height:auto;margin:12px;">
      <span style="font-size:36px;">{{'¥' + productInfo.storeInfo.price}}</span>
    </div>
    <div style="text-size:24px;color:grey;height:auto;">
      <span style="font-size:20px;padding-left:12px;">已售：{{productInfo.storeInfo.sales}}</span>
      <span style="font-size:20px;float:right;padding-right:12px;">库存：{{productInfo.storeInfo.stock}}</span>
    </div>
    <div style="background-color:gray;width:100%;margin: 12px 0px;padding:12px 0px;">
      <span style="font-size:36px;font-weight:bold;margin-left:12px;">商品详情</span>
    </div>
    <div v-html="productInfo.storeInfo.description" />
  </el-main>
  <el-footer style="position:fixed; left:0px; bottom:0px; width:100%; height:auto; z-index:100;">
    <bottom-button label="立即抢购" v-on:click="buyProduct"></bottom-button>
  </el-footer>
</el-container>
</template>

<script>
import request from '../utils/request'
export default {
  name: "Detail",
  created() {
    this.getProductInfo()
  },
  data() {
    return {
      baseURL: process.env.VUE_APP_API_URL + ':10000',
      productId: this.$route.params.id,
      productInfo: {
        storeInfo: {
          slider_image: []
        }
      }
    };
  },
  methods: {
    getProductInfo: function () {
      request({
        url: '/routine/auth_api/details',
        method: 'post',
        params: {
          'id': this.productId
        }
      }).then(res => {
        console.log(res)
        this.productInfo = res.data;
      }).catch(error => {
        console.log(error)
      })
    },
    buyProduct: function (event) {

    }
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
