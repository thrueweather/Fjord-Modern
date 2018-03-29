// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCarousel from 'vue-carousel'

Vue.use(VueCarousel)


Vue.config.productionTip = false

// Vue.component('MobileMenu',{
// 	data () {
// 		return{mobileMenu: false}
// 	},
// 	template: '<div class="mobile" v-show="mobileMenu"><div class="mobile-menu"><a href="#">Home</a><a href="#">About Us</a><a href="#">Product</a><a href="#">Specials</a><a href="#">Elements</a><a href="#">Work</a><a href="#">Support</a><a href="#">Contacts</a></div><div class="mobile-nav"><h3>Developer By Dmitriy Popov</h3><ul><li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-github" aria-hidden="true"></i></a></li></ul></div></div>'
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  //template: '<div><MobileMenu></MobileMenu></div>'
})
