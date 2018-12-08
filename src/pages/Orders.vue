<template>
<div>
  <div class="order_title">
    <ul class="flex-box">
      <li @click="order_state(-1)" type="-1" class="flex-one">
        <p v-bind:class="{ cur: state==-1 }">全部</p>
      </li>
      <li @click="order_state(2)" type="2" class="flex-one">
        <p v-bind:class="{ cur: state==2 }">待发货</p>
      </li>
      <li @click="order_state(22)" type="22" class="flex-one">
        <p v-bind:class="{ cur: state==22 }">发货中</p>
      </li>
      <li @click="order_state(3)" type="3" class="flex-one">
        <p v-bind:class="{ cur: state==3 }">已发货</p>
      </li>
      <li @click="order_state(-2)" type="-2" class="flex-one">
        <p v-bind:class="{ cur: state==-2 }">其他</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: "Orders",
  data() {
    return {
      state: this.$route.params.state
    };
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    order_state(tab, event) {
      console.log(tab, event);
      this.state = tab
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
</style>
