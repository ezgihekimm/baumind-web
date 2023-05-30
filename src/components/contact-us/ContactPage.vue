<template>
	<div class="_container">
		<div class="_insideContainer">
			<div class="leftContainer">
				<div class="titleContainer">
					<Title type="light" :tag="$t('contactus.tag')" :title="$t('contactus.title')"  />
				</div>
				<div class="_head">
					{{$t('footer.bau')}}
				</div>
				<div class="_item1">
					<span>{{$t('contactus.phone')}}</span><br>+90 212 381 0970
				</div>
				<div class="_item2">
					<span>{{$t('contactus.address')}}</span><br>{{$t('contactus.fulladdress')}}
				</div>
			</div>

			<div class="rightContainer">
				<div class="_head1">
					<h4>{{$t('contactus.form')}}:</h4>
				</div>
				<div class="item1">
					<input v-model="message1" :placeholder="$t('contactus.formEmail')"/>
				</div>
				<div class="item1">
					<input v-model="message2" :placeholder="$t('contactus.formName')"/>
				</div>
				<div class="item1">
					<textarea v-model="message3" :placeholder="$t('contactus.formMessage')"></textarea>
				</div>
				<div class="_buttonContainer">
					<Button :text="$t('contactus.buttonText')" :type="color == 'dark' ? 'light' : 'dark' "/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import Button from '../common/Button.vue'
import Title from '../common/Title.vue'
export default {
	components:{
		Button,
		Title
	},
	methods:{
		linkCreator: function (locale, route) {
			return '/'+locale+'/' + route.toLowerCase()
		},
	}
}
</script>

<style scoped>

._container{
	width: 100%;
	padding-left: 5%;
	padding-right: 5%;
	display: flex;
	justify-content: center;
	padding-top: 70px;
	padding-bottom: 70px;
	background-color: white;
}
._insideContainer{
	width:100%;
	max-width: 1900px;
	display: flex;
	flex-direction: row;
}
._head{
	margin-top: -10px;
	margin-bottom: 25px;
	font-family: "DM Sans",sans-serif;
	font-weight: 500;
	color: #000;
	font-size: 18px;
	line-height: 1.18em;
	-ms-word-wrap: break-word;
	word-wrap: break-word
}
._item1,._item2{
	font-family: "DM Sans",sans-serif;
	font-weight: 400;
	color: #000;
	font-size: 17px;
	line-height: 1.4em;
	-ms-word-wrap: break-word;
	word-wrap: break-word;
	margin-bottom: 25px;
}
._item1 span,._item2 span{
	font-family: "DM Sans",sans-serif;
	font-weight: 500;
	color: #000;
	font-size: 17px;
	line-height: 1.4em;
	-ms-word-wrap: break-word;
	word-wrap: break-word;
	margin-bottom: 25px;
}
._item2{
	max-width: 250px;
	width: 100%;
}
.leftContainer{
	display: flex;
	width: 50%;
	flex-direction: column;
}
.rightContainer{
	display: flex;
	flex-direction: column;
	width: 50%;
	max-width: 700px;
}
._head1{
	margin-top: 30px;
	margin-bottom: 20px;
}
._head1 h4{
	font-family: "DM Sans",sans-serif;
	font-weight: 500;
	color: #000;
	font-size: 21px;
	line-height: 1.33em;
	margin: 25px 0;
	-ms-word-wrap: break-word;
	word-wrap: break-word;
}
.rightContainer .item1 input,textarea{
	position: relative;
	display: inline-block;
	width: 100%;
	vertical-align: top;
	margin: 0 0 37px;
	padding: 3.5px 0;
	font-family: inherit;
	font-size: 17px;
	line-height: 27px;
	font-weight: inherit;
	color: #222;
	background-color: transparent;
	border: 0;
	border-bottom: 1px solid rgba(0,0,0,.22);
	border-radius: 0;
	box-sizing: border-box;
	outline: 0;
	cursor: pointer;
	font-family: "DM Sans",sans-serif;
	color: #000;
	font-size: 17px;
	-ms-word-wrap: break-word;
	word-wrap: break-word
}
._buttonContainer{
	width: 100%;
	max-width: 200px;
}
@media screen and (max-width: 1023px){
	._insideContainer{
		flex-direction: column;
	}
	.leftContainer{
		padding-bottom: 5%;
		padding-top: 5%;
		width: 100%;
	}
	.rightContainer{
		padding-bottom: 5%;
		width: 100%;
		max-width: 100%;
	}

	._head1{
		margin-top: 0;
	}

	._item2{
		margin-bottom: 0;
	}
}
</style>