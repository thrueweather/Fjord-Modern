<template>
	<div class="beautiful" @click="mobileMenu = false" id="specials">
      <div class="beautiful-title">
        <div class="container">
          <h2>Build it beautiful</h2>
          <p>Sometimes bold ideas don't require a full website. That's why Cover Pages can be used to convey a single idea in a beautiful way.</p>
        </div>
      </div>
      <div class="beautiful-wrapp">
        <div class="container beautiful-wrapp_row">
          <div class="beautiful-wrapp_item">
            <h3>Dummy Content</h3>
            <p>{{ beautiful_item }}</p>
            <h4>Learn More</h4>
          </div>
          <div class="beautiful-wrapp_item pad-be">
            <h3>Parallax Sections</h3>
            <p>{{ beautiful_item }}</p>
            <h4>Learn More</h4>
          </div>
          <div class="beautiful-wrapp_item">
            <h3>Clean Code</h3>
            <p>{{ beautiful_item }}</p>
            <h4>Learn More</h4>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: 'beautiful',
		data () {
			return {
				mobileMenu: false,
				beautiful_item: 'Can make website design much easier and with our shortcode manager you can now create them even faster. Choose your desired shortcode and the manager will insert it for you.'
			}
		}
	}
</script>

<style scoped>
.beautiful {
  background-color: white;
}
.beautiful-title {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  padding: 80px 0;
}
.beautiful-title h2 {
  font-size: 72px;
  font-weight: 100;
  color: black;
  margin: 0 0 40px 0;
}
.beautiful-title p {
  margin: auto;
  width: 41%;
  color: black;
  font-weight: 500;
}
.beautiful-wrapp {
  background-color: #f5f6f8;
  padding: 80px 0;
}
.beautiful-wrapp_row {
  display: flex;
  flex-direction: row;
  justify-content: srace-between;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
}
.beautiful-wrapp_item h3 {
  font-weight: 500;
  color: black;
  font-size: 16px;
}
.beautiful-wrapp_item p {
  color: #232323;
}
.beautiful-wrapp_item h4 {
  font-weight: 500;
  text-transform: uppercase;
  color: black;
  font-size: 12px;
}
@media only screen and (max-width : 991px) {
  .beautiful-wrapp_row {
    flex-direction: column;
    text-align: center;
  }
  .beautiful-title h2 {
    font-size: 66px;
  }
  .beautiful-title p {
    width: 100%;
  }
}
</style>