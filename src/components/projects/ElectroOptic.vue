<template>
  <div class="_container">
    <div class="_insideContainer">
      <div class="titleContainer">
        <div class="_subTitle">
          {{ $t("project4.head") }}
        </div>
        <div class="aims">
          {{ $t("project4.amac") }}
        </div>
      </div>

      <div class="_row">
        <div class="video-playermobile">
          <video
            class="video"
            width="650"
            controls
            loop
            muted
            autoplay
            ref="video"
          >
            <source src="@/assets/images/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="info-ul">
          <li data-aos="fade-down" data-aos-delay="100" data-aos-offset="500px">
            <div class="dot">1</div>
            {{ $t("project4.1") }}
          </li>
          <li data-aos="fade-down" data-aos-delay="200" data-aos-offset="500px">
            <div class="dot">2</div>
            {{ $t("project4.2") }}
          </li>
          <li data-aos="fade-down" data-aos-delay="300" data-aos-offset="500px">
            <div class="dot">3</div>
            {{ $t("project4.3") }}
          </li>
          <li data-aos="fade-down" data-aos-delay="400" data-aos-offset="500px">
            <div class="dot">4</div>
            {{ $t("project4.4") }}
          </li>
          <li data-aos="fade-down" data-aos-delay="500" data-aos-offset="500px">
            <div class="dot">5</div>
            {{ $t("project4.5") }}
          </li>
        </div>

        <div class="video-player">
          <video
            class="video"
            width="650"
            controls
            loop
            muted
            autoplay
            ref="video"
          >
            <source src="@/assets/images/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  computed: {
    videoElement() {
      return this.$refs.video;
    },
  },
};
</script>

<style scoped>
._container {
  background-color: #121619;
  width: 100%;
  padding-top: 3%;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 5%;
  font-family: "DM Sans", sans-serif;
  color: aliceblue;
}
._insideContainer {
  width: 100%;
  max-width: 1900px;
}
.titleContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
._title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
._title .dot {
  margin-right: 5px;
}
._subTitle {
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 10px;
  font-size: 25px;
  color: rgb(229, 236, 243);
  font-family: "DM Sans", sans-serif;
}
._row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
}
.video-player {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-left: 100px;
}
.video-playermobile {
  display: none;
}
.div {
  width: 5px;
}
.img {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
}
.aims {
  color: rgb(169, 167, 167);
  text-align: center;
  padding-top: 10px;
  max-width: 800px;
}
.img img {
  width: 75%;
}
.dot {
  height: 5px;
  width: 5px;
  background-color: rgb(229, 236, 243);
  border-radius: 50%;
  display: inline-block;
}

.info-ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
  max-width: 600px;
}
.info-ul li {
  display: flex;
  align-items: center;
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  color: rgb(229, 236, 243);
  padding-bottom: 20px;
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

@media screen and (max-width: 1023px) {
  ._row {
    flex-direction: column;
  }
  .video-playermobile {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
  }
  .video-player {
    display: none;
  }
}
</style>
