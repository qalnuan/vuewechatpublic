import BottomButton from './BottomButton.vue'
import SvgIcon from '@/components/SvgIcon' // svg组件

const AllComponents = {
  install: function (Vue) {
    Vue.component('bottom-button', BottomButton)
    Vue.component('svg-icon', SvgIcon)
  }
}
export default AllComponents
