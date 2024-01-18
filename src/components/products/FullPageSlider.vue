<template>
	<div class="_sliderContainer" id="verticalSlider">
		<!-- Scroll Text -->
		<div class="scrollText">{{$t('products.scroll')}}</div>
		<!-- Texts -->
		<div class="contentContainer">
			<div class="_imgOutsideContainer" v-for="(slide, index) in slider" :key="index">
				<div class="_imgContainer">
					<img class="_img" :src="slide.img" alt="">
				</div>
			</div>
			<div class="textContainer">
				<div class="_tagContainer" v-for="(slide, index) in slider" :key="index">
					<div class="_tag">&bull; {{slide.tag}}</div>
				</div>
				<div class="_titleContainer" v-for="(slide, index) in slider" :key="index">
					<div class="_title">{{slide.title}}</div>
				</div>
				<div class="_subtitleContainer" v-for="(slide, index) in slider" :key="index">
					<div class="_subtitle">{{slide.subtitle}}</div>
				</div>
				<div class="_buttonContainer" v-for="(slide, index) in slider" :key="index">
					<div class="sliderButon">
						<Button type="dark" :text="$t('products.more-info')" :link="slide.link" :customlink="slide.customlink != undefined" />
					</div>
				</div>
			</div>
		</div>
		<!-- Nav Dots -->
		<ul class="navdot">
			<li class="active" @click="scroll_to_slide(0)"></li>
			<li @click="scroll_to_slide(1)"></li>
			<li @click="scroll_to_slide(2)"></li>
			<li @click="scroll_to_slide(3)"></li>
		</ul>
	</div>
  
</template>

<script>
import Button from '../common/Button.vue'
import $ from 'jquery';
import 'jquery-mousewheel';

