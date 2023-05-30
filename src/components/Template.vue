<template>
<div class="_container" :class="{_dark: type == 'dark', _light: type == 'light'}">
	<div class="_insideContainer">
		<Title :title="title" :tag="head" :type="type == 'dark' ? 'dark' : 'light'"/>
		
		<!-- Content Here -->
		
	</div>
</div>
</template>

<script>

import Title from './common/Title.vue'

export default {
	props: {
		head: {
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
		Title
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
