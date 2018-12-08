<!-- 增加地址页面 -->
<template>
<div>
  <bottom-button label="保存" v-on:click="saveAddress()"></bottom-button>
</div>
</template>

<script>
export default {
  name: "AddAddress",
  data() {
    return {
      options3: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Dalian',
          label: '大连'
        }]
      }],
      province: ''
    }
  },

  components: {},

  computed: {},

  mounted: {},

  methods: {}
}
</script>

<style scoped>
</style>
