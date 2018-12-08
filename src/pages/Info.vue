<!-- 版本信息页面 -->
<template>
<div>
  <div class="about-logo">
  </div>
  <div class="about-li">
    <a>版本信息 <span>3.2.432</span></a>
    <a id="relogin" >重新登陆 </a>
  </div>
</div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}
</script>

<style scoped>
.about-logo {
  padding: 60px 0;
  width: 400px;
  height: 400px;
  margin: 0 auto;
  background: url(../assets/logo.png) no-repeat center center;
  background-size: 320px;
}

.about-li {
  font-size: 36px;
  padding: 0 20px;
}

.about-li a {
  display: block;
  border-bottom: 1px solid #ddd;
  padding: 12px;
}

.about-li span {
  color: #999;
  float: right;
}
</style>
