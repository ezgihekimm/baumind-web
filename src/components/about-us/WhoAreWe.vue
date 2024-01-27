<template>
  <div class="__container">
    <div class="_row">
      <div
        class="_img"
        data-aos-offset="300"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <img src="../../assets/images/sosyalalan.jpeg" alt="" />
      </div>
      <div class="info">
        <h2 class="about">{{ $t("aboutus.whoarewe") }}</h2>
        <p class="info1">
          {{ $t("about.1") }}
        </p>
        <p class="info1">
          {{ $t("about.2") }}
        </p>
        <p class="info1">
          {{ $t("about.3") }}
        </p>
        <p class="info1">
          {{ $t("about.4") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhoAreWe",
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.__container {
  width: 100%;
  background-color: #ededed;
  position: relative;
  padding: 4%;
  font-family: "DM Sans", sans-serif;
  display: flex;
  justify-content: center;
}

._row {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1900px;
}
._img {
  display: flex;
  padding: 3%;
  width: 90%;
  justify-content: center;
  margin-right: 50px;
}
._img img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.2s;
}
.info {
  display: flex;
  width: 100%;
  padding-right: 3%;
  padding-top: 3%;
  flex-direction: column;
  color: black;
  font-family: "DM Sans", sans-serif;
}

.info p {
  margin: 0px;
  padding: 0px;
  padding-bottom: 30px;
  font-size: 18px;
  font-family: "DM Sans", sans-serif;
  color: #656565;
}

.about {
  font-size: 40px;
  padding-bottom: 20px;
}

.info1 {
  padding-bottom: 60px;
  font-size: 16px;
}

.History {
  padding-bottom: 20px;
}
</style>
