<template>
	<div class="container__" id="patents">
		<Title type="dark" :tag="$t('aboutus.patent.tag')" :title="$t('aboutus.patent.title')" />
		<List type="dark" :list="getList" :animation="true" />
	</div>
</template>

<script>
import Title from '../common/Title.vue'
import List from '../common/List.vue'

export default {
	name: "Patent",
	components: {
		Title,
		List,
	},
	computed: {
		getList: function() {
			return [
				{title: this.$i18n.t('aboutus.patent.patent1'), buttonText: this.$t('aboutus.patent.buttonText'), link: 'coming-soon', tag: ['patent', 'optics']},
				{title: this.$i18n.t('aboutus.patent.patent2'), buttonText: this.$t('aboutus.patent.buttonText'), link: 'coming-soon', tag: ['patent', 'optics']},
				{title: this.$i18n.t('aboutus.patent.patent3'), buttonText: this.$t('aboutus.patent.buttonText'), link: 'coming-soon', tag: ['patent', 'optics']},
				{title: this.$i18n.t('aboutus.patent.patent4'), buttonText: this.$t('aboutus.patent.buttonText'), link: 'coming-soon', tag: ['patent', 'optics']},
				{title: this.$i18n.t('aboutus.patent.patent5'), buttonText: this.$t('aboutus.patent.buttonText'), link: 'coming-soon', tag: ['patent', 'optics']},
				{title: this.$i18n.t('aboutus.patent.patent6'), buttonText: this.$t('aboutus.patent.buttonText'), link: 'coming-soon', tag: ['patent', 'optics']},
				{title: this.$i18n.t('aboutus.patent.patent7'), buttonText: this.$t('aboutus.patent.buttonText'), link: 'coming-soon', tag: ['patent', 'optics']},
				{title: this.$i18n.t('aboutus.patent.patent8'), buttonText: this.$t('aboutus.patent.buttonText'), link: 'coming-soon', tag: ['patent', 'optics']},
				{title: this.$i18n.t('aboutus.patent.patent9'), buttonText: this.$t('aboutus.patent.buttonText'), link: 'coming-soon', tag: ['patent', 'optics']},
				{title: this.$i18n.t('aboutus.patent.patent10'), buttonText: this.$t('aboutus.patent.buttonText'), link: 'coming-soon', tag: ['patent', 'optics']}
			]
		}
	},
}
</script>

<style scoped>

.container__{
	padding-top: 100px;
	max-width: 1900px;
	width: 100%;
	padding-left: 5%;
	padding-right: 5%;
	background-color: #141618;
}

</style>