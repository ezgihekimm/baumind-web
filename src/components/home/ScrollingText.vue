<template>
	<div id="outer">
		<div>
			<div id="loop">
				<div id="content">BAU Innovation and Consultancy Inc.*/&nbsp;</div>
			</div>
		</div>
	</div>
</template>

<script>
// See: https://stackoverflow.com/a/61480583
export default {
	name: 'ScrollingText',
	mounted() {
		let outer = document.querySelector("#outer");
		let content = outer.querySelector('#content');

		repeatContent(content, outer.offsetWidth);

		let el = outer.querySelector('#loop');
		el.innerHTML = el.innerHTML + el.innerHTML;

		function repeatContent(el, till) {
			let html = el.innerHTML;
			let counter = 0; // prevents infinite loop
			
			while (el.offsetWidth < till && counter < 100) {
				el.innerHTML += html;
				counter += 1;
			}
		}
	}
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Tourney:wght@100&display=swap');

#outer {
	width: 100%;
	overflow: hidden;
	padding: 80px 0;
	background-color: white;
}

#outer div {
	display: inline-block;
}

#loop {
	white-space: nowrap;
	animation: loop-anim 30s linear infinite;
	font-family: 'Tourney', cursive;
	color: rgb(70, 69, 69);
	font-size: 90px;
}

#content {
	text-transform: uppercase;
}

@keyframes loop-anim {
	0% {
		margin-left: 0;
	}
	100% {
		margin-left: -50%
	}
}

@media screen and (max-width: 1023px) {

	#loop {
		font-size: 50px;
	}

	#outer {
		padding: 40px 0;
	}

}

</style>