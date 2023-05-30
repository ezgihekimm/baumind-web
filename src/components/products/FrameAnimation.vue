<template>
<div class="_container" :class="{_dark: type == 'dark', _light: type == 'light'}">
	<div class="_insideContainer">
		<Title :title="title" :tag="head" :type="type == 'dark' ? 'dark' : 'light'"/>
		
		<!-- Content Here -->
		<FrameAnim />
		
	</div>
</div>
</template>

<script>

import Button from './common/Button.vue'
import Title from './common/Title.vue'
import FrameAnim from './common/FrameAnim.vue'

export default {
	props: {
		head: {
			type: String,
		},
		title: {
			type: String
		},
		type: {
			type: String,
			default: 'light'
		}
	},
	components: {
		Button,
		Title,
		FrameAnim
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
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 5%;
	padding-right: 5%;
	padding-top: 100px;
	padding-bottom: 100px;
}

._insideContainer {
	width: 100%;
	max-width: 1900px;
}

._dark{
	background-color:  #141618;
}
._light{
	background-color: white;
}


@media screen and (max-width: 1023px){

}


</style>
