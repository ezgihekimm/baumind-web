<template>
<div class="_container animBackground" :class="{_dark: type == 'dark', _light: type == 'light'}">
	<div class="_insideContainer">
		<div data-aos='fade-right'>
			<Title :title="title" :tag="tag" :type="type == 'dark' ? 'dark' : 'light'" :center="true" />
		</div>
		<div class="_text" data-aos='fade-right' data-aos-delay='100'>
			{{$t('comingsoon.text')}}
		</div>
		<div data-aos='fade-right' data-aos-delay='200'>
			<Button type="dark" :href="href" :text="$t('comingsoon.buttonText')" customlink :link="'javascript:history.back()'" target="_self" />
		</div>
	</div>
</div>
</template>

<script>

import Title from './common/Title.vue'
import Button from './common/Button.vue'

export default {
	props: {
		tag: {
			type: String,
			default: 'Head'
		},
		title: {
			type: String,
			default: 'Title'
		},
		type: {
			type: String,
			default: 'light'
		}
	},
	components: {
		Title,
		Button
	},
	methods: {
		onClick(link){
			return this.$router.push(this.linkCreator(this.$i18n.locale, link))
		},
		linkCreator: function (locale, route) {
			return '/'+locale+'/' + route.toLowerCase()
		},
	}
}
</script>

<style scoped>

._container {
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 5%;
	padding-right: 5%;
}

._insideContainer {
	width: 100%;
	max-width: 1900px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

._dark{
	background-color:  #141618;
}
._light{
	background-color: white;
}

.animBackground{
	background: linear-gradient(-45deg, #E8B892, #6170B1, #E2B48E, #6170B1);
	animation: change 10s ease-in-out infinite;
	background-size: 400% 400%;
}
@keyframes change {
	0% { background-position: 0 50%; }
	50% { background-position: 50% 50%;}
	100% { background-position: 0 50%;}
}

._text{
	font-family: 'DM Sans', sans-serif;
	font-weight: 400;
	font-size: 17px;
	margin-top: -20px;
	margin-bottom: 40px;
	width: 300px;
	text-align: center;
}

@media screen and (max-width: 1023px){

}


</style>
