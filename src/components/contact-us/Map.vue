<template>
<div class="_container">
	<div class="_insideContainer">
		<GMapMap :center="center" :zoom="15" map-type-id="terrain" style=" height: 700px; width: 100%;">
			<GMapCluster>
				<GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position" />
			</GMapCluster>
		</GMapMap>
	</div>
</div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			center: {
				lat: 41.159937,
				lng: 28.896313
			},
			markers: [{
					position: {
						lat: 41.159937,
						lng: 28.896313
					},
				}, // Along list of clusters
			]
		}
	}
}
</script>

<style scoped>

._container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-right: 5%;
	padding-left: 5%;
	flex-direction: column;
	filter: grayscale(100%);
	transition: all 0.3s;
	background-color: white;
}
._container:hover{
	filter: grayscale(0%);
}
._insideContainer{
	width: 100%;
	max-width: 1900px;
}

</style>
