<template>
	<div class="prices" @click="mobileMenu = false">
	<div class="container">
	<div class="prices-wrapp">
	<div class="prices-wrapp_item">
	<span>becimner</span>
	<h2>$4.99</h2>
	<p>Alice wondered a little at this, but she was too much in awe of the Queen to disbelieve it. 'I'll try it when I go home,' she thought to herself, 'the next time I'm a little late for dinner.'</p>
	<button>get started</button>
	</div>
	<div class="prices-wrapp_item">
	<span>standart</span>
	<h2>$14.99</h2>
	<p>Alice wondered a little at this, but she was too much in awe of the Queen to disbelieve it. 'I'll try it when I go home,' she thought to herself, 'the next time I'm a little late for dinner.'</p>
	<button>get started</button>
	</div>
	<div class="prices-wrapp_item">
	<span>pro</span>
	<h2>$99.99</h2>
	<p>Alice wondered a little at this, but she was too much in awe of the Queen to disbelieve it. 'I'll try it when I go home,' she thought to herself, 'the next time I'm a little late for dinner.'</p>
	<button>get started</button>
	</div>
	</div>
	</div>
	</div>	
</template>

<script>
	export default {
		name: 'prices',
		data () {
			return {
				mobileMenu: false,
			}
		}
	}
</script>

<style scoped>
.prices {
  background-color: #f5f6f8;
}
.prices-wrapp {
  display: flex;
  text-align: center;
  padding: 80px 40px;
}
.prices-wrapp_item {
  font-family: 'Montserrat', sans-serif;
  transition: .4s;
  padding: 20px 40px;
  color: black;
  cursor: pointer;
}
.prices-wrapp_item span {
  text-transform: uppercase;
  font-size: 12px;
}
.prices-wrapp_item h2 {
  font-weight: 900;
  font-size: 50px;
}
.prices-wrapp_item p {
  color: gray;
}
.prices-wrapp_item button {
  border: none;
  outline: none;
  background: none;
  padding: 12px 37px;
  border-radius: 30px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 100;
  cursor: pointer;
  transition: .4s;
}
.prices-wrapp_item:hover > button {
  background: #26e6e6;
}
.prices-wrapp_item:hover > p {
  color: white;
}
.prices-wrapp_item:hover {
  background-color: black;
  color: white;
}	
@media only screen and (max-width : 992px) {
.prices-wrapp {
    flex-direction: column;
  }
}
@media only screen and (max-width : 480px) {
.prices-wrapp {
    padding: 80px 0;
  }
}
@media only screen and (max-width : 320px) {
	.prices-wrapp_item {
		margin: 0;
	}
}
</style>