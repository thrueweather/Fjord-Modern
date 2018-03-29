<template>
	<div class="quotes" @click="mobileMenu = false">
    <div class="container">
      <carousel>
        <slide>
          <div class="quotes-item" v-bind:title="subtitle">
            <div style="background-color: white; padding: 12px">It was some time before he obtained any answer, and the reply, when made, was unpropitious.</div>
          </div>
        </slide>
        <slide>
          <div class="quotes-item" v-bind:title="subtitle">
            <div style="background-color: white; padding: 12px">It was some time before he obtained any answer, and the reply, when made, was unpropitious.</div>
          </div>
        </slide>
        <slide>
          <div class="quotes-item" v-bind:title="subtitle">
            <div style="background-color: white; padding: 12px">It was some time before he obtained any answer, and the reply, when made, was unpropitious.</div>
          </div>
        </slide>
        <slide>
          <div class="quotes-item" v-bind:title="subtitle">
            <div style="background-color: white; padding: 12px">It was some time before he obtained any answer, and the reply, when made, was unpropitious.</div>
          </div>
        </slide>
        <slide>
          <div class="quotes-item" v-bind:title="subtitle">
            <div style="background-color: white; padding: 12px">It was some time before he obtained any answer, and the reply, when made, was unpropitious.</div>
          </div>
        </slide>
        <slide>
          <div class="quotes-item" v-bind:title="subtitle">
            <div style="background-color: white; padding: 12px">It was some time before he obtained any answer, and the reply, when made, was unpropitious.</div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'
	export default {
		name: 'quotes',
		data () {
			return {
				mobileMenu: false,
				view: 'v-a',
     		subtitle: 'Made by Vue.js'
			}
		},
    components: {
      Carousel,
      Slide
    }
	}
</script>

<style scoped>
.quotes {
  background-color: #f5f6f8;
  padding: 20px 0;
  text-align: center;
  flex-direction: row;
}
.quotes-item {
  padding: 0 15px;
  margin: auto;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  font-size: 38px;
  color: black;
}
.carusel-wrapp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.quotes input {
  cursor: pointer;
  margin: 30px 15px 0 0;
  color: yellow;
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
@media only screen and (max-width : 992px) {
  .quotes-item {
    padding: 0;
    font-size: 30px;
  }
}
@media only screen and (max-width : 768px) {
  .quotes-item {
    font-size: 26px;
  }
}
</style>