export default {
	name: 'FullPageSlider',
	components: {
		Button
	},
	data(){
		return{
			firstTime: true,
			slide: 0,
			touchstartX: 0,
			touchstartY: 0,
			touchendX: 0,
			touchendY: 0,
		}
	},
	computed: {
		slider(){
			return [
				{tag: this.$t('products.colighting.tag'), title: 'coLighting', subtitle: this.$t('products.colighting.info'), img: require('../../assets/images/products/colighting/minified/colighting.png'), link: 'products/co-lighting'},
				{tag: this.$t('products.codiver.tag'), title: 'coDiver', subtitle: this.$t('products.codiver.info'), img: require('../../assets/images/products/codiver/minified/codiver.png'), link: 'coming-soon'},
				{tag: this.$t('products.colink.tag'), title: 'coLink', subtitle: this.$t('products.colink.info'), img: require('../../assets/images/products/colink/colink4.png'), link: 'coming-soon'},
				{tag: this.$t('products.yetenek.tag'), title: 'Yetenek', subtitle: this.$t('products.yetenek.info'), img: require('../../assets/images/products/yetenek/minified/yetenek.png'), link: 'https://yetenek12.com', customlink: true},
			]
		}
	},
	methods: {
		scroll_to_slide(i) {
			if (i >= 0 && i < this.slider.length) {
				var last_slide = this.slide;
				this.slide = i;

				// Nav Dot Animation
				$('.navdot li').removeClass('active');
				$($('.navdot li')[i]).addClass('active');
				
				// Text Animation Classes
				var _imgContainer = $('._imgContainer');
				var _tagContainer = $('._tagContainer');
				var _titleContainer = $('._titleContainer');
				var _subtitleContainer = $('._subtitleContainer');
				var _buttonContainer = $('._buttonContainer');

				if(!this.firstTime){
					// Img Container

					// Tum classlari kaldir
					$(_imgContainer[last_slide]).removeClass('_imgToUp')
					$(_imgContainer[last_slide]).removeClass('_imgFromBottom')
					$(_imgContainer[last_slide]).removeClass('_imgFromTop')
					$(_imgContainer[last_slide]).removeClass('_imgToDown')
					$(_imgContainer[i]).removeClass('_imgToUp')
					$(_imgContainer[i]).removeClass('_imgFromBottom')
					$(_imgContainer[i]).removeClass('_imgFromTop')
					$(_imgContainer[i]).removeClass('_imgToDown')
					
					if(last_slide - i > 0){
						// Scroll Up
						// 1. Mevcut resmi asagiya gonder
						$(_imgContainer[last_slide]).addClass('_imgToDown')
						
					}else{
						// Scroll Down
						// 1. Mevcut resmi yukariya gonder
						$(_imgContainer[last_slide]).addClass('_imgToUp')

					}

					$(_tagContainer[last_slide]).children('._tag').removeClass('textActive');
					$(_tagContainer[last_slide]).children('._tag').addClass('textInactive');
					
					$(_titleContainer[last_slide]).children('._title').removeClass('textActive2');
					$(_titleContainer[last_slide]).children('._title').addClass('textInactive2');
					
					$(_subtitleContainer[last_slide]).children('._subtitle').removeClass('textActive3');
					$(_subtitleContainer[last_slide]).children('._subtitle').addClass('textInactive3');

					$(_buttonContainer[last_slide]).children('.sliderButon').removeClass('textActive4');
					$(_buttonContainer[last_slide]).children('.sliderButon').addClass('textInactive4');
				}

				if(last_slide - i > 0){
					$(_imgContainer[i]).addClass('_imgFromTop');
				}else{
					$(_imgContainer[i]).addClass('_imgFromBottom');
				}

				$(_tagContainer[i]).children('._tag').removeClass('textInactive');
				$(_tagContainer[i]).children('._tag').addClass('textActive');
				
				$(_titleContainer[i]).children('._title').removeClass('textInactive2');
				$(_titleContainer[i]).children('._title').addClass('textActive2');
				
				$(_subtitleContainer[i]).children('._subtitle').removeClass('textInactive3');
				$(_subtitleContainer[i]).children('._subtitle').addClass('textActive3');

				$(_buttonContainer[i]).children('.sliderButon').removeClass('textInactive4');
				$(_buttonContainer[i]).children('.sliderButon').addClass('textActive4');

				if(this.firstTime){
					setTimeout(() => {
						$($('._imgContainer')[0]).removeClass("slowAnim")
					}, 1100);
				}

				this.firstTime = false;
			}
		},
		handleGesture() {
			if (this.touchendY < this.touchstartY) {
				this.scroll_to_slide(this.slide + 1);
			}
			if (this.touchendY > this.touchstartY) {
				this.scroll_to_slide(this.slide - 1);
			}
		},
		linkCreator: function (locale, route) {
			return '/'+locale+'/' + route.toLowerCase()
		},
	},
	mounted: function mounted () {

		// Desktop Scroll Events
		var slideLock = false;
		let threshold = 20;
		$('#verticalSlider').on('mousewheel', (event) => {
			if(event.deltaY > threshold && !slideLock) {
				slideLock = true;
				this.scroll_to_slide(this.slide - 1);
			}
			if(event.deltaY < -threshold && !slideLock) {
				slideLock = true;
				this.scroll_to_slide(this.slide + 1);
			}
			if(event.deltaY < threshold && event.deltaY > -threshold) {
				if(slideLock){
					slideLock = false;
				}
			}
		});

		let touchableElement = document.getElementById('verticalSlider');
		touchableElement.addEventListener('touchstart', (event) => {
			event.preventDefault()
			this.touchstartX = event.changedTouches[0].screenX;
			this.touchstartY = event.changedTouches[0].screenY;
		}, false);

		touchableElement.addEventListener('touchend', (event) => {
			this.touchendX = event.changedTouches[0].screenX;
			this.touchendY = event.changedTouches[0].screenY;
			this.handleGesture();
		}, false);


		// Select First slide on begin
		$($('._imgContainer')[0]).addClass("slowAnim")
		this.scroll_to_slide(0);

	},
	beforeCreate: function() {
		// Sayfanin scroll yapmamasi icin
		// Class'lar index.html de bulunuyor
		document.body.className = 'home';
		document.querySelector('html').style.overflow = 'hidden';
	},
	beforeUnmount: function() {
		// Diger sayfalarda normale donmesi icin
		document.body.className = '';
		document.querySelector('html').style.overflow = '';
	},
}
</script>

<style scoped>


