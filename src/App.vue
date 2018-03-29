<template>
  <div id="app">
	<router-view/>
    <features/>
    <iphone/>
    <beautiful/>
    <ipad/>
    <platform/>
    <quotes/>
    <gallery/>
    <join/>
    <prices/>
    <footnav/>
  </div>
</template>

<script>
import features from './components/Features.vue'
import iphone from './components/Iphone.vue'
import beautiful from './components/Beautiful.vue'
import ipad from './components/Ipad.vue'
import platform from './components/Platform.vue'
import quotes from './components/Quotes.vue'
import gallery from './components/Gallery.vue'
import join from './components/Join.vue'
import prices from './components/Prices.vue'
import footnav from './components/Footer.vue'
export default {
  name: 'App',
  data () {
  	return {
  		
  	}
  },
  components: {
  	features,
  	iphone,
  	beautiful,
  	ipad,
  	platform,
  	quotes,
  	gallery,
  	join,
  	prices,
  	footnav
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}
.mobile {
  position: fixed;
  top: 0;
  right: 0;
  width: auto;
  height: 100%;
  background-color: black;
  padding: 100px 40px 0 40px;
  display: flex;
  flex-direction: column;
  text-align: right;
  font-family: 'Montserrat', sans-serif;
  z-index: 15;
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
</style>

























































































































