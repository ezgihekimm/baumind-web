<template>
	<div class="_container" :class="{
				'_fixed': type == 'fixed',
				'_relative': type == 'white' || type == 'black',
				'_absolute': type == 'transparent' || type == 'transparentBlack',

				'_white': type == 'white',
				'_black': type == 'black',
				'_transparent': type == 'transparent',
				'_transparentBlack': type == 'transparentBlack',
				}">
		<div class="_container_inside" :class="{'_border': border}">
			<div class="logo">
				<router-link :to="linkCreator(this.$i18n.locale, '')" custom v-slot="{ navigate, href }">
					<a :href="href" @click="navigate">
						<img src="@/assets/images/logo.png" style="height: 50px">
					</a>
				</router-link>
			</div>
			<div class="list" :class="{_fixedList: type == 'fixed'}" id="_list">
				<ul>
					<li>
						<router-link :to="linkCreator(this.$i18n.locale, '')" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate" class="menu-item" :class="{'whiteLine': type == 'transparent' || type == 'black', 'blackLine': type == 'white' || type == 'transparentBlack' || type == 'fixed'}">
								<i :class="[isActiveRoute(href) ? 'fa-solid' : 'fa-regular', 'fa-circle', 'circle']"></i>
								<div class="menuTitle">{{ $t('header.home')}}</div>
								<i class="fa-solid fa-chevron-right arrowRight"></i>
							</a>
						</router-link>
					</li>

					<li>
						<router-link :to="linkCreator(this.$i18n.locale, 'about-us')" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate" class="menu-item" :class="{'whiteLine': type == 'transparent' || type == 'black', 'blackLine': type == 'white' || type == 'transparentBlack' || type == 'fixed'}">
								<i :class="[isActiveRoute(href) ? 'fa-solid' : 'fa-regular', 'fa-circle', 'circle']"></i>
								<div class="menuTitle">{{ $t('header.about-us')}}</div>
								<i class="fa-solid fa-chevron-right arrowRight"></i>
							</a>
						</router-link>
					</li>

					<li>
						<router-link :to="linkCreator(this.$i18n.locale, 'products')" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate" class="menu-item" :class="{'whiteLine': type == 'transparent' || type == 'black', 'blackLine': type == 'white' || type == 'transparentBlack' || type == 'fixed'}">
								<i :class="[isActiveRoute(href) ? 'fa-solid' : 'fa-regular', 'fa-circle', 'circle']"></i>
								<div class="menuTitle">{{ $t('header.products')}}</div>
								<i class="fa-solid fa-chevron-right arrowRight"></i>
							</a>
						</router-link>
					</li>

					<li>
						<router-link :to="linkCreator(this.$i18n.locale, 'projects')" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate" class="menu-item" :class="{'whiteLine': type == 'transparent' || type == 'black', 'blackLine': type == 'white' || type == 'transparentBlack' || type == 'fixed'}">
								<i :class="[isActiveRoute(href) ? 'fa-solid' : 'fa-regular', 'fa-circle', 'circle']"></i>
								<div class="menuTitle">{{ $t('header.projects')}}</div>
								<i class="fa-solid fa-chevron-right arrowRight"></i>
							</a>
						</router-link>
					</li>

					<li>
						<router-link :to="linkCreator(this.$i18n.locale, 'contact-us')" custom v-slot="{ navigate, href }">
							<a :href="href" @click="navigate" class="menu-item" :class="{'whiteLine': type == 'transparent' || type == 'black', 'blackLine': type == 'white' || type == 'transparentBlack' || type == 'fixed'}">
								<i :class="[isActiveRoute(href) ? 'fa-solid' : 'fa-regular', 'fa-circle', 'circle']"></i>
								<div class="menuTitle">{{ $t('header.contact-us')}}</div>
								<i class="fa-solid fa-chevron-right arrowRight"></i>
							</a>
						</router-link>
					</li>
				</ul>
			</div>

			<div class="space"></div>

			<LanguageSwitcher :type="type" />
			<MenuIcon :type="type" @toggleMenu="toggleMenu" />

		</div>
	</div>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue'
import MenuIcon from './MenuIcon.vue'

export default {
	name: "HeaderInside",
	props: {
		type: {
			type: String
		},
		border: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isMenuOpen: false,
			windowWidth: window.innerWidth
		}
	},
	mounted(){
		window.addEventListener('resize', () => {
    		this.windowWidth = window.innerWidth
  		})
	},
	watch: {
		windowWidth: function(newVal, oldVal) {
			if(this.windowWidth > 1023) {
				document.getElementById("_list").style.height = "70px";
			}else{
				document.getElementById("_list").style.transition = "none";
				document.getElementById("_list").style.height = "0";
				this.isMenuOpen = false;
			}
		}
	},
	components: {
		LanguageSwitcher,
		MenuIcon
	},
	mounted(){
		window.addEventListener('scroll', this.handleScroll)
	},
	beforeUnmount(){
		window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		linkCreator: function (locale, route) {
			return '/'+locale+'/' + route.toLowerCase()
		},
		toggleMenu() {
			if(window.innerWidth <= 1023) {
				document.getElementById("_list").style.transition = "height 0.5s ease-in-out";
				if(this.isMenuOpen){
					document.getElementById("_list").style.height = "0";
					this.isMenuOpen = false;
				}else{
					document.getElementById("_list").style.height = "280px";
					this.isMenuOpen = true;
				}
			}else{
				this.$emit('toggleMenu')
			}
		},
		isActiveRoute(href) {
			// Eger /lang/path/another-path ise /lang/path iconu aktif olmali
			if(this.$router.currentRoute._rawValue.fullPath.split("/").length > 3){
				return this.$router.currentRoute._rawValue.fullPath.split("/")[2] === href.split("/")[2]
			}else{
				return href === this.$router.currentRoute._rawValue.fullPath
			}
		},
		handleScroll() {
			if(window.innerWidth > 1023){
				if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
					document.getElementsByClassName("_fixed")[0].style.top = "0";
				} else {
					document.getElementsByClassName("_fixed")[0].style.top = "-70px";
				}
			}
		}
	}
}

