<template>
	<div class="platform" @click="mobileMenu = false">
      <div class="container">
        <div class="platform-title" id="support">
          <h3>Platform Features</h3>
          <h4>At first, for some time, I was not able to answer him one word; but as he had taken me in his arms I held fast by him, or I should have fallen to the ground.</h4>
        </div>
        <div class="platform-wrapp">
          <div class="platform-wrapp_item">
            <div><img src="../assets/dashboard.png"></div>
            <div>
              <h4>Dashboard</h4>
              <p>Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
            </div>
          </div>
          <div class="platform-wrapp_item">
            <div><img src="../assets/diss.png"></div>
            <div>
                <h4>Discussions</h4>
                <p>Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
            </div>
          </div>
          <div class="platform-wrapp_item">
            <div><img src="../assets/mobile.png"></div>
            <div>
                <h4>Mobile Apps</h4>
                <p>Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
            </div>
          </div>
        </div>
        <div class="platform-wrapp">
          <div class="platform-wrapp_item">
            <div><img src="../assets/fully.png"></div>
            <div>
                <h4>Fully Cutomizable</h4>
                <p>Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
            </div>
          </div>
          <div class="platform-wrapp_item">
            <div><img src="../assets/eco.png"></div>
            <div>
                <h4>Ecommerce</h4>
                <p>Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
            </div>
          </div>
          <div class="platform-wrapp_item">
            <div><img src="../assets/stat.png"></div>
            <div>
                <h4>Statistcs</h4>
                <p>Looking cautiously round, to ascertain that they were not overheard, the two hags cowered nearer to the fire, and chuckled heartily.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: 'platform',
		data () {
			return {
				mobileMenu: false
			}
		}
	}
</script>

<style scoped>
.platform {
  background-color: #f5f6f8;
  padding: 250px 0 0 0;
}
.platform-title {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  padding: 0 0 40px 0;
}
.platform-title h3 {
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: black;
}
.platform-title h4 {
  font-size: 18px;
  font-weight: 500;
  width: 90%;
  margin: auto;
  color: black;
}
.platform-wrapp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 0;
}
.platform-wrapp_item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
}
.platform-wrapp_item img {
  margin-right: 20px;
}
.platform-wrapp_item h4 {
  color: black;
  margin: 0;
}
.platform-wrapp_item p {
  width: 90%;
}	
@media only screen and (max-width : 991px) {
  .platform {
    padding: 80px 0 0 0;
  }
  .platform-wrapp {
    flex-direction: column;
  }
  .platform-wrapp_item {
    margin: 10px 0;
  }
}
</style>