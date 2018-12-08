<!-- 底部按钮 -->
<template>
<div class="botoperation" v-on:click="$emit('click')">
  <p>{{label}}</p>
</div>
</template>

<script>
export default {
  name: "BottomButton",
  props:['label'],
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
.botoperation {
  height: 100px;
  line-height: 100px;
  padding: 10px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f5f5f5;
  z-index: 99;
}

.botoperation>p {
  background: #ffab31;
  color: #fff;
  height: 80px;
  line-height: 80px;
  border-radius: 40px;
}
</style>