</script>

<style scoped>

._container{
	width: 100%;
	display: flex;
	justify-content: center;
	height: 70px;
	z-index: 10;
	transition-duration: 0.5s;
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

._relative{
	position: relative;
	top: 0;
	left: 0;
	right: 0;
}

._fixed{
	position: fixed;
	top: -70px;
	background-color: white;
	box-shadow: 0 0 12px rgb(0 0 0 / 6%);
}

._absolute{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
}
._white{ background-color: white; }
._white .list ul li a.menu-item { color: black; }
._black{ background-color: #131619 }
._black .list ul li a.menu-item { color: white; }
._transparent{ background-color: transparent; }
._transparent .list ul li a.menu-item { color: white; }
._transparentBlack{ background-color: transparent; }
._transparentBlack .list ul li a.menu-item { color: black; }
._fixed .list ul li a.menu-item { color: black; }
._border{
	border-bottom-color: rgba(0,0,0,0.22);
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

.logo {
	display: flex;
	height: 70px;
	justify-content: center;
	align-items: center;
}

.list {
	display: flex;
	flex-grow: 1;
	justify-content: center;
	align-items: center;
	color: black;
}

.list ul {
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;
}
.list ul li {
	display: flex;
	flex-direction: row;
	justify-content: center;
	list-style: square;
	margin-right: 20px;
	margin-left: 15px;
	padding: 20px 0;
}
.list ul li a.menu-item {
	text-decoration: none;
	font-family: 'DM Sans', sans-serif;
	font-size: 16px;
	display: flex;
	flex-direction: row;
	align-items: center;
	transition: color 0.5s;
	height: 30px;

	background-size: 0% 1px;
	background-position: 0% 100%;
	background-repeat: no-repeat;
	transition: background 0.3s linear;
}
.whiteLine{
	background-image: linear-gradient(white, white);
}
.blackLine{
	background-image: linear-gradient(black, black);
}
.list ul li a.menu-item:hover{
	/* background-size: 100% 1px; */
}

.list ul li a i {
	font-size: 6px;
	padding-right: 5px;
}

.list ul li a i.arrowRight {
	display: none;
}

.space{
	flex: 1;
	flex-grow: 1;
	display: none;
}

.nodisplay{
	display: none !important;
}

@media screen and (max-width: 1023px) {

	._fixedList{
		display: none !important;
	}

	.list {
		position: absolute;
		top: 70px;
		left: 0;
		right: 0;
		background-color: white;
		height: 0;
		overflow: hidden;
		transition: height 0.5s ease-in-out;
		box-shadow: 0 12px 12px -12px rgb(0 0 0 / 6%);
	}

	.list ul{
		display: flex;
		flex-grow: 1;
		flex-direction: column;
		align-items: flex-start;
	}

	.list ul li{
		width: 100%;
		display: flex;
		justify-content: flex-start;
		margin: 0;
		padding: 0;
	}

	.list ul li a.menu-item {
		display: flex;
		flex-direction: row;
		width: 100%;
		padding-left: 5%;
		padding-right: 5%;
		padding-top: 25px;
		padding-bottom: 25px;
	}

	.list ul li:first-child a.menu-item{
		padding-top: 40px;
	}
	.list ul li:last-child a.menu-item{
		padding-bottom: 40px;
	}

	.list ul li a.menu-item:hover {
		background-size: 0;
	}

	.list ul li a.menu-item .menuTitle {
		display: flex;
		background-size: 0% 1px;
		background-position: 0% 100%;
		background-repeat: no-repeat;
		transition: background 0.3s linear;
		background-image: linear-gradient(black, black);
	}
	.list ul li a.menu-item:hover .menuTitle {
		background-size: 100% 1px;
	}
	.list ul li a.menu-item i.circle {
		display: none;
	}
	.list ul li a.menu-item i.arrowRight {
		font-size: 16px;
		display: flex;
		flex-grow: 1;
		justify-content: flex-end;
	}


	._black .list ul li a.menu-item {
		color: black !important;
	}
	._transparent .list ul li a.menu-item {
		color: black !important;
	}
	._transparentBlack .list ul li a.menu-item {
		color: black !important;
	}
	.space{
		display: block;
	}
	._black{
		background-color: white;
	}
	._transparent{
		background-color: white;
	}
	._transparentBlack{
		background-color: white;
	}

	._container{
		box-shadow: 0 0 12px rgb(0 0 0 / 6%);
	}
}
</style>