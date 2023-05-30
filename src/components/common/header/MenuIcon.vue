<template>
	<div class="_containerMenuIcon" @click="openNav">
		<div v-if="showBurger" class="burger" :class="{
			white: type == 'black' || type == 'transparent',
			black: type == 'white' || type == 'fixed' || type == 'transparentBlack'
			}"></div>
		<div v-if="showClose" class="close" :class="{
			white: type == 'black' || type == 'transparent',
			black: type == 'white' || type == 'fixed'
			}"></div>
	</div>
</template>

<script>
export default {
	name: "Burger",
	props: {
		type: {
			type: String
		}
	},
	data() {
		return {
			showClose: false,
			showBurger: true,
			isToggle: true,
			windowWidth: window.innerWidth
		}
	},
	mounted() {
		window.addEventListener('resize', () => {
			this.windowWidth = window.innerWidth
		})
	},
	watch: {
		windowWidth: function(newVal, oldVal) {
			if(this.windowWidth > 1023 && !this.isToggle) {
				this.showBurger = true;
				this.showClose = false;
				this.isToggle = true;
			}else if(this.windowWidth <= 1023 && !this.isToggle) {
				this.showBurger = true;
				this.showClose = false;
				this.isToggle = true;
			}
		}
	},
	methods: {
		openNav() {
			if(window.innerWidth <= 1023) {
				if(this.isToggle){
					this.showBurger = false;
					this.showClose = true;
					this.isToggle = false;
				}else{
					this.showBurger = true;
					this.showClose = false;
					this.isToggle = true;
				}
			}
			this.$emit('toggleMenu')
		}
	}
}
</script>

<style scoped>

._containerMenuIcon{
	width: 40px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}

.burger {
  display: flex;
  transition: all 250ms ease-out;
  cursor: pointer;
  width: 40px;
}
.burger:before, .burger:after {
  content: '';
  width: 40px;
  height: 2px;
  position: absolute;
  transition: all 250ms ease-out;
  will-change: transform;
}
.burger:before { transform: translateY(-6px); }
.burger:after { transform: translateY(6px); }


.close {
	display: block;
	transition: all 250ms ease-out;
	cursor: pointer;
	width: 2px;
	height: 22px;
}
.close:before, .close:after {
	content: ' ';
	width: 2px;
	height: 25px;
	position: absolute;
	background-color: #333;
	transition: all 250ms ease-out;
  	will-change: transform;
}
.close:before { transform: rotate(45deg); }
.close:after { transform: rotate(-45deg); }

.white:before, .white:after { background: white; }
.black:before, .black:after { background: black; }


@media screen and (max-width: 1023px) {

	.white:before, .white:after {
		background: black;
	}

}




</style>