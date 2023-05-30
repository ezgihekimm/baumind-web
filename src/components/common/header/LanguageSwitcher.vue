<template>
	<div class="localeChanger" v-click-outside="handleFocusOut">
		<div class="currentLanguage noselect" @click="onClick" :class="{
				'whiteLine': type == 'transparent' || type == 'black',
				'blackLine': type == 'white' || type == 'fixed',
				}">
			<div class="langText" :class="{
				'white': type == 'transparent' || type == 'black',
				'black': type == 'white' || type == 'fixed',
				}">
				{{renderCurrentLang()}}
			</div>
			<div class="langFlag">
				<img :src="require('@/assets/images/flags/'+this.$i18n.locale+'.png')" alt="">
			</div>
			<div class="arrow" :class="{
				'white': type == 'transparent' || type == 'black',
				'black': type == 'white' || type == 'fixed',
				}">
				<i class="fas fa-angle-down"></i>
			</div>
		</div>
		<div class="languageList" v-if="showList">
			<div class="item noselect" v-for="locale in langs" :key="locale" @click="switchLocale(locale)">
				<img :src="require('@/assets/images/flags/'+locale+'.png')" alt="">
				{{renderLang(locale)}}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'localeChanger',
	props: {
		type: {
			type: String,
			default: 'fixed',
		},
	},
	data () {
		return {
			langs: ['en', 'tr'],
			showList: false
		}
	},
	methods: {
		switchLocale(locale) {
			this.showList = !this.showList
			if (this.$i18n.locale !== locale) {
				this.$i18n.locale = locale;
				const to = this.$router.resolve({ params: {locale} })
				this.$router.push({path: to.path})
			}
		},
		onClick(){
			this.showList = !this.showList
		},
		renderCurrentLang(){
			if(this.$i18n.locale == 'en'){ return 'English' }
			if(this.$i18n.locale == 'tr'){ return 'Türkçe' }
		},
		renderLang(locale){
			if(locale == 'en'){ return 'English' }
			if(locale == 'tr'){ return 'Türkçe' }
		},
		handleFocusOut(){
			if(this.showList == true){
				this.showList = false
			}
		}
	},
	mounted(){
		// Preload flags
		this.langs.forEach(lang => {
			this.$nextTick(() => {
				require('@/assets/images/flags/'+lang+'.png')
			})
		})
	}
}
</script>

<style scoped>

.localeChanger{
	height: 70px;
	margin-right: 20px;
	position: relative;
	display: flex;
	align-items: center;
}
.localeChanger .currentLanguage{
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	height: 30px;
	
	background-size: 0% 1px;
	background-position: 0% 100%;
	background-repeat: no-repeat;
	transition: background 0.3s linear;
}
.whiteLine{
	background-image: linear-gradient(white, white);
}
.blackLine{
	background-image: linear-gradient(black, black);
}
.localeChanger .currentLanguage:hover{
	background-size: 100% 1px;
}
.localeChanger .currentLanguage .langFlag{
	display: none;
}
.localeChanger .currentLanguage .langText{
	font-family: 'DM Sans', sans-serif;
	font-size: 16px;
	font-weight: 400;
}
.white{
	color: white;
}
.black{
	color: black;
}
.localeChanger .currentLanguage .arrow i{
	display: block;
	margin-left: 8px;
}
.localeChanger .currentLanguage img{
	height: 32px;
	object-fit: contain;
}

.localeChanger .languageList{
	background-color: white;
	box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: absolute;
	top: 70px;
}
.localeChanger .item{
	padding-bottom: 4px;
	display: flex;
	align-items: center;
	color: black;
	cursor: pointer;
	background-image: linear-gradient(#2b2b2b, #2b2b2b);
	background-size: 0% 1px;
	background-position: 0% 100%;
	background-repeat: no-repeat;
	transition: background 0.3s linear;
	margin-bottom: 20px;
}
.localeChanger .item img{
	height: 20px;
	object-fit: contain;
	margin-right: 10px;
}
/* when hover .localeChanger .item underline with animation */
.localeChanger .item:hover{
	background-size: 100% 1px;
}

/* remove last item .item margin bottom */
.localeChanger .item:last-child{
	margin-bottom: 0px;
}

.noselect {
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

@media screen and (max-width: 1023px) {
	.localeChanger .currentLanguage .langText{
		display: none;
	}
	.localeChanger .currentLanguage .arrow i{
		color: black !important;
	}
	.localeChanger .currentLanguage .langFlag{
		display: block;
	}
	.localeChanger .languageList{
		left: -20px;
	}
}
</style>