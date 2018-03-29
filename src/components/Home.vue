<template>
    <div class="header">
      <div class="container">
        <div class="header_menu">
          <div class="header_menu_wrapp">
            <div class="logo"><img src="../assets/logo.png" @click="logoMobile =! logoMobile">
              <transition name="down">
                <div class="logo-nav" v-show="logoMobile">
                  <ul>
                    <li><a href="#about">about us</a></li>
                    <li><a href="#features">company</a></li>
                    <li><a href="#product">our process</a></li>
                    <li><a href="#specials">services</a></li>
                    <li><a href="#">contact us</a></li>
                    <li><a href="#">f.a.q.</a></li>
                  </ul>
                </div>
              </transition>
            </div>
            <div class="navigation">
              <nav>
                <ul>
                  <li><a href="#">home</a></li>
                  <li><a href="#" @click="subMenu = !subMenu">pages <i class="fa fa-sort-desc" aria-hidden="true"></i></a>
                    <transition name="down">
                      <div class="sub-navigation" v-show="subMenu">
                        <ul>
                          <li><a href="#">1</a></li>
                          <li><a href="#">2</a></li>
                          <li><a href="#">3</a></li>
                          <li><a href="#">4</a></li>
                          <li><a href="#">5</a></li>
                          <li><a href="#">6</a></li>
                        </ul>
                      </div>
                    </transition>
                  </li>
                  <li><a href="#" @click="subMenu2 = !subMenu2">elements<i class="fa fa-sort-desc" aria-hidden="true"></i></a>
                    <transition name="down">
                      <div class="sub-navigation-2" v-show="subMenu2">
                        <ul>
                          <li><a href="#">2kmri</a></li>
                          <li><a href="#">ekvomnyw</a></li>
                          <li><a href="#">0mvbufknfp</a></li>
                          <li><a href="#">c,oemr383n</a></li>
                          <li><a href="#">3i3jfjni</a></li>
                          <li><a href="#">l0,nqwertyqtreq</a></li>
                        </ul>
                      </div>
                    </transition>
                  </li>
                  <li><a href="#">product</a></li>
                  <li><a href="#">blog</a></li>
                  <li><a href="#">work</a></li>
                  <li>
                      <button id="show-modal" @click="showModal = !showModal">start a project</button>
                      <transition name="modal">
                        <div class="modal-mask" v-show="showModal">
                          <div class="modal-wrapper">
                            <div class="modal-container">
                              <div class="modal-header">
                                <slot name="header">
                                  {{msg | Uppercase}}
                                  <span @click="showModal = false">X</span>
                                </slot>
                              </div>
                              <div class="modal-body">
                                <slot name="body">
                                  <form action="">
                                    <input type="text" placeholder="Email" required><br>
                                    <input type="password" placeholder="Password" required><br>
                                    <textarea name="" id="" cols="5" rows="10" placeholder="Write your message"></textarea><br>
                                    <button type="submit">SEND</button>
                                  </form>
                                </slot>
                              </div>
                            </div>
                          </div>
                        </div>
                      </transition>
                  </li>
                  <button class="mob-click" @click="mobileMenu = !mobileMenu"><img src="../assets/menu.png" alt=""></button>
                  <transition name="slide">
                    <div class="mobile" v-show="mobileMenu">
                        <span><x-icon @click="mobileMenu = false" class="custom-class"></x-icon></span>
                        <div class="mobile-menu">
                          <a href="#">Home</a>
                          <a href="#about">About Us</a>
                          <a href="#product">Product</a>
                          <a href="#specials">Specials</a>
                          <a href="#elements">Elements</a>
                          <a href="#work">Work</a>
                          <a href="#support">Support</a>
                          <a href="#contacts">Contacts</a>
                        </div>
                        <div class="mobile-nav">
                          <h3>Developer By Dmitriy Popov</h3>
                          <ul>
                            <li>
                              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                            </li>
                            <li>
                              <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            </li>
                            <li>
                              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            </li>
                            <li>
                              <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
                            </li>
                          </ul>
                        </div>
                    </div>
                  </transition>
                </ul>
              </nav>
            </div>
          </div>
          <div class="header_mobile_menu_wrapp">
            <button @click="mobileMenu = !mobileMenu"><img src="../assets/menu.png" alt=""></button>
            <transition name="slide">
              <div class="mobile" v-show="mobileMenu">
                  <span><x-icon @click="mobileMenu = false" class="custom-class"></x-icon></span>
                  <div class="mobile-menu">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Product</a>
                    <a href="#">Specials</a>
                    <a href="#">Elements</a>
                    <a href="#">Work</a>
                    <a href="#">Support</a>
                    <a href="#">Contacts</a>
                  </div>
                  <div class="mobile-nav">
                    <h3>Developer By Dmitriy Popov</h3>
                    <ul>
                      <li>
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                      </li>
                      <li>
                        <a href="#"><i class="fa fa-github" aria-hidden="true"></i></a>
                      </li>
                    </ul>
                  </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="header_wrapper" @click="subMenu2 = false" v-on:click="mobileMenu = false">
          <div class="header_wrapper_item" @mouseover="logoMobile = false" @click="subMenu = false">
            <h2>Get Some <br> Fresh AI</h2>
            <p>Fjord - Modern Landing Page</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { XIcon } from 'vue-feather-icons'
