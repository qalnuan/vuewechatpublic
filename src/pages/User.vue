<template>
<div style="width: 100%;height: 100%;background-color: #f5f5f5;">
  <div class="my_head">
    <div class="info">
      <img class="hp" :src="userInfo.headimgurl" alt>
      <p class="name">{{userInfo.nickname}}</p>
    </div>
  </div>
  <div class="my_content">
    <div class="el-card__header el-card more-title" v-on:click="goOrders(-1)">
      <i class="icon"></i><span class="title-font">我的订单</span>
      <span class="lookAll">
        <span class="title-font-right">查看全部</span>
      <i class="sign"></i>
      </span>
    </div>
    <div class="nav_item_son">
      <ul class="clearfloat flex-box">
        <li class="flex-one" v-on:click="goOrders(0)">
          <p>
            <img src="../assets/u_nav1-1.png" alt>
            <span>未支付</span>
          </p>
        </li>
        <li class="flex-one" v-on:click="goOrders(1)">
          <p>
            <img src="../assets/u_nav1-2.png" alt>
            <span>未发货</span>
          </p>
        </li>
        <li class="flex-one" v-on:click="goOrders(2)">
          <p>
            <img src="../assets/u_nav1-3.png" alt>
            <span>已发货</span>
          </p>
        </li>
        <li class="flex-one" v-on:click="goOrders(-4)">
          <p>
            <img src="../assets/u_nav1-4.png" alt>
            <span>其他</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
  <div class="more-title el-card__header el-card" v-on:click="goSet()">
    <i class="icon set"></i><span class="title-font">设置</span>
    <span class="lookAll">
      <i class="sign"></i>
    </span>
  </div>
</div>
</template>

<script>
import {
  getUserInfoReq
} from '../api/apiauth'
export default {
  name: "User",
  created() {
    this.getUserInfo()
  },
  data() {
    return {
      userInfo: {}
    };
  },
  methods: {
    goOrders: function (state, event) {
      console.log('state:' + state)
      this.$router.push({
        path: "/orders",
        name: "Orders",
        params: {
          state: state
        }
      });
    },
    goSet: function (event) {
      this.$router.push({
        path: "/set",
        name: "Set",
        params: {}
      });
    },
    getUserInfo() {
      getUserInfoReq().then(res => {
        console.log(res)
        if (res.code === 200) {
          this.userInfo = res.data
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>
.more-title {
  font-size: 24px;
}

.title-font {
  font-size: 24px;
  padding-left: 15px;
  position: relative;
  bottom: 5px;
}

.title-font-right {
  position: relative;
  bottom: 0px;
}

.my_head {
  padding: 70px 0;
  background: url(../assets/my_bg.png) no-repeat center center;
  background-size: 100% 100%;
  position: relative;
  margin-bottom: 52px;
  display: block;
}

.my_head .info {
  border-radius: 10px;
  background: #fff;
  padding: 15px;
  text-align: center;
  position: absolute;
  top: 60px;
  left: 15px;
  right: 15px;
}

.my_head .info .hp {
  border-radius: 100%;
  border: 1px solid #ffab31;
  display: block;
  margin: 0 auto 10px;
  width: 120px;
  height: 120px;
}

.my_content {
  margin-top: 132px;
}

.icon {
  background: url(../assets/my_nav1.png) no-repeat center center;
  background-size: 100% 100%;
  width: 36px;
  height: 36px;
  display: inline-block;
  margin: auto;
}

.lookAll {
  float: right;
  color: #b3b3b3;
  font-size: 24px;
  padding: 5px;
}

.sign {
  background: url(../assets/icon_right.png) no-repeat center center;
  background-size: 100% 100%;
  height: 24px;
  width: 24px;
  display: inline-block;
  position: relative;
  bottom: -3px;
}

.nav_item_son {
  padding: 15px;
  background: #fff;
}

ul,
li {
  list-style: none;
}

.clearfloat {
  zoom: 1;
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
  text-align: center;
}

.my_content .my_content_info .nav_item_son ul li {
  float: left;
  text-align: center;
}

.flex-one img {
  display: block;
  margin: 0 auto 15px;
  width: 70px;
  height: 70px;
}

.set {
  background-image: url(../assets/my_nav4.png);
}
</style>
