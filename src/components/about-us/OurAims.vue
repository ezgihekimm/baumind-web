<template>
<div class="_container" :class="{_dark: type == 'dark', _light: type == 'light'}">
	<div class="_insideContainer">
		<Title :title="title" :tag="head" :type="type == 'dark' ? 'dark' : 'light'"/>
		
		<!-- Content Here -->
		<div class="aimsContainer" v-for="(item, index) in aims" :key="index" data-aos="fade-right" :data-aos-delay="index * 100">
			<div class="_number">{{ index + 1 }}</div>
			<div class="_content">{{ item }}</div>
		</div>
		
	</div>
</div>
</template>

<script>

import Title from '../common/Title.vue'

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
	},
	computed: {
		aims: function() {
			return [
				this.$t('aboutus.aims1'),
				this.$t('aboutus.aims2'),
				this.$t('aboutus.aims3')
			]
		}
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

.aimsContainer{
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	font-family: 'DM Sans', sans-serif;
	color: black;
	margin-bottom: 30px;
}

.aimsContainer ._number{
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	border-radius: 100px;
	min-width: 23px;
	min-height: 23px;
	margin-right: 10px;
	margin-top: 5px;
	font-size: 14px;
}
.aimsContainer ._content{
	font-size: 18px;
	font-weight: 400;
}

@media screen and (max-width: 1023px){
	.aimsContainer ._content{
		font-size: 15px;
	}
}


</style>
