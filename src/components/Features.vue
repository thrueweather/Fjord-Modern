<template>
	<div class="features" @click="mobileMenu = false" id="about">
      <div class="container">
        <div class="features-wrapp">
          <div class="features-wrapp_item">
            <img src="../assets/mail.png">
            <h3>GET A CUSTOMIZED <br> EMAIL ADDRESS AND MORE</h3>
            <p>Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
            <h4>LEARN MORE</h4>
          </div>
          <div class="features-wrapp_item pad-be">
            <img src="../assets/edit.png">
            <h3>40 MILLION HIGH <br> QUALITY IMAGES</h3>
            <p>At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground.</p>
            <h4>LEARN MORE</h4>
          </div>
          <div class="features-wrapp_item">
            <img src="../assets/сard.png">
            <h3>CREATE A SIMPLE LOGO <span style="padding: 6px 12px;border-radius: 12px;background: #26e6e6;color: white; font-size: 13px;">NEW</span></h3>
            <p>She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday.</p>
            <h4>GET STARTED</h4>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
	name: 'Features',
	data () {
		return {

		}
	}
}	
</script>

<style scoped>
.features {
  background-color: white;
  padding-bottom: 80px;
}
.features-wrapp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.features-wrapp_item {
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
}
.features-wrapp_item h3 {
  font-size: 14px;
  font-weight: 500;
  color: black;
  margin: 20px 0 20px 0;
}
.features-wrapp_item p {
  margin: 0;
}
.features-wrapp_item h4 {
  font-weight: 500;
  color: black;
}
@media only screen and (max-width : 991px) {
  .features-wrapp {
    flex-direction: column;
  }
}
</style>