export default {
  name: 'Home',
  components: { XIcon },
  data () {
    return {
      msg: 'Welcome to my Vue.js App',
      logoMobile: false,
      subMenu: false,
      subMenu2: false,
      showModal: false,
      mobileMenu: false
    }
  },
  filters: {
   	Uppercase (value) {
  			return value.toUpperCase()
   	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,700,900');
h1, h2 {
  font-weight: normal;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1170px;
  }
}
.header {
  background: url(../assets/backg.png) no-repeat center center;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 109vh;
}
.header_menu {
  position: relative;
}
.header_menu_wrapp {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 30px 0;
  transition: .3s;
}
.logo {
	position: relative;
	width: 25%;
}
.logo img {
	cursor: pointer;
}
.logo-nav {
	position: absolute;
	background-color: black;
	width: 40%;
	color: white;
	padding: 0 10px 15px 10px;
}
.logo-nav ul {
	margin: 0;
	padding: 0;
}
.logo-nav ul li a {
	 text-transform: uppercase;
	 text-decoration: none;
	 font-size: 12px;
	 font-family: 'Montserrat', sans-serif;
	 font-weight: 400;
	 color: #eee;
	 transition: .4s;
	 cursor: pointer;
}
.logo-nav ul li a:hover {
	text-decoration: none;
	color: white;
}
.logo-nav ul li {
	display: block;
	padding: 18px 0 0 10px;
}
.navigation {
  position: relative;
}
nav ul {
  margin: 0;
  padding: 0;
}
nav ul li {
	display: inline;
	padding-left: 25px;
  position: relative;
}
nav ul li a {
	text-decoration: none;
	text-transform: uppercase;
	font-size: 13px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	color: gray;
	cursor: pointer;
	transition: .4s;
	position: relative;
}
nav ul li a i {
	font-size: 10px;
	position: absolute;
	top: 2px;
	padding-left: 3px;
}
nav ul li a:hover {
	color: black;
}
nav ul button {
	border: 0;
	outline: none;
	background: none;
	padding-left: 20px;
	cursor: pointer;
}
nav ul li button {
	border: 0;
	outline: 0;
	background-color: black;
	border-radius: 4px;
	color: white;
	text-transform: uppercase;
	font-weight: 500;
	cursor: pointer;
	padding: 10px 16px;
}
.sub-navigation {
	position: absolute;
	left: 0;
	background-color: black;
	width: auto;
	color: white;
	padding: 0 20px 15px 20px;
}
.sub-navigation ul {
	margin: 0;
	padding: 0;
}
.sub-navigation ul li a {
	text-transform: uppercase;
	text-decoration: none;
	font-size: 12px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	color: #eee;
	transition: .4s;
	cursor: pointer;
}
.sub-navigation ul li a:hover {
	text-decoration: none;
	color: white;
}
.sub-navigation ul li {
	display: block;
	padding: 10px 10px;
}
.sub-navigation-2 {
	position: absolute;
	right: 0%;
	background-color: black;
	width: auto;
	color: white;
	padding: 0 20px 15px 20px;
}
.sub-navigation-2 ul {
	margin: 0;
	padding: 0;
}
.sub-navigation-2 ul li a {
	text-transform: uppercase;
	text-decoration: none;
	font-size: 12px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 400;
	color: #eee;
	transition: .4s;
	cursor: pointer;
}
.sub-navigation-2 ul li a:hover {
	text-decoration: none;
	color: white;
}
.sub-navigation-2 ul li {
	display: block;
	padding: 18px 0 0 10px;
}
.header_wrapper {
	width: 100%;
}
.header_wrapper_item {
	text-transform: uppercase;
	padding: 40px 0 0 140px
}
.header_wrapper_item h2 {
	font-family: 'Montserrat', sans-serif;
	font-size: 72px;
	font-weight: 100;
  color: black;
	margin: 0;
}
.header_wrapper_item p {
	margin: 0;
	font-size: 12px;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	color: black;
}
.pad-be {
  padding: 0 80px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
  color: black;
}
.modal-header h3 {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-top: 0;
  color: #42b983;
}
.modal-header span {
  position: absolute;
  right: 5%;
  cursor: pointer;
}
.modal-body {
  margin: 20px 0;
}
.modal-body form {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
}
.modal-body input {
  border: 1px solid #eee;
  border-radius: 5px;
  width: 100%;
  margin: 0 0 20px 0;
  padding: 10px 0;
}
.modal-body textarea {
  border: 1px solid #eee;
  border-radius: 5px;
  margin: 0 0 20px 0;
  padding: 10px 0;
  width: 100%;
}
.modal-body button {
  outline: none;
  border: none;
}
.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.mobile {
  position: fixed;
  right: 0;
  width: auto;
  height: 100%;
  background-color: black;
  padding: 100px 40px 0 40px;
  display: flex;
  flex-direction: column;
  text-align: right;
  font-family: 'Montserrat', sans-serif;
  z-index: 30;
}
.mobile span {
  position: absolute;
  top: 2%;
  right: 5%;
  color: white;
  font-size: 25px;
  cursor: pointer;
}
.mobile-menu a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 10px 0;
  font-weight: 400;
}
.mobile-menu button {
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 16px;
  background: white;
  border: none;
  outline: none;
  color: black;
  margin: 0 auto;
  display: block;
}
.mobile-nav {
  text-align: right;
  padding: 40px 0 0 0;
}
.mobile-nav h3 {
  color: white;
  font-size: 14px;
  font-weight: 400;
}
.mobile-nav ul {
  margin: 0;
  padding: 0;
}
.mobile-nav ul li {
  padding: 0 24px;
  display: inline;
}
.mobile-nav ul li a i {
  color: white;
  font-size: 25px;
}
.down-enter-active {
  transition: all .4s ease;
}
.down-leave-active {
	transition: all 0.8s cubic-bezier(0.4, 0, 0, 1);
}
.down-enter {
  transform: translateY(-30px);
}
.down-leave-to {
	transform: translateY(-30px);
  opacity: 0;
}
.component-fade-enter-active {
  transition: all .4s ease;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
.slide-enter-active {
  transition: all .4s ease;
}
.slide-leave-active {
	transition: all 0.8s cubic-bezier(0.4, 0, 0, 1);
}
.slide-enter {
  transform: translateX(278px);
}
.slide-leave-to {
  transform: translateX(370px);
}
.header_mobile_menu_wrapp {
  display: none;
}
.header_mobile_menu_wrapp button {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  position: fixed;
  top: 5%;
  left: 5%;
  z-index: 100;
}
@media only screen and (max-width : 1199px) {
  .logo {
    position: relative;
    width: 23%;
  }
}
@media only screen and (max-width : 991px) {
  .logo {
    width: 0%;
  }
  .logo-nav {
    display: none;
  }
  nav ul li button {
    display: none;
  }
}
@media only screen and (max-width : 768px) {
  .header_menu_wrapp {
    display: none;
  }
  .header_mobile_menu_wrapp {
    display: block;
  }
  .header_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%,-50%);
  }
  .header_wrapper_item {
    padding: 0;
    text-align: center;
  }
  .mobile {
    right: 0;
    top: 0;
    height: 100%;
    padding: 0 40px;
    justify-content: center;
  }
}
</style>
