<template>
<div class="_con">
	<!-- White Background For Loading -->
	<ul class="slides" v-if="loading">
		<li>
			<img :src="images[images.length - 1].img">
		</li>
	</ul>
	<ul class="slides" v-if="!loading">
		<li v-for="(slide, index) in images" :key="index" :class="{active: currentImage == index, noactive: currentImage != index}">
			
			<!-- Slider Picture -->
			<img :src="slide.img">
			
			<!-- Slider Tag -->
			<div class="sliderTagContainer" v-if="!slide.empty">
				<div class="sliderTag" :class="{activeTag: currentImage == index}">
					<div>&bull; {{slide.tag}}</div>
				</div>
			</div>

			<!-- Slider Text -->
			<div class="sliderTextContainer" v-if="!slide.empty">
				<div class="sliderTitle" :class="{activeTitle: currentImage == index}">
					<div>{{slide.title}}</div>
				</div>
			</div>

			<!-- Slider Read More Button -->
			<div class="sliderButonContainer" v-if="!slide.empty">
				<div class="sliderButon" :class="{activeButon: currentImage == index}">
					<Button type="light" :text="this.$t('home.slider.buttonText')" :link="slide.link" />
				</div>
			</div>

		</li>
	</ul>
	<!-- Nav Dots -->
	<ul class="navdot">
		<li v-for="(slide, index) in imagesAdapted" :key="index" :class="{active: currentImage == index, noactive: currentImage != index}" @click="scroll_to_slide(index)"></li>
	</ul>
</div>
</template>

<script>
import Button from '../common/Button.vue'

export default {
	name: 'Slider',
	components: {
		Button
	},
	data: function () {
		return {
			currentImage: 0,
			disabled: false,
			lastClickTime: 0,
			loading: true,
		}
	},
	computed: {
		imagesAdapted: function () {
			return this.images.slice(0, this.images.length - 1);
		},
		images(){
			return [
				{
					tag: this.$t('home.slider.slide3Tag'),
					title: this.$t('home.slider.slide3Text'),
					img: require('../../assets/images/slider/slider7-min.jpeg'),
					link: 'projects/denizalti-gemisi-helikopter-arasinda-guvenli-elektro-optik-haberlesme-sistemi'
				},
				{
					tag: this.$t('home.slider.slide2Tag'),
					title: this.$t('home.slider.slide2Text'),
					img: require('../../assets/images/slider/slider1-min.jpeg'),
					link: 'products/co-lighting'
				},
				{
					tag: this.$t('home.slider.slide1Tag'),
					title: this.$t('home.slider.slide1Text'),
					img: require('../../assets/images/slider/slider2-min.jpeg'),
					link: 'coming-soon'
				},
				{
					tag: this.$t('home.slider.slide4Tag'),
					title: this.$t('home.slider.slide4Text'),
					img: require('../../assets/images/slider/slider8-min.jpeg'),
					link: 'projects/sualti-optik-spektrum-olcum-cihazi'
				},
				// Ilk acildiginda beyaz zemin uzerine slide gelmesi icin
				{
					img: require('../../assets/images/slider/white.png'),
					empty: true
				}
			]
		}
	},
	methods: {
		nextImage(e) {
			e.preventDefault();
			if (this.currentImage < this.images.length - 2) {
				this.currentImage++;
			} else {
				this.currentImage = 0;
			}
		},
		previousImage(e) {
			e.preventDefault();
			if (this.currentImage > 0) {
				this.currentImage--;
			} else {
				this.currentImage = this.images.length - 2;
			}
		},
		autoIncrement() {
			setInterval(() => {
				// if now - lastClickTime < 1000 then return
				if (Date.now() - this.lastClickTime < 5000) { return; }
				if (this.currentImage < this.images.length - 2) { this.currentImage++;}
				else { this.currentImage = 0; }
			}, 5000);
		},
		scroll_to_slide(e){
			this.currentImage = e
			this.lastClickTime = new Date().getTime();
		}
	},
	beforeMount() {
		const preloadImages = () => {
			let dump = []
			for (let i = 1; i < this.images.length; i++) {
				dump[i] = this.images[i].img
			}
		};
		preloadImages()
	},
	mounted(){
		setTimeout(() => {
			this.loading = false;
		}, 100);
		this.autoIncrement();
	}
}
</script>

