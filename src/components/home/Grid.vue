<template>
	<div class="_container">
		<div class="_container_inside">
			<div class="_column">
				<div class="_row">
					<div class="_box animBackground" @click="onclick('coming-soon')">
						<div class="__title">{{$t('home.grid.title1')}}</div>
						<div class="tagContainer">
							<div class="_tag">{{$t('home.grid.tag1_1')}}</div>
							<div class="_tag">{{$t('home.grid.tag1_2')}}</div>
						</div>
					</div>
					<div class="_box grayBackground" @click="onclick('coming-soon')">
						<div class="__title">{{$t('home.grid.title2')}}</div>
						<div class="tagContainer">
							<div class="_tag">{{$t('home.grid.tag2_1')}}</div>
							<div class="_tag">{{$t('home.grid.tag2_2')}}</div>
						</div>
					</div>
				</div>
				<div class="_row">
					<div class="_box _big imgBackground" :style="{ backgroundImage: 'url(' + require('@/assets/images/products/colink/colink3.png') + ')' }">
						<div class="__title">{{$t('home.grid.title3')}}</div>
						<div class="desc">{{$t('home.grid.subtitle3')}}</div>
						<div class="tagContainer">
							<Button type="dark" :text="$t('home.grid.exploreButton')" link="coming-soon" />
						</div>
					</div>
				</div>
			</div>
			<div class="_column">
				<div class="_row">
					<div class="_box _big animBackground">
						<div class="__title">{{$t('home.grid.title4')}}</div>
						<div class="desc">{{$t('home.grid.subtitle4')}}</div>
						<div class="tagContainer">
							<Button type="dark" :text="$t('home.grid.exploreButton')" customlink link="https://yetenek12.com" />
						</div>
					</div>
				</div>
				<div class="_row">
					<div class="_box grayBackground" @click="onclick('projects/denizaltilarda-oz-akustik-kestirimi-ve-akustik-izlemeuyari-sistemi')">
						<div class="__title">{{$t('home.grid.title6')}}</div>
						<div class="tagContainer">
							<div class="_tag">{{$t('home.grid.tag6_1')}}</div>
							<div class="_tag">{{$t('home.grid.tag6_2')}}</div>
						</div>
					</div>
					<div class="_box imgBackground" :style="{ backgroundImage: 'url(' + require('@/assets/images/products/colighting/colighting-grid2.png') + ')' }" @click="onclick('products/co-lighting')">
						<div class="__title">{{$t('home.grid.title5')}}</div>
						<div class="tagContainer">
							<div class="_tag">{{$t('home.grid.tag5_1')}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import Button from "../common/Button.vue"

export default {
	name: 'Grid',
	components: {
		Button,
	},
	methods: {
		onclick: function (path) {
			this.$router.push(this.linkCreator(this.$i18n.locale, path))
		},
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
	flex-direction: row;
	justify-content: center;
	transition-duration: 0.5s;
	background-color: white;
	/* margin-bottom: 100px; */
	/* margin-top: 50px; */
}

._container_inside{
	width: 100%;
	max-width: 1900px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-left: 5%;
	margin-right: 5%;
}

._column{
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	overflow: hidden;
}
._row{
	display: flex;
	flex-direction: row;
	overflow: hidden;
}
._box{
	display: flex;
	height: 400px;
	flex-grow: 1;
	flex-direction: column;
	padding-top: 33px;
	padding-left: 26px;
	padding-right: 26px;
	padding-bottom: 140px;
	cursor: pointer;
}
._big{
	height: 700px;
	/* padding-bottom: 400px; */
}
._box .__title{
	width: 100%;
	max-width: 250px;
	font-family: "DM Sans", sans-serif;
	font-size: 28px;
	font-style: normal;
	font-weight: 500;
	color: black;
}
._box .desc{
	width: 250px;
	font-family: "DM Sans", sans-serif;
	font-size: 17px;
	font-style: normal;
	font-weight: 400;
	color: rgb(34, 34, 34);
	margin-top: 20px;
}
._box .tagContainer{
	display: flex;
	flex-direction: row;
	margin-top: 20px;
}
._box .tagContainer ._tag{
	cursor: pointer;
	font-family: "DM Sans", sans-serif;
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	border: 1px solid black;
	border-radius: 100px;
	padding: 3px 12px;
	margin-right: 10px;
	transition: all .2s ease;
	user-select: none;
	color: black;
	text-transform: capitalize;
}
._box .tagContainer ._tag:hover{
	background-color: black;
	color: white;
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

.grayBackground{
	background-color: #F0F2F7;
}

.imgBackground{
	background-position-x: 50%;
	background-position-y: 50%;
	background-size: cover;
	background-repeat: no-repeat;
}

/* 768 to 1023 px */
@media screen and (min-width: 768px) and (max-width: 1023px) {
	._container_inside{
		flex-direction: column;
	}
}

@media screen and (max-width: 768px) {
	._container_inside{
		flex-direction: column;
	}
	._row{
		flex-direction: column;
	}
	._box{
		width: 100%;
	}
	._big{
		height: 400px;
	}
}

</style>