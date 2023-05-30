<template>
	<div class="_container">
		<div class="_container_inside">
			<div class="imgContainer" data-aos="fade-right">
				<img src="@/assets/images/about-us/aboutus.jpg" />
			</div>
			<div class="contentContainer">
				<div class="tag">&bull; {{$t('aboutus.tag')}}</div>
				<div class="title">{{$t('aboutus.title')}}</div>

				<ul>
					<li @click="toggle(0)" id="aboutus0">
						<div class="_row">
							<span>01</span>
							<div class="menuTitle">{{$t('aboutus.whoarewe')}}</div>
							<div class="arrow">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.222" height="20.222" viewBox="0 0 20.222 20.222"><g transform="translate(19.868 9.755) rotate(135)"><path d="M-12242.785,3311.378h13.8v13.8" transform="translate(12242.785 -3311.378)" fill="none" stroke="currentColor" stroke-width="1"></path><line y1="13.376" x2="13.556" transform="translate(0.393 0.012)" fill="none" stroke="currentColor" stroke-width="1"></line></g></svg>
							</div>
						</div>
						<div class="content">{{$t('aboutus.whoarewe-content')}}</div>
					</li>
					<li @click="toggle(1)" id="aboutus1">
						<div class="_row">
							<span>02</span>
							<div class="menuTitle">{{$t('aboutus.aims')}}</div>
							<div class="arrow">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.222" height="20.222" viewBox="0 0 20.222 20.222"><g transform="translate(19.868 9.755) rotate(135)"><path d="M-12242.785,3311.378h13.8v13.8" transform="translate(12242.785 -3311.378)" fill="none" stroke="currentColor" stroke-width="1"></path><line y1="13.376" x2="13.556" transform="translate(0.393 0.012)" fill="none" stroke="currentColor" stroke-width="1"></line></g></svg>
							</div>
						</div>
						<div class="content">{{$t('aboutus.aims-content')}}</div>
					</li>
					<li @click="toggle(2)" id="aboutus2">
						<div class="_row">
							<span>03</span>
							<div class="menuTitle">{{$t('aboutus.vision')}}</div>
							<div class="arrow">
								<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20.222" height="20.222" viewBox="0 0 20.222 20.222"><g transform="translate(19.868 9.755) rotate(135)"><path d="M-12242.785,3311.378h13.8v13.8" transform="translate(12242.785 -3311.378)" fill="none" stroke="currentColor" stroke-width="1"></path><line y1="13.376" x2="13.556" transform="translate(0.393 0.012)" fill="none" stroke="currentColor" stroke-width="1"></line></g></svg>
							</div>
						</div>
						<div class="content">{{$t('aboutus.vision-content')}}</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import $ from 'jquery'

export default {
	name: 'About Us',
	data() {
		return {
			isOpen: [false, false, false],
		}
	},
	methods: {
		toggle: function(e) {
			this.isOpen.forEach((item, index) => {
				if(index != e){
					$('#aboutus' + index).children('.content').slideUp(250)
					$('#aboutus' + index).children('._row').children('.arrow').removeClass('rotate')
					this.isOpen[index] = false
				}else{
					$('#aboutus' + index).children('.content').slideToggle(250)
					$('#aboutus' + index).children('._row').children('.arrow').toggleClass('rotate')
					this.isOpen[index] = !this.isOpen[index]
				}
			})
		}
	},
	mounted() {
		this.toggle(0)
	},
	
}
</script>

<style scoped>

._container{
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	transition-duration: 0.5s;
	padding-bottom: 100px;
	padding-top: 50px;
	background-color: white;
}

._container_inside{
	width: 100%;
	max-width: 1900px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-left: 5%;
	padding-right: 5%;
	background-color: white;
}

.imgContainer{
	display: flex;
	justify-content: center;
	width: 50%;
	/* border: 1px solid black; */
	padding-right: 3.5%;
}
.imgContainer img{
	width: 100%;
	object-fit: contain;
}

.contentContainer{
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 50%;
	padding-left: 5%;
	/* border: 1px solid red; */
}

.contentContainer .tag{
	font-family: "DM Sans",sans-serif;
	font-weight: 500;
	color: #000;
	font-size: 12px;
	line-height: 1.5em;
	letter-spacing: .13em;
	text-transform: uppercase;
	margin-bottom: 11px;
}

.contentContainer .title{
	font-family: "DM Sans",sans-serif;
	font-weight: 500;
	color: #000;
	font-size: 39px;
	line-height: 1.23em;
	margin-bottom: 50px;
}

.contentContainer ul{
	margin: 0;
	padding: 0;
}

.contentContainer ul li{
	list-style: none;
	font-family: "DM Sans",sans-serif;
	font-weight: 500;
	color: #000;
	font-size: 28px;
	line-height: 1.285em;
	display: flex;
	flex-direction: column;
	/* align-items: center; */
	/* justify-content: flex-end; */
	/* border: 1px solid black; */
	border-top: 1px solid rgba(0,0,0,.22);
	padding: 31px 0;
	cursor: pointer;
}
.contentContainer ul li ._row{
	display: flex;
	flex-direction: row;
}
.contentContainer ul li:last-child{
	border-bottom: 1px solid rgba(0,0,0,.22);
}

.contentContainer ul li ._row span{
	display: block;
    position: relative;
	top: 5px;
	margin-right: 10px;
    counter-increment: section;
    content: counter(section,decimal-leading-zero);
    font-size: .4642857142857143em;
    line-height: 1;
    color: currentColor;
}
.contentContainer ul li ._row .menuTitle{
	display: flex;
	flex-grow: 1;
}
.contentContainer ul li ._row .arrow{
	display: flex;
	flex-direction: row;
	align-self: center;
	justify-content: flex-end;
	transition: all .3s ease;
}

.contentContainer ul li ._row .rotate{
	transform: rotate(180deg) !important;
}

.contentContainer ul li .content{
    font-family: "DM Sans",sans-serif;
    font-size: 17px;
    line-height: 1.589em;
    font-weight: 400;
	padding-top: 20px;
	display: none;
}

.contentContainer ul li:hover ._row .arrow{
	transform: rotate(180deg);
}

@media screen and (max-width: 1023px) {
	
	._container_inside{
		flex-direction: column;
	}
	.imgContainer{
		display: flex;
		justify-content: center;
		width: 100%;
		padding-right: 0;
	}
	.imgContainer img{
		width: 100%;
	}
	.contentContainer{
		width: 100%;
		padding-left: 0;
		margin-top: 90px;
	}
}

</style>