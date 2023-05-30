<template>
	<div class="_container">
		<div class="_container_inside">
			<Title type="dark" :tag="$t('home.latestPatents.tag')" :title="$t('home.latestPatents.title')" />
			<List type="dark" :list="items" :seemore="true" seemorelink="about-us#patents" :seemoretext="$t('home.latestPatents.seemore')" :endline="true" :animation="true" />
		</div>
	</div>
</template>

<script>
import List from '../common/List.vue'
import Title from '../common/Title.vue'

export default {
	name: 'LatestPatents',
	components: {
		List,
		Title
	},
	computed: {
		items() {
			return [
				{title: this.$t('home.latestPatents.patent1'), buttonText: this.$t('home.latestPatents.buttonText'), link: 'coming-soon', tag: [this.$t('home.latestPatents.patent1-tag1'), this.$t('home.latestPatents.patent1-tag2')]},
				{title: this.$t('home.latestPatents.patent2'), buttonText: this.$t('home.latestPatents.buttonText'), link: 'coming-soon', tag: [this.$t('home.latestPatents.patent2-tag1'), this.$t('home.latestPatents.patent2-tag2')]},
				{title: this.$t('home.latestPatents.patent3'), buttonText: this.$t('home.latestPatents.buttonText'), link: 'coming-soon', tag: [this.$t('home.latestPatents.patent3-tag1'), this.$t('home.latestPatents.patent3-tag2')]},
			]
		}
	},
	methods: {
		linkCreator: function (locale, route) {
			return '/'+locale+'/' + route.toLowerCase()
		},
	},
}
</script>

<style scoped>

._container{
	width: 100%;
	display: flex;
	justify-content: center;
	background-color: #141618;
	margin-top: -250px;
	padding-top: 250px;
}

._container_inside{
	width: 100%;
	max-width: 1900px;
	display: flex;
	flex-direction: column;
	padding-top: 110px;
	margin-left: 5%;
	margin-right: 5%;
}

</style>