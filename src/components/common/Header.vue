<template>
	<div>
		<HeaderInside @toggleMenu="toggleMenu" :type="type" :border="border" />
		<HeaderInside @toggleMenu="toggleMenu" type="fixed" />
		<MenuCollapse :toggle="toggle" />
	</div>
</template>

<script>
import HeaderInside from './header/HeaderInside.vue'
import MenuCollapse from './header/MenuCollapse.vue'

export default {
	name: 'Header',
	props: {
		type: {
			type: String,
		},
		border: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			toggle: false,
		}
	},
	components: {
		HeaderInside,
		MenuCollapse
	},
	methods: {
		toggleMenu() {
			this.toggle = !this.toggle;
		}
	}
}
</script>