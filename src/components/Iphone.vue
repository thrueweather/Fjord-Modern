<template>
	<div class="iphone" @click="mobileMenu = false" id="product">
      <div class="container">
        <div class="iphone-wrapp">
          <div class="iphone-wrapp_item-iphone">
            <img src="../assets/iphone.png">
          </div>
          <div class="iphone-wrapp_item_block">
            <div class="iphone-wrapp_item_block-content">
              <div><img src="../assets/website.png"></div>
              <div>
                <h3>Create a beautiful website.</h3>
                <p>Whether you want to create a blog, eCommerce store, portfolio, or all of the above, you can express your idea with a website powered by our elegant yet intuitive platform.</p>
              </div>
            </div>
            <div class="iphone-wrapp_item_block-content">
              <div><img src="../assets/website.png"></div>
              <div>
                <h3>Make your our business.</h3>
                <p>From goods to services, every business needs a space online to bring in customers. </p>
              </div>
            </div>
            <div class="iphone-wrapp_item_block-content">
              <div><img src="../assets/website.png"></div>
              <div>
                <h3>Be artist</h3>
                <p>An artist should always have control over their creative process</p>
              </div>
            </div>
            <button>get started</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: 'iphone',
		data () {
			return {
				mobileMenu: false,
        showModal: false
			}
		}
	}
</script>

<style scoped>
.iphone {
  background-color: #26e6e6;
  padding: 40px 0;
}
.iphone-wrapp {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
}
.iphone-wrapp_item-iphone {
  width: 70%;
}
.iphone-wrapp_item-iphone img {
  width: 100%;
}
.iphone-wrapp_item_block {
  position: absolute;
  top: 6%;
  right: 5%;
  background-color: white;
  border-radius: 3px;
  width: 30%;
  padding: 0;
}
.iphone-wrapp_item_block-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
  padding: 20px 5px;
}
.iphone-wrapp_item_block-content img {
  padding: 0 20px 0 20px;
}
.iphone-wrapp_item_block-content h3 {
  font-size: 18px;
  font-weight: 500;
  color: black;
  margin: 0;
}
.iphone-wrapp_item_block-content p {
  font-size: 13px;
}
.iphone-wrapp_item_block button {
  border: none;
  outline: none;
  background-color: black;
  width: 100%;
  color: white;
  padding: 20px 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
}
@media only screen and (max-width : 1199px) {
  .iphone-wrapp_item_block {
    position: relative;
  }
}
@media only screen and (max-width : 991px) {
  .iphone-wrapp_item-iphone {
    width: 50%;
  }
  .iphone-wrapp_item_block {
    width: 50%;
  }
}
@media only screen and (max-width : 768px) {
  .iphone-wrapp_item-iphone {
    width: 100%;
  }
  .iphone-wrapp_item_block {
    width: 100%;
  }
}
@media only screen and (max-width : 480px) {
  .iphone-wrapp {
    flex-direction: column;
  }
  .iphone-wrapp_item_block {
    right: 0;
  }
}
</style>