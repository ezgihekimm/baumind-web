<template>
	<div class="_container">
		<div class="_block" id="_block1">
			<div class="_insideBlock" id="_insideBlock1" @click="onclick(linkCreator(this.$i18n.locale, 'contact-us'))">
				<div class="_title" id="_title1">{{$t('header.contact-us')}}</div>
				<div class="iconContainer" id="_icon1">
					<span id="arrow1" class="material-symbols-outlined arrow">north_east</span>
					<span id="arrow2" class="material-symbols-outlined arrow">north_east</span>
				</div>
			</div>
		</div>
		<div class="_block" id="_block2">
			<div class="_insideBlock" id="_insideBlock2" @click="onclick(linkCreator(this.$i18n.locale, 'coming-soon'))">
				<div class="_title" id="_title2">{{$t('header.human-res')}}</div>
				<div class="iconContainer" id="_icon2">
					<span id="arrow1" class="material-symbols-outlined arrow">north_east</span>
					<span id="arrow2" class="material-symbols-outlined arrow">north_east</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContactHome',
	methods: {
		onclick(link){
			console.log(link)
			this.$router.push(link)
		},
		linkCreator: function (locale, route) {
			return '/'+locale+'/' + route.toLowerCase()
		},
	}
}
</script>

<style scoped>

._container {
	display: flex;
	flex-direction: row;
}

._container ._block {
	width: 100%;
	height: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
}

._container ._block ._insideBlock{
	position: relative;
	display: flex;
	padding-right: 52px;
	cursor: pointer;
	user-select: none;
}

#_block1{
	background: linear-gradient(-45deg, #E8B892, #6170B1, #E2B48E, #6170B1);
	animation: change 10s ease-in-out infinite;
	background-size: 400% 400%;
}
#_block2{
	background-color: #F2F4F8;
}

._container ._block ._title {
	font-family: 'DM Sans', sans-serif;
	font-size: 28px;
	font-weight: 400;
	display: flex;

	background-repeat: no-repeat;
	background-position-y: -5px;
	background-image: linear-gradient(transparent calc(100% - 1px),currentColor 1px);
	transition: .6s cubic-bezier(.215,.61,.355,1);
	background-size: 100% 100%;
	background-position-x: 0;
}
#_insideBlock1:hover #_title1{
	animation-name: underline-short;
	animation-direction: normal;
	animation-delay: 0;
	animation-duration: 1s;
	animation-fill-mode: forwards;
}
#_insideBlock2:hover #_title2{
	animation-name: underline;
	animation-direction: normal;
	animation-delay: 0;
	animation-duration: 1s;
	animation-fill-mode: forwards;
}
#_insideBlock1:hover #_icon1 span#arrow1{
	transform: translateY(-100%) translateX(100%);
}
#_insideBlock1:hover #_icon1 span#arrow2{
	transform: translateY(0%) translateX(0%);
}
#_insideBlock2:hover #_icon2 span#arrow1{
	transform: translateY(-100%) translateX(100%);
}
#_insideBlock2:hover #_icon2 span#arrow2{
	transform: translateY(0%) translateX(0%);
}
@keyframes underline {
	0% { background-position-x: 0; }
	50% { background-position-x: 210px;}
	51% { background-position-x: -210px;}
	100% { background-position-x: 0;}
}
@keyframes underline-short {
	0% { background-position-x: 0; }
	50% { background-position-x: 140px;}
	51% { background-position-x: -140px;}
	100% { background-position-x: 0;}
}

.iconContainer{
	width: 22px;
	height: 22px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	right: 19px;
	top: 50%;
	transform: translateY(-55%);
	overflow: hidden;
}

.iconContainer span#arrow1{
	font-size: 32px;
	display: block;
	position: absolute;
	z-index: 2;
	transform: translateY(0%) translateX(0%);
	transition: transform .4s ease-in-out;
}
.iconContainer span#arrow2{
	font-size: 32px;
	display: block;
	position: absolute;
	z-index: 3;
	transform: translateY(100%) translateX(-100%);
	transition: transform .4s ease-in-out;
}

@keyframes change {
	0% { background-position: 0 50%; }
	50% { background-position: 50% 50%; }
	100% { background-position: 0 50%; }
}

@media screen and (max-width: 768px) {
	._container {
		flex-direction: column;
	}
	._container ._block {
		height: 300px;
	}
}

</style>