<template>
	<div class="_container">
		<div class="_insideContainer">
			<div class="logoContainer" id="item1">
				<img class="logoImg" src="@/assets/images/logo1.png" >
			</div>

			<div class="line"></div>
			
			<div class="infoContainer">
				<p>© 2022&nbsp;<span>{{$t('footer.bau')}}</span></p>
				<p>{{$t('footer.rights')}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style scoped>

._container {
	width: 100%;
	background-color: #141618;
	font-family: 'DM Sans', sans-serif;
	margin: 0;
	display: flex;
	justify-content: center;
}

._insideContainer {
	width: 100%;
	max-width: 1900px;
	padding: 40px 5%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.logoContainer{
	display: flex;
	justify-content: center;
	align-items: center;
}

.logoImg{
	max-height: 80px;
	object-fit: contain;
}

.line{
	display: none;
}

.infoContainer{
	color: #676767;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	/* border: 1px solid red; */
}
.infoContainer p{
	margin: 0;
	padding: 0;
	line-height: 30px;
	text-align: center;
}
.infoContainer span{
	color: white;
	opacity: 0.8;
}

/* if width > 1023 */
@media screen and (max-width: 1023px) {
	
	._insideContainer{
		flex-direction: column;
	}
	.line{
		width: 100%;
		height: 0.5px;
		background-color: #ffffff;
		margin: 20px 0;
		opacity: 0.1;
	}
	.logoContainer{
		justify-content: center;
		margin-bottom: 10px;
	}
	.infoContainer{
		align-items: center;
	}
}

</style>