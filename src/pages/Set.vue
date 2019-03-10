<!-- 设置页面 -->
<template>
<div>
  <div class="more-title el-card__header el-card" v-on:click="goAddress">
    <i class="icon address"></i><span class="title-font">地址管理</span>
    <span class="lookAll">
      <i class="sign"></i>
    </span>
  </div>
  <div class="more-title el-card__header el-card" v-on:click="goInfo">
    <i class="icon info"></i><span class="title-font">版本信息</span>
    <span class="lookAll">
      <i class="sign"></i>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: "Set",
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    goAddress: function (event) {
      this.$router.push({
        path: "/address",
        name: "Address",
        params: {}
      });
    },
    goInfo: function (event) {
      this.$router.push({
        path: "/info",
        name: "Info",
        params: {}
      });
    }
  }
}
</script>

<style scoped>
.address {
  background-image: url(../assets/my_nav5.png);
}

.info {
  background-image: url(../assets/my_nav6.png);
}
</style>
