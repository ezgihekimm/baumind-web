<template>
	<div class="__container">
		<div class="_row">

			<div class="img" data-aos='fade-right'>
				<img src="@/assets/images/about-us/aboutus.jpg">
			</div>

			<div class="info">
				<h2 class="about">{{$t('aboutus.whoarewe')}}</h2>
				<p class="info1">{{$t('aboutus.whoarewe-content-long')}}</p>
				<h2 class="History">{{$t('aboutus.history')}}:</h2>
				<div class="info2">
					<ul class="info-ul">
						<li>
							<div class="dot">1</div>
							{{$t('aboutus.history1')}}
						</li>
						<li>
							<div class="dot">2</div>
							{{$t('aboutus.history2')}}
						</li>
						<li>
							<div class="dot">3</div>
							{{$t('aboutus.history3')}}
						</li>
							<li>
							<div class="dot">4</div>
							{{$t('aboutus.history4')}}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WhoAreWe',
}
</script>

<style scoped>

* {
	margin: 0;
	padding: 0;
}

.__container {
	width: 100%;
	color: rgb(255, 255, 255);
	background: linear-gradient(-45deg, #E8B892, #6170B1, #E2B48E, #6170B1);
	background-size: 400% 400%;
	position: relative;
	animation: change 10s ease-in-out infinite;
	padding: 5%;
	font-family: 'DM Sans', sans-serif;
	display: flex;
	justify-content: center;
}

._row{
	display: flex;
	flex-direction: row;
	width: 100%;
	max-width: 1900px;
}

.img {
	display: flex;
	width: 70%;
	justify-content: center;
	margin-right: 50px;
}

.img img {
	width: 100%;
	height: auto;
	object-fit: cover;
	transition: transform .2s;
}

.info {
	display: flex;
	width: 100%;
	flex-direction: column;
	color: black;
}

.info .head:before {
	content: '\25cb\a0';
	font-size: 11px;
}

.about {
	font-size: 50px;
	padding-bottom: 20px;
}

.info1 {
	padding-bottom: 60px;
	font-size: 15px;
}

.History {
	padding-bottom: 20px;
}

.info-ul {
	list-style: none;
}

.info-ul li {
	padding-bottom: 5px;
	display: flex;
	align-items: center;
	padding-bottom: 15px;
	font-size: 15px;
}

.info-ul li .dot {
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid black;
	border-radius: 100px;
	min-width: 23px;
	min-height: 23px;
	margin-right: 10px;
	font-size: 14px;
}

@keyframes change {
	0% { background-position: 0 50%; }
	50% { background-position: 50% 50%; }
	100% { background-position: 0 50%; }
}

@media screen and (max-width: 1023px){

	._row{
		flex-direction: column;
	}

	.img{
		width: 100%;
		margin-bottom: 5%;
	}
}

</style>