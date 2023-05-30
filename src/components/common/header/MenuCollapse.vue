<template>
<div id="sideNav" class="_container">
	<div class="insideContainer">
		<div class="closeContainer" @click="closeNav">
			<img src="@/assets/images/close.png" alt="" class="close">
		</div>
		<div class="contentContainer">
			<img src="@/assets/images/logo.png" alt="" class="logo">
			<div class="companyName">{{$t('footer.bau')}}</div>
			<div class="_title">{{$t('contactus.address')}}</div>
			<div class="_subtitle">{{$t('contactus.fulladdress')}}</div>
			<div class="_title">{{$t('contactus.phone')}}</div>
			<div class="_subtitle">+90 212 381 0970</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: "MenuCollapse",
	props: {
		toggle: {
			type: Boolean
		}
	},
	data() {
		return {
			collapsed: true,
			windowWidth: window.innerWidth
		}
	},
	mounted(){
		window.addEventListener('resize', () => {
    		this.windowWidth = window.innerWidth
  		})
	},
	watch: {
		toggle: function(newVal, oldVal) {
			if(!this.collapsed) { this.closeNav(); }
			else{ this.openNav(); }
		},
		windowWidth: function(newVal, oldVal) {
			if(this.windowWidth <= 1023 && !this.collapsed) {
				this.closeNav();
			}
		}
	},
	methods: {
		openNav() {
			// if width  > 1023
			if(this.windowWidth > 1023) {
				document.getElementById("sideNav").style.width = "450px";
				this.collapsed = false;
			}
		},
		closeNav() {
			document.getElementById("sideNav").style.width = "0";
			this.collapsed = true;
		}
	}
}
</script>

<style scoped>

._container {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 101;
	top: 0;
	right: 0;
	background-color: #ffffff;
	overflow-x: hidden;
	transition: 0.8s;
	-webkit-transition: 0.8s;
	box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
	display: flex;
}

.insideContainer{
	min-width: 450px;
	display: flex;
	flex-direction: column;
}

.closeContainer{
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-top: 32px;
	padding-right: 81px;
	cursor: pointer;
}

	.close{
		width: 23px;
		object-fit: contain;
		display: flex;
	}

.contentContainer{
	padding: 0 80px;
	margin-top: 60px;
}

	.logo{
		width: 100px;
		object-fit: contain;
		margin-bottom: 20px;
	}

	.companyName{
		width: 100%;
		display: flex;
		padding-top: 10px;
		font-family: 'DM Sans', sans-serif;
		font-size: 22px;
		/* font-weight: 500; */
	}

	._title{
		padding-top: 40px;
		width: 100%;
		display: flex;
		font-family: 'DM Sans', sans-serif;
		font-size: 18px;
		font-weight: 500;
	}

	._subtitle{
		padding-top: 10px;
		width: 100%;
		display: flex;
		font-family: 'DM Sans', sans-serif;
		font-weight: 300;
		font-size: 15px;
		line-height: 30px;
	}

</style>