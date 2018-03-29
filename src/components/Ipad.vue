<template>
	<div class="ipad" @click="mobileMenu = false" id="elements">
    <div class="container">
      <div class="ipad-title">
        <h3>This will change everything</h3>
        <p>Your eCommerce website is just the start. Whether you are an established business or on the brink of a new idea, Squarespace gives you the tools to take your business from online store to recognized brand.</p>
        <button @click="showModal = !showModal">get started</button>
      </div>
      <div class="ipad-photo">
        <img src="../assets/ipad.png">
      </div>
    </div>
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
                  <textarea cols="5" rows="10" placeholder="Write your message"></textarea><br>
                  <button type="submit">SEND</button>
                </form>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
	export default {
		name: 'ipad',
		data () {
			return {
        msg: 'I`ts my Vue.js App',
				mobileMenu: false,
        showModal: false
			}
		},
    filters: {
      Uppercase (value) {
          return value.toUpperCase()
      }
    }
	}
</script>

<style>
.ipad {
  background-color: black;
  color: white;
  position: relative;
  overflow: visible;
  padding: 90px 0;
}
.ipad-title {
  width: 60%;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
}
.ipad-title h3 {
  font-size: 72px;
  font-weight: 100;
  line-height: 80px;
  margin: 0;
}
.ipad-title p {
  font-size: 14px;
  font-weight: 300;
  width: 60%;
  margin: 0;
  padding: 40px 0 90px 0;
  color: white;
}
.ipad-title button {
  border: none;
  outline: none;
  background: #26e6e6;
  padding: 10px 35px;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 100;
  color: black;
  cursor: pointer;
  transition: .4s;
}
.ipad-title button:hover {
  background: white;
}
.ipad-photo {
  position: absolute;
  top: 30%;
  right: 0;
  width: 45%;
}
.ipad-photo img {
  width: 100%;
  height: 550px;
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
@media only screen and (max-width : 991px) {
  .ipad-title {
    width: 100%;
  }
  .ipad-photo img {
    height: 400px;
  }
}
@media only screen and (max-width : 768px) {
  .ipad-photo {
    display: none;
  }
  .ipad-title h3 {
    font-size: 62px;
  }
  .ipad-title p {
    width: 100%;
  }
}
@media only screen and (max-width : 320px) {
  .ipad-title h3 {
    font-size: 55px;
  }
}
</style>