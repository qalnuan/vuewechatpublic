<!-- 地址管理页面 -->
<template>
<div>
  <bottom-button label="新增地址" v-on:click="addAddress()"></bottom-button>
</div>
</template>

<script>

export default {
  name: "Address",
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {
    addAddress: function (event) {
      this.$router.push({
        path: "/addaddress",
        name: "AddAddress",
        params: {}
      });
    }
  }
}
</script>

<style scoped>
</style>
