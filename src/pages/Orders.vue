<template>
<div>
  <div class="order_title">
    <ul class="flex-box">
      <li @click="order_state(-1)" type="-1" class="flex-one">
        <p v-bind:class="{ cur: state==-1 }">全部</p>
      </li>
      <li @click="order_state(0)" type="0" class="flex-one">
        <p v-bind:class="{ cur: state==0 }">未支付</p>
      </li>
      <li @click="order_state(1)" type="1" class="flex-one">
        <p v-bind:class="{ cur: state==1 }">未发货</p>
      </li>
      <li @click="order_state(2)" type="2" class="flex-one">
        <p v-bind:class="{ cur: state==2 }">已发货</p>
      </li>
      <li @click="order_state(-4)" type="-4" class="flex-one">
        <p v-bind:class="{ cur: state==-4 }">其他</p>
      </li>
    </ul>
  </div>
  <div style="margin-top:54px;">
    <el-row>
      <el-col v-for="item in orderList" :key="item.id">
        <el-card :body-style="{ padding: '0px'}">
          <el-row>
            <el-col :span="10" style="margin-top: 12px;">
              <img :src="baseURL + item.cartInfo.productInfo.image" class="image">
            </el-col>
              <el-col :span="14">
                <div style="padding: 4px;">
                  <div style="text-size:13px;">
                    <span style="font-size:10px;">{{item.cartInfo.productInfo.store_name}}</span>
                  </div>
                  <div style="color:orange;text-align:left;text-size:13px;">
                    <span>{{'¥' + item.cartInfo.productInfo.price}}</span>
                  </div>
                </div>
              </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
import request from '../utils/request'
export default {
  name: "Orders",
  created() {
    this.getOrders()
  },
  data() {
    return {
      baseURL: process.env.VUE_APP_API_URL + ':10000',
      state: this.$route.params.state,
      orderList: []
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    order_state(tab, event) {
      console.log(tab, event);
      this.state = tab
      this.getOrders()
    },
    getOrders() {
      let params = {
        'type': this.state
      }
      if (-1 == this.state) {
        params = {}
      }
      request({
        url: '/routine/auth_api/get_user_order_list',
        method: 'post',
        params: params
      }).then(res => {
        console.log(JSON.stringify(res))
        this.orderList = res.data;
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
ul,
li {
  list-style: none;
}

.flex-box {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

.flex-one {
  -webkit-box-flex: 1.0;
  -moz-flex-grow: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  flex: 1;
}

.order_title {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  line-height: 90px;
  border-bottom: 4px solid #f5f5f5;
  background: #fff;
  z-index: 9;
}

.order_title>ul>li {
  float: left;
  height: 90px;
  line-height: 90px;
  text-align: center;
}

p,
dd,
dl {
  margin: 0 auto;
  padding: 0;
}

.order_title>ul>li>p {
  height: 78px;
  line-height: 82px;
  display: inline-block;
  font-size: 32px;
}

.order_title>ul>li>p.cur {
  color: #ff834c;
  border-bottom: 2px solid #ff834c;
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
</style>
