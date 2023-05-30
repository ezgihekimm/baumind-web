<template>
	<div :class="{_outContainer: framed, __blackOut: type == 'dark'}">
		<div class="__titleContainer" :class="{__black: type == 'dark', __white: type == 'light', _inContainer: framed, _center: center}">
			<div class="tag">&bull; {{tag}}</div>
			<div class="title">{{title}}</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Title',
	props: {
		title: {
			type: String,
			required: true
		},
		tag: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: 'dark',
			validator: function(value) {
				return ['dark', 'light'].indexOf(value) !== -1
			}
		},
		framed: {
			type: Boolean,
			default: false
		},
		center: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style>

._outContainer{
	width: 100%;
	display: flex;
	justify-content: center;
	transition-duration: 0.5s;
	padding-top: 50px;
	background-color: white;
}

._inContainer{
	width: 100%;
	max-width: 1900px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-left: 5%;
	margin-right: 5%;
}

.__blackOut{
	background-color: #141618;
}

._center{
	display: flex;
	flex-direction: column;
	align-items: center;
}

.tag{
	font-family: "DM Sans",sans-serif;
	font-weight: 500;
	font-size: 12px;
	line-height: 1.5em;
	letter-spacing: .13em;
	text-transform: uppercase;
	margin-bottom: 11px;
}

.title{
	font-family: "DM Sans",sans-serif;
	font-weight: 500;
	font-size: 44px;
	line-height: 1.23em;
	margin-bottom: 50px;
}

.__black{
	color: white;
}

.__white{
	color: black;
}

</style>