<style scoped>

*,
*::before,
*::after {
	box-sizing: inherit;
	margin: 0;
	padding: 0;
}

._con {
	display: flex;
	justify-content: center;
	margin: 0 0;
	padding-right: 0px;
	padding-left: 0px;
	font-family: 'DM Sans', sans-serif;
	position: relative;
}

/* Slides */
.slides {
	overflow: hidden;
	width: 100%;
	min-height: 100vh;
	padding-right: 0px;
	padding-left: 0px;
}
.slides li {
	width: 100%;
	min-height: 100vh;
	position: absolute;
	z-index: 1;
	padding-right: 0px;
	padding-left: 0px;
}
.slides img {
	width: 100%;
	height: 100vh;
	object-fit: cover;
	object-position: top;
}
.slides li.active {
	z-index: 3;
	animation-name: slide;
	animation-duration: 1s;
	animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
	animation-iteration-count: 1;
	animation-fill-mode: backwards;
}
.slides li.noactive {
	animation-name: hidden;
	animation-delay: 1s;
	animation-duration: .1s;
	animation-fill-mode: backwards;
}
@keyframes slide {
	0% { transform: translateY(-100%); }
	100% { transform: translateY(0%); }
}
@keyframes hidden {
	0% { z-index: 2; }
	100% { z-index: 2; }
}

/* Slider Tag */
.sliderTagContainer {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -420%);
	width: 90%;
	padding-top: 10px;
	padding-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 2;
	overflow: hidden;
}
.sliderTag {
	width: 100%;
	background-color: transparent;
	text-align: center;
	color: #fff;
	font-family: "DM Sans", sans-serif;
	font-size: 12px;
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 2px;
	z-index: 4;
	display: flex;
	justify-content: center;
	align-items: center;
}
.activeTag {
	z-index: 6;
	animation-name: slideTag;
	animation-duration: 1.6s;
	animation-delay: 0s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
	animation-iteration-count: 1;
	animation-direction: normal;
}
@keyframes slideTag {
	0% { transform: translateY(300%); }
	100% { transform: translateY(0%); }
}

/* Slider Title */
.sliderTextContainer {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -55%);
	width: 700px;
	padding-top: 10px;
	padding-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 2;
	overflow: hidden;
	/* border: 1px solid black; */
}
.sliderTitle {
	width: 100%;
	background-color: transparent;
	text-align: center;
	color: #fff;
	font-size: 65px;
	font-weight: 400;
	line-height: 90px;
	z-index: 4;
	display: flex;
	justify-content: center;
	align-items: center;
}
.activeTitle {
	z-index: 6;
	animation-name: slideTitle;
	animation-duration: 1.6s;
	animation-delay: 0s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
	animation-iteration-count: 1;
	animation-direction: normal;
}
@keyframes slideTitle {
	0% { transform: translateY(300%); }
	100% { transform: translateY(0%); }
}

.sliderButonContainer {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 180%);
	width: 100%;
	padding-top: 10px;
	padding-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 2;
	overflow: hidden;
}
.activeButon {
	z-index: 6;
	animation-name: slideButton;
	animation-duration: 1.6s;
	animation-delay: 0s;
	animation-timing-function: ease-in-out;
	animation-fill-mode: forwards;
	animation-iteration-count: 1;
	animation-direction: normal;
}
@keyframes slideButton {
	0% { transform: translateY(-300%); }
	100% { transform: translateY(0%); }
}

/* Nav Dots */
.navdot {
	position: absolute;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);
	margin: 0;
	padding: 0;
	list-style: none;
	z-index: 4;
	display: flex;
	flex-direction: row;
	transition: all 1s ease;
}
.navdot li {
	height: 10px;
	width: 10px;
	border: solid 1px white;
	border-radius: 10px;
	cursor: pointer;
	margin: 0 10px;
}
.navdot li:last-child {
	margin-bottom: 0;
}
.navdot li.active {
	background: white;
}

@media screen and (max-width: 1023px) {
	
	.sliderTextContainer {
		width: 80%;
	}
	.sliderTitle {
		width: 100%;
		text-align: center;
		font-size: 40px;
		line-height: 55px;
	}
}

</style>
