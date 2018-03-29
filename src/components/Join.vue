<template>
	<div class="join" @click="mobileMenu = false">
      <div class="container">
        <h2>Join over 1 million customers</h2>
      </div>
    </div>
</template>

<script>
	export default {
		name: 'join',
		data () {
			return {
				mobileMenu: false
			}
		}
	}
</script>

<style scoped>
.join {
  background-color: white;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: black;
  padding: 60px 0;
}
.join h2 {
  margin: 0;
  font-size: 72px;
  font-weight: 100;
}
@media only screen and (max-width : 768px) {
  .join h2 {
    font-size: 38px;
  }
}
</style>