/* -------------------------------- Main -------------------------------- */
._sliderContainer{
	width: 100%;
	height: 100vh;
	overflow: hidden;
	background-color: white;
}

/* -------------------------------- Main > Content Container -------------------------------- */
.contentContainer{
	/* border: 1px solid black; */
	height: 100vh;
	color: black;
	position: fixed;
	right: 100px;
	left: 8%;
	overflow: hidden;
	background-color: transparent;
	padding-left: 5%;
	padding-right: 5%;
}

/* -------------------------------- Main > Content Container > Image Container -------------------------------- */
._imgOutsideContainer{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* border: 1px solid black; */
}

._imgContainer {
	background: linear-gradient(-45deg, #E8B892, #6170B1, #E2B48E, #6170B1);
	animation: change 10s ease-in-out infinite;
	width: 70%;
	min-width: 300px;
	max-width: 600px;
	aspect-ratio: 1;
	background-size: 400% 400%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 100%;
	position: absolute;
	top: 50%;
	transform: translateY(300%) scale(0.4);
	z-index: 3;
	overflow: hidden;
}
._imgContainer ._img {
	object-fit: contain;
	display: block;
	width: 100%;
	height: 100%;
}
._imgToUp{
	animation: imgToUp 0.5s ease-in-out 1 normal forwards;
}
._imgFromBottom{
	animation: imgFromBottom 0.5s ease-in-out 1 normal forwards;
}
._imgFromTop{
	animation: imgFromTop 0.5s ease-in-out 1 normal forwards;
}
._imgToDown{
	animation: imgToDown 0.5s ease-in-out 1 normal forwards;
}
.slowAnim{
	animation-duration: 0.75s !important;
}
@keyframes change {
	0% { background-position: 0 50%; }
	50% { background-position: 50% 50%;}
	100% { background-position: 0 50%;}
}
@keyframes imgToUp{
	0%{
		transform: translateY(-50%) scale(1);
	}
	100%{
		transform: translateY(-300%) scale(0.4);
	}
}
@keyframes imgFromBottom{
	0%{
		transform: translateY(300%) scale(0.4);
	}
	100%{
		transform: translateY(-50%) scale(1);
	}
}
@keyframes imgFromTop{
	0%{
		transform: translateY(-300%) scale(0.4);
	}
	100%{
		transform: translateY(-50%) scale(1);
	}
}
@keyframes imgToDown{
	0%{
		transform: translateY(-50%) scale(1);
	}
	100%{
		transform: translateY(300%) scale(0.4);
	}
}

.textContainer{
	width: 50%;
	max-width: 500px;
	/* min-width: 500px; */
	height: 290px;
	top: 50%;
	transform: translateY(-50%);
	left: 50%;
	position: relative;
	/* border: 1px solid red; */
}

._tagContainer{
	position: absolute;
	height: 30px;
	top: 0;
	right: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	/* border: 1px solid red; */
}
._tag{
	font-size: 12px;
	font-weight: 500;
	font-family: 'DM Sans', sans-serif;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	z-index: 2;
	opacity: 0;
	transform: translateY(100%);
}
._titleContainer{
	position: absolute;
	top: 30px;
	height: 80px;
	right: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	/* border: 1px solid blue; */
}
._title{
	font-size: 51px;
	font-weight: 500;
	font-family: 'DM Sans', sans-serif;
	z-index: 2;
	opacity: 0;
	transform: translateY(100%);
}
._subtitleContainer{
	position: absolute;
	top: 110px;
	height: 120px;
	right: 0;
	left: 0;
	padding-right: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
	/* border: 1px solid lightblue; */
}
._subtitle{
	font-size: 17px;
	font-weight: 400;
	font-family: 'DM Sans', sans-serif;
	z-index: 2;
	opacity: 0;
	transform: translateY(100%);
}
._buttonContainer{
	position: absolute;
	top: 240px;
	height: 40px;
	right: 0;
	left: 0;
	display: flex;
	align-items: center;
	/* justify-content: flex-start; */
	/* border: 1px solid lightblue; */
}
.sliderButon {
	transition: 0.3s ease;
	z-index: 2;
	opacity: 0;
	transform: translateY(100%);
}

.textActive{
	animation-name: textFromBottom;
	animation-duration: 0.45s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-fill-mode: forwards;
	animation-delay: .2s;
}
.textInactive{
	animation-name: textToUp;
	animation-duration: 0.3s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-fill-mode: forwards;
}

.textActive2{
	animation-name: textFromBottom;
	animation-duration: 0.65s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-fill-mode: forwards;
	animation-delay: .1s;
}
.textInactive2{
	animation-name: textToUp;
	animation-duration: 0.3s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-fill-mode: forwards;
}

.textActive3{
	animation-name: textFromBottom;
	animation-duration: 0.65s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-fill-mode: forwards;
	animation-delay: .3s;
}
.textInactive3{
	animation-name: textToUp;
	animation-duration: 0.3s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-fill-mode: forwards;
}
.textActive4{
	animation-name: textFromBottom;
	animation-duration: 0.65s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-fill-mode: forwards;
	animation-delay: .5s;
}
.textInactive4{
	animation-name: textToUp;
	animation-duration: 0.3s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-fill-mode: forwards;
}

@keyframes textToUp{
	0%{
		z-index: 3;
		opacity: 1;
		transform: translateY(0%);
	}
	75%{
		opacity: 0.2;
	}
	100%{
		z-index: 2;
		opacity: 0;
		transform: translateY(-100%);
	}
}

@keyframes textFromBottom{
	0%{
		z-index: 2;
		opacity: 0;
		transform: translateY(100%);
	}
	25%{
		z-index: 2;
		opacity: 0;
		transform: translateY(100%);
	}
	100%{
		z-index: 3;
		opacity: 1;
		transform: translateY(0);
	}
}


/* -------------------------------- Main > Left Text -------------------------------- */
.scrollText{
	position: fixed;
	left: 0;
	top: 50%;
	width: 150px;
	transform: translateY(-50%);
	transform: rotate(-90deg);
	text-align: center;
	font-size: 12px;
	font-weight: 500;
	font-family: 'DM Sans', sans-serif;
	letter-spacing: 1.5px;
}

/* -------------------------------- Main > Nav Dots -------------------------------- */
.navdot {
	position: fixed;
	right: 5%;
	padding: 0;
	top: 50%;
	transform: translateY(-50%);
	margin: 0;
	list-style: none;
}
.navdot li {
	height: 10px;
	width: 10px;
	border: solid 1px black;
	border-radius: 50%;
	margin-bottom: 20px;
	cursor: pointer;
}
.navdot li:last-child {
	margin-bottom: 0;
}
.navdot li.active {
	background: black;
}


/* if width under 1023 */
@media screen and (max-width: 1023px) {
	/* display: none scrollText */
	.scrollText {
		display: none;
	}

	.contentContainer{
		right: 8%;
		left: 8%;
	}

	._imgOutsideContainer{
		right: 0;
		width: auto;
	}

	._imgContainer {
		width: 60%;
		min-width: 200px;
		top: 31%;
		left: auto;
		right: auto;
	}

	.textContainer{
		width: 100%;
		max-width: 100%;
		height: 320px;
		top: auto;
		right: 0;
		left: 0;
		bottom: 8%;
		position: absolute;
		transform: none;
	}

	._tagContainer{
		height: 30px;
		/* border: 1px solid black; */
		top: 0;
	}
	._titleContainer{
		top: 30px;
		height: 70px;
		/* border: 1px solid black; */
	}
	._subtitleContainer{
		top: 100px;
		height: 110px;
		overflow: hidden;
		/* border: 1px solid black; */
	}
	._buttonContainer{
		top: 190px;
		height: 110px;
		align-items: center;
		justify-content: flex-start;
		overflow: hidden;
		/* border: 1px solid purple; */
	}

	._tag{
		font-size: 12px;
		font-weight: 500;
		font-family: 'DM Sans', sans-serif;
	}
	._title{
		font-size: 46px;
		font-weight: 500;
		font-family: 'DM Sans', sans-serif;
	}
	._subtitle{
		font-size: 15px;
		font-weight: 400;
		font-family: 'DM Sans', sans-serif;
	}
}

</style>