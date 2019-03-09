<!-- 地址管理页面 -->
<template>
<div>
  <bottom-button label="新增地址" v-on:click="addAddress()"></bottom-button>
</div>
</template>

<script>
import request from '../utils/request'
export default {
  name: "Address",
  created() {
    this.getUserAddressList()
  },
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
    },
    getUserAddressList() {
      
      request({
        url: '/routine/auth_api/user_address_list',
        method: 'post',
        params: {}
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
</style>
