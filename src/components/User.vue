<template>
<div style="width:100%;height:100%;background-color: #f5f5f5;">
  <div class="my_head">
    <div class="info">
      <img class="hp" src="https://speed.lhs11.com/fxc/img/tou.png" alt>
      <p class="name">这是一个很长的名字</p>
    </div>
  </div>

  <div class="my_content" style="margin-top:68px;">
    <div class="more-title el-card__header el-card">
      <a href="javascript:;" class="nav_item">
          <i class="icon"></i>我的订单
          <span class="lookAll">
            查看全部
            <i class="sign"></i>
          </span>
        </a>
    </div>
      <div class="nav_item_son">
        <ul class="clearfloat flex-box">
          <li class="flex-one">
            <p>
              <img src="https://speed.lhs11.com/fxc/img/u_nav1-1.png" alt>
              <span></span>
            </p>待支付
          </li>
          <li class="flex-one">
            <p>
              <img src="https://speed.lhs11.com/fxc/img/u_nav1-2.png" alt>
              <span></span>
            </p>待发货
          </li>
          <li class="flex-one">
            <p>
              <img src="https://speed.lhs11.com/fxc/img/u_nav1-3.png" alt>
              <span></span>
            </p>已发货
          </li>
          <li class="flex-one">
            <p>
              <img src="https://speed.lhs11.com/fxc/img/u_nav1-4.png" alt>
              <span></span>
            </p>其他
          </li>
        </ul>
      </div>
    </div>
    <div class="my_content_info">
      <a href="javascript:set()" class="nav_item">
          <i class="icon set"></i>设置
          <span class="lookAll">
            <i class="sign"></i>
          </span>
        </a>
    </div>
</div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.my_head {
  padding: 70px 0;
  background: url(https://speed.lhs11.com/fxc/img/my_bg.png) no-repeat center center;
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
  width: 60px;
  height: 60px;
}

</style>
