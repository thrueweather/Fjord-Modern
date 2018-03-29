<template>
	<div class="footer" @click="mobileMenu = false">
      <div class="footer-title" id="contacts">
        <div class="container">
          <div><h2>This will change everything</h2></div>
        </div>
      </div>
      <div class="footer-main">
        <div class="container">
          <div class="footer-main-wrapp">
            <div class="footer-main-wrapp_item">
              <img src="../assets/white-logo.png">
            </div>
            <div class="footer-main-wrapp_item">
              <ul>
                <li><a href="#">pages</a></li>
                <li><a href="#">elements</a></li>
                <li><a href="#">product</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">work</a></li>
              </ul>
            </div>
            <div class="footer-main-wrapp_item">
              <ul>
                <li><a href="#">support</a></li>
                <li><a href="#">answers</a></li>
                <li><a href="#">workshops</a></li>
                <li><a href="#">specials</a></li>
              </ul>
            </div>
            <div class="footer-main-wrapp_item">
              <ul>
                <li><a href="#">terms of use</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">contacts</a></li>
                <li><a href="#">about us</a></li>
              </ul>
            </div>
            <div class="footer-main-wrapp_item">
              <span>MADE BY</span><br>
              <img src="../assets/craft.png">
              <div class="footer-main-wrapp_item-nav">
                <a href="www.getcraftwork.com" target="_blank">www.getcraftwork.com</a>
                <ul>
                  <li>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                    <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
	export default {
		name: 'footnav',
		data () {
			return {
				mobileMenu: false
			}
		}
	}
</script>

<style scoped>
.footer {
  background-image: url(../assets/footer.png);
  background-size: cover;
  background-position: center;
  background-color: #f5f6f8;
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer-title {
  text-align: right;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  color: black;
}
.footer-title h2 {
  font-weight: 900;
  font-size: 72px;
  letter-spacing: 5px;
  margin: 0;
}
.footer-main {
  padding: 0 0 100px 0;
}
.footer-main-wrapp {
  background-color: black;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  padding: 20px 25px;
}
.footer-main-wrapp_item ul {
  margin: 0;
  padding: 0;
}
.footer-main-wrapp_item ul li {
  list-style: none;
  padding: 10px 0;
}
.footer-main-wrapp_item ul li a {
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  text-decoration: none;
  color: white;
}
.footer-main-wrapp_item-nav {
  text-align: right;
  padding: 60px 0 0 0;
}
.footer-main-wrapp_item img {
  float: right;
}
.footer-main-wrapp_item span {
  float: right;
  text-align: right;
  color: gray;
  font-size: 12px;
}
.footer-main-wrapp_item-nav a {
  font-size: 14px;
  color: gray;
  text-decoration: none;
  transition: .4s;
}
.footer-main-wrapp_item-nav a i {
  font-size: 25px;
  padding-left: 30px;
  transition: .4s;
  color: gray;
}
.footer-main-wrapp_item-nav a i:hover {
  color: white;
}
.footer-main-wrapp_item-nav a:hover {
  color: white;
}
@media only screen and (max-width : 991px) {
  .footer {
    height: auto;
  }
  .footer-title h2 {
    font-size: 61px;
  }
}
@media only screen and (max-width : 768px) {
  .footer-title {
    text-align: center;
  }
  .footer-title h2 {
    font-size: 40px;
  }
  .footer-main-wrapp {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .footer-main-wrapp_item {
    margin: 10px 0;
  }
  .footer-main-wrapp_item-nav {
    text-align: center;
    padding: 0;
  }
  .footer-main-wrapp_item img {float:none;}
  .footer-main-wrapp_item span {float:none;}
  .footer-main-wrapp_item-nav a i {padding: 0 20px;}
}
@media only screen and (max-width : 320px) {
  .footer-title h2 {
    font-size: 35px;
  }
  .footer-main-wrapp_item-nav a i {
    padding: 0 15px;
  }
}
</style>