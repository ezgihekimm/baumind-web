<template>
<div class="_container">
	<div class="_insideContainer">
		<div class="_title">
			<div class="_subTitle">
				<div class="dot"></div>
				<h5>TÜBİTAK TEYDEB-1501</h5>
			</div>
			<div class="_subTitle1">
				SUALTI OPTİK SPEKTRUM ÖLÇÜM CİHAZI (coCTD)
			</div>
			<div class="aims">
				{{$t('project1.amac')}}
			</div>
		</div>
		<div class="infoContainer">
			<div class="leftContainer">
				<div class="imgContainerMobile">
					<img src="@/assets/images/coSpectro.png" alt="">
				</div>
				<div class="info-ul">
					<li data-aos="fade-down" data-aos-delay="300" data-aos-offset="500px">
						<div class="dot">1</div>
						<h4>{{$t('project1.1')}}</h4>
					</li>
					<li data-aos="fade-down" data-aos-delay="400" data-aos-offset="500px">
						<div class="dot">2</div>
						<h4>{{$t('project1.2')}}</h4>
					</li>
					<li data-aos="fade-down" data-aos-delay="500" data-aos-offset="500px">
						<div class="dot">3</div>
						<h4>{{$t('project1.3')}}</h4>
					</li>
					<li data-aos="fade-down" data-aos-delay="600" data-aos-offset="500px">
						<div class="dot">4</div>
						<h4>{{$t('project1.4')}}</h4>
					</li>
				</div>
			</div>

			<div class="imgContainer" data-aos="fade-down" data-aos-delay="100" data-aos-offset="500px" >
				<img src="@/assets/images/coSpectro.png" alt="">
			</div>

			<div class="rightContainer">
				<div class="info-ul">
					<li data-aos="fade-down" data-aos-delay="700" data-aos-offset="500px">
						<div class="dot">5</div>
						<h4> {{$t('project1.5')}}</h4>
					</li>
					<li data-aos="fade-down" data-aos-delay="800" data-aos-offset="500px">
						<div class="dot">6</div>
						<h4>{{$t('project1.6')}}</h4>
					</li>
					<li data-aos="fade-down" data-aos-delay="900" data-aos-offset="500px">
						<div class="dot">7</div>
						<h4>{{$t('project1.7')}}</h4>
					</li>
					<li data-aos="fade-down" data-aos-delay="1000" data-aos-offset="500px">
						<div class="dot">8</div>
						<h4>{{$t('project1.8')}}</h4>
					</li>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>

</script>

<style scoped>
._container {
	background-color: #121619;
	width: 100%;
	font-family: 'DM Sans', sans-serif;
	color: aliceblue;
	padding-top: 3%;
	padding-left: 5%;
	padding-right: 5%;
	padding-bottom: 5%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
._insideContainer {
	max-width: 1900px;
	width: 100%;
	padding-bottom: 5%;
}
.div {
	width: 5px;
}
._title {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 5%;
	font-family: 'DM Sans', sans-serif;
}
._subTitle {
	display: flex;
	justify-content: center;
	font-size: 25px;
	color: rgb(229, 236, 243);
	font-family: 'DM Sans', sans-serif;
}
._subTitle h5 {
	margin-left: 5px;
}
._subTitle1 {
	display: flex;
	justify-content: center;
	text-align: center;
	font-size: 25px;
	color: rgb(229, 236, 243);

}
.aims {
	color: rgb(169, 167, 167);
	text-align: center;
	width: 100%;
	max-width: 600px;
	font-size: 15px;
	font-family: 'DM Sans', sans-serif;
	line-height: 1.4;
	padding-top: 15px;
}
.infoContainer {
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-top: 5%;
	max-width: 1900px;
}
._leftContainer {
	padding-top: 10%;
	display: flex;
	flex-direction: row;
}

h5,
h4 {
	color: rgb(229, 236, 243);
	font-family: 'DM Sans', sans-serif;
}
.imgContainer {
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.imgContainer img {
	width: 50%;
	max-width: 250px;
	object-fit: cover;
}
.dot {
	height: 5px;
	width: 5px;
	background-color: rgb(229, 236, 243);
	border-radius: 50%;
	display: flex;
	align-self: center;
}
.info-ul {
	display: flex;
	flex-direction: column;
	justify-content: start;
}
.info-ul li {
	display: flex;
	align-items: center;
	padding-bottom: 30px;
}
.info-ul li h4 {
	font-size: 20px;
	color: rgb(229, 236, 243);
	font-family: 'DM Sans', sans-serif;

}
.info {
	background-color: #F2F4F8;
	width: 35%;
	height: 40vh;
}

.info-ul li .dot {
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid rgb(229, 236, 243);
	border-radius: 100px;
	min-width: 20px;
	min-height: 20px;
	margin-right: 10px;
	font-size: 12px;
	color: rgb(229, 236, 243);
	background-color: #121619;
}

.imgContainerMobile {
	display: none;
}

.imgContainerMobile img {
	width: 50%;
	max-width: 250px;
	object-fit: cover;
}

@media screen and (max-width: 1023px) {
	._insideContainer {
		flex-direction: column;
	}

	.infoContainer {
		flex-direction: column;
		padding-top: 40px;
	}

	._title {
		padding-top: 40px;
	}

	.info-ul li h4 {
		font-size: 17px;
		color: rgb(229, 236, 243);
		font-family: 'DM Sans', sans-serif;
	}

	.info-ul li {
		padding-bottom: 0px;

	}

	.imgContainer {
		display: none;
	}

	.imgContainerMobile {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
}
</style>
