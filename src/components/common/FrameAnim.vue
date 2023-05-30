<template>
<div class="_container">
	<div class="_insideContainer">

		<div class="frameContainer">
			<canvas id="scrollAnimation"></canvas>
			<p id="copyExample">AirPods</p>
			<p id="copyExample1">Ozellik 1</p>
			<p id="copyExample2">Ozellik 2</p>
		</div>
		<div class="frameContainer2">
			d
		</div>
	</div>
</div>
</template>

<script>

export default {
	name: 'FrameAnim',
	data(){
		return{
			images: []
		}
	},
	mounted(){
		const html = document.documentElement;
		const canvas = document.getElementById("scrollAnimation");
		const context = canvas.getContext("2d");
		const copy = document.getElementById("copyExample");

		const frameCount = 125;
		const currentFrame = index => {
			return require('@/assets/images/colink/frames_2/frame'+index+'.png')
		}
		

		const img = new Image()
		img.src = currentFrame(1);
		canvas.width = 1000;
		canvas.height = 1000;
		img.onload = function(){
			// context delete all
			// console.log('onload')
			// context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(img, 0, 0, 1000, 1000);
		}

		const updateImage = index => {
			img.src = currentFrame(index);
			console.log('updateImage')
			// context.clearRect(0, 0, canvas.width, canvas.height);
			// context.drawImage(img, 0, 0, 1920/2, 1080/2);
		}

		// TODO: HeaderInside ile uyumlu calisabilmeli
		window.addEventListener('scroll', () => {  
			// how far has the user scrolled 
			const scrollTop = html.scrollTop;
			// maximum that the user can scroll inside the current window
			const maxScrollTop = html.scrollHeight - window.innerHeight
			const scrollFraction = scrollTop / maxScrollTop;
			// when hits half way then opacity is 1 otherwise opacity moves towards 0
			copy.style.opacity = scrollFraction > 0.5 ? (1 - scrollFraction) : scrollFraction * 2;
			const frameIndex = Math.min(
				frameCount - 1,
				Math.ceil(scrollFraction * frameCount)
			);
			
			// The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint
			requestAnimationFrame(() => updateImage(frameIndex + 1))
		});

		const preloadImages = () => {
			for (let i = 1; i < frameCount; i++) {
				const img = new Image();
				img.src = currentFrame(i);
			}
		};

		preloadImages()

	},
	methods: {
	}
}

</script>

<style scoped>

._container {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 5%;
	padding-right: 5%;
	background-color: black;
}

._insideContainer {
	width: 100%;
	max-width: 1900px;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.frameContainer{
	/* background-color: red; */
	height: 200vh;
}
.frameContainer2{
	/* background-color: red; */
	height: 200vh;
}

canvas {
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	max-width: 100vw;
	max-height: 100vh;
	z-index: 50;
	/* background-color: green; */
}

#copyExample {
	color: white;
	position: sticky;
	top: 100px;
	font-size: 50px;
	/* background-color: blue; */
}

#copyExample1 {
	color: white;
	position: sticky;
	top: 300px;
	margin-top: 800px;
	z-index: 100;
	/* position: sticky; */
	/* top: 200px; */
}
#copyExample2 {
	color: white;
	margin-top: 800px;
	z-index: 100;
	/* position: sticky;
	top: 400px; */
}

</style>