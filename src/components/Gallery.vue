<template>
	<div class="photo" id="work">
		<div class="gallery" @click="mobileMenu = false">
	      <div class="container">
	        <div class="gallery-title">do it by yourself</div>
	      </div>
	      <div class="gallery-photo">
	        <div class="gallery-photo_item">
	          <img src="../assets/main.jpg">
	          <div class="sub-img">
	            <button @click="galleryPhotos = !galleryPhotos">View</button>
	          </div>
	        </div>
	        <div class="gallery-photo_item">
	          <img src="../assets/2.jpg">
	          <div class="sub-img">
	            <button @click="galleryPhotos2 = !galleryPhotos2">View</button>
	          </div>
	        </div>
	        <div class="gallery-photo_item">
	          <img src="../assets/3.jpg">
	          <div class="sub-img">
	            <button @click="galleryPhotos3 = !galleryPhotos3">View</button>
	          </div>
	        </div>
	        <div class="gallery-photo_item">
	          <img src="../assets/4.jpg">
	          <div class="sub-img">
	            <button @click="galleryPhotos4 = !galleryPhotos4">View</button>
	          </div>
	        </div>
	        <div class="gallery-photo_item">
	          <img src="../assets/5.jpg">
	          <div class="sub-img">
	            <button @click="galleryPhotos5 = !galleryPhotos5">View</button>
	          </div>
	        </div>
	        <div class="gallery-photo_item">
	          <img src="../assets/6.jpg">
	          <div class="sub-img">
	            <button @click="galleryPhotos6 = !galleryPhotos6">View</button>
	          </div>
	        </div>
	        <div class="gallery-photo_item">
	          <img src="../assets/7.jpg">
	          <div class="sub-img">
	            <button @click="galleryPhotos7 = !galleryPhotos7">View</button>
	          </div>
	        </div>
	        <div class="gallery-photo_item">
	          <img src="../assets/8.jpg">
	          <div class="sub-img">
	            <button @click="galleryPhotos8 = !galleryPhotos8">View</button>
	          </div>
	        </div>
	        <div class="gallery-photo_item">
	          <img src="../assets/9.jpg">
	          <div class="sub-img">
	            <button @click="galleryPhotos9 = !galleryPhotos9">View</button>
	          </div>
	        </div>
	      </div>
	    </div>
	    <div class="collection" @click="mobileMenu = false">
	    	<div class="collection-img" v-show="galleryPhotos">
	    		<img src="../assets/main.jpg" alt="" @click="galleryPhotos = false">
	    	</div>
	    	<div class="collection-img" v-show="galleryPhotos2">
	    		<img src="../assets/2.jpg" alt="" @click="galleryPhotos2 = false">
	    	</div>
	    	<div class="collection-img" v-show="galleryPhotos3">
	    		<img src="../assets/3.jpg" alt="" @click="galleryPhotos3 = false">
	    	</div>
	    	<div class="collection-img" v-show="galleryPhotos4">
	    		<img src="../assets/4.jpg" alt="" @click="galleryPhotos4 = false">
	    	</div>
	    	<div class="collection-img" v-show="galleryPhotos5">
	    		<img src="../assets/5.jpg" alt="" @click="galleryPhotos5 = false">
	    	</div>
	    	<div class="collection-img" v-show="galleryPhotos6">
	    		<img src="../assets/6.jpg" alt="" @click="galleryPhotos6 = false">
	    	</div>
	    	<div class="collection-img" v-show="galleryPhotos7">
	    		<img src="../assets/7.jpg" alt="" @click="galleryPhotos7 = false">
	    	</div>
	    	<div class="collection-img" v-show="galleryPhotos8">
	    		<img src="../assets/8.jpg" alt="" @click="galleryPhotos8 = false">
	    	</div>
	    	<div class="collection-img" v-show="galleryPhotos9">
	    		<img src="../assets/9.jpg" alt="" @click="galleryPhotos9 = false">
	    	</div>
    	</div>
	</div>
</template>

<script>
	export default {
		name: 'gallery',
		data () {
			return { 
				mobileMenu: false,
				galleryPhotos: false,
				galleryPhotos2: false,
				galleryPhotos3: false,
				galleryPhotos4: false,
				galleryPhotos5: false,
				galleryPhotos6: false,
				galleryPhotos7: false,
				galleryPhotos8: false,
				galleryPhotos9: false
			}
		}
	}
</script>

<style scoped>
.gallery {
  background-color: #f5f6f8;
  padding: 0 0 80px 0;
}
.gallery-title {
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 26px;
  color: black;
}
.gallery-photo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.gallery-photo_item {
  height: 250px;
  width: 33.33%;
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
}
.gallery-photo_item img {
  width: 100%;
  height: 100%;
}
.sub-img {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  transition: .4s;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  opacity: 0;
}
.sub-img button {
  background: blue;
  border: none;
  background: #26e6e6;
  border: 2px solid #26e6e6;
  padding: 10px 35px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 100;
  color: black;
  cursor: pointer;
  transition: .2s;
}
.sub-img button:hover {
  border: 2px solid #26e6e6;
  color: white;
  background: none;
}
.gallery-photo_item > .sub-img:hover {
  opacity: 1;
}
.collection-img img {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 90%;
	height: 100%;
	margin: auto;
	z-index: 30;
	cursor: zoom-out;
}
@media only screen and (max-width : 991px) {
  .gallery-photo_item {
    width: 50%;
  }
}
@media only screen and (max-width : 480px) {
	.gallery-photo_item {
		width: 100%;
		height: 300px;
	}
	.collection-img img {
		width: 100%;
		height: 70%;
	}
}
</style>