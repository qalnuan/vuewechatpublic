<template>
<el-container>
  <el-main>
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix">
        <span>{{orderInfo._status._title}}</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
      </div>
      <div style="padding: 14px;">
        <span>{{orderInfo._status._msg}}</span>
        <!-- <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div> -->
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <div style="padding: 14px;">

        <el-row :gutter="20">
          <el-col :span="4">
            <el-button icon="el-icon-location"></el-button>
          </el-col>
          <el-col :span="16">
            <div><span>{{orderInfo.real_name}}</span>&nbsp&nbsp<span>{{orderInfo.user_phone}}</span></div>
            <div>
              <span>{{orderInfo.user_address}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px'}">
      <el-row>
        <el-col :span="10" style="margin-top: 12px;">
          <img :src="baseURL + orderInfo.cartInfo.productInfo.image" class="image">
            </el-col>
          <el-col :span="14">
            <div style="padding: 4px;">
              <div style="text-size:13px;">
                <span style="font-size:10px;">{{orderInfo.cartInfo.productInfo.store_name}}</span>
              </div>
              <div style="color:orange;text-align:left;text-size:13px;">
                <span>{{'¥' + orderInfo.cartInfo.productInfo.price}}</span>
              </div>
              <div style="text-size:13px;color:grey;">
                <span style="font-size:10px;">{{"x" + orderInfo.total_num}}</span>
              </div>
            </div>
          </el-col>
      </el-row>
    </el-card>
    <el-card :body-style="{ padding: '0px'}">
      <div style="text-align:left;text-size:24px;height:auto;margin:12px;">
        <span style="font-size:20px;padding-left:12px;">实付款</span>
        <span style="font-size:20px;color:orange;float:right;padding-right:12px;">{{'¥' + orderInfo.total_price}}</span>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>订单信息</span>
      </div>
      <div class="text item">
        {{'订单编号： ' + orderInfo.order_id }}
      </div>
      <div class="text item">
        {{'创建时间：' + addTime}}
      </div>
    </el-card>
  </el-main>
</el-container>
</template>

<script>
import request from '../utils/request'
export default {
  name: "OrderDetail",
  created() {
    this.getOrderDetail()
  },
  data() {
    return {
      baseURL: process.env.VUE_APP_API_URL + ':10000',
      orderid: this.$route.params.orderid,
      orderInfo: {
        _status: {},
        cartInfo: {
          productInfo: {}
        }
      }
    };
  },
  computed: {
    addTime: function () {
      var data = new Date(this.orderInfo.add_time * 1000);
      return this.formatDate(data, 'yyyy-MM-dd hh:mm:ss');
    }
  },
  methods: {
    getOrderDetail: function () {
      request({
        url: '/routine/auth_api/get_order',
        method: 'post',
        params: {
          'uni': this.orderid
        }
      }).then(res => {
        console.log(JSON.stringify(res))
        this.orderInfo = res.data;
      }).catch(error => {
        console.log(error)
      })
    },
    formatDate: function (date, fmt) {
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ''
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
        }
      }
      return fmt
    },
    padLeftZero: function (str) {
      return ('00' + str).substr(str.length)
    },
    buyProduct: function () {

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
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

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
}
</style>
