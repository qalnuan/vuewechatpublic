<template>
<el-container>
  <el-main>
    <el-card :body-style="{ padding: '0px' }">
      <div slot="header" class="clearfix">
        <span>订单描述</span>
      </div>
      <div style="padding: 14px;">
        <span>{{productInfo.storeInfo.store_name}}</span>
      </div>
      <div style="padding: 12px;color:gray;">
        <span>规格：{{productInfo.storeInfo.price}}/{{productInfo.storeInfo.unit_name}}</span>
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }" style="margin-top:12px;">
      <div slot="header" class="clearfix">
        <span>订单联系人</span>
      </div>
      <div style="padding: 14px;font-size:20px;">
        <span style="color:red;">*</span><span>姓名:</span><input required="required" style="margin-left:15px;width:80%;border:none;" v-model="realName" />
      </div>
        <div style="padding: 14px;font-size:20px;">
          <span style="color:red;">*</span><span>电话:</span><input required="required" style="margin-left:15px;width:80%;border:none;" v-model="phoneNo" />
      </div>
    </el-card>

    <el-card :body-style="{ padding: '0px' }" style="margin-top:12px;">
      <div style="padding: 14px;font-size:20px;">
        <span>购买数量:</span>
        <el-input-number v-model="totalNum" :min="1" style="margin-left:20px;"></el-input-number>
      </div>
      <div style="padding: 14px;font-size:20px;">
        <span>备注:</span><input style="margin-left:15px;width:80%;border:none;" v-model="mark" />
      </div>
    </el-card>
  </el-main>
  <el-footer style="position:fixed; left:0px; bottom:0px; width:100%; height:auto; z-index:100;">
    <el-row :gutter="20" style="text-align:center;font-size:20px;">
      <el-col :span="16" style="background-color:black;color:white;padding:1em;">
        <div>
          <span>合计: {{totalPrice}}</span>
        </div>
      </el-col>
      <el-col :span="8" style="background-color:orange;color:white;padding:1em;">
        <div v-on:click="buyProduct()" >
          <span>微信支付</span>
        </div>
      </el-col>
    </el-row>
  </el-footer>
</el-container>
</template>

<script>
import {
  buyProductReq,
  getUserAddressReq
} from '../api/apiauth'
export default {
  name: "ConfirmOrder",
  created() {
    this.getUserAddress()
  },
  data() {
    return {
      baseURL: process.env.VUE_APP_API_URL + ':10000',
      productInfo: this.$route.params.productInfo,
      phoneNo: '',
      realName: '',
      totalNum: 1,
      addressId: 'empty',
      payType: 'weixin',
      mark: ''
    };
  },
  computed: {
    totalPrice: function () {
      return this.productInfo.storeInfo.price * this.totalNum;
    }
  },
  methods: {
    buyProduct: function () {
      let params = {
        couponId:0,
        addressId: this.addressId,
        payType: this.payType,
        useIntegral: 0,
        mark: this.mark,
        phoneNo: this.phoneNo,
        realName: this.realName,
        payPrice: this.totalPrice,
        totalNum: this.totalNum,
        productId: this.productInfo.id
      }
      buyProductReq(params).then(res => {
        console.log(JSON.stringify(res))
        if (res.code === 200 && res.msg !== 'empty') {
        }
      }).catch(error => {
        console.log(error)
      })
    },
    getUserAddress: function () {
      getUserAddressReq().then(res => {
        console.log(JSON.stringify(res))
        if (res.code === 200 && res.msg !== 'empty') {
          this.phoneNo = res.data.phone
          this.realName = res.data.real_name
          this.addressId = res.data.id
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
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

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 100%;
}

ul,
li {
  list-style: none;
}
</style>
