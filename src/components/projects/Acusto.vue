<template>
  <div
    class=""
    style="
      width: 150px;
      color: white;
      margin-top: 5%;
      margin-left: 5%;
      margin-bottom: 20px;
    "
  >
    <Button
      type="transparent"
      :href="href"
      :text="$t('button.back')"
      link="projects"
      target="_self"
    />
  </div>
  <div class="_container">
    <div class="_insideContainer">
      <div class="_subTitle" style="color: white">
        {{ $t("project2.baslik") }}
      </div>
      <div class="aims">
        <p>{{ $t("project2.amac") }}</p>
      </div>
      <div class="_subContainer">
        <div class="imgContainerMobile">
          <img src="@/assets/images/denizaltı.png" alt="" />
        </div>
        <div class="infoContainer">
          <h5>{{ $t("project2.bilgi") }}</h5>
        </div>
        <div class="imgContainer">
          <img src="@/assets/images/denizaltı.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../common/Button.vue";
export default {
  components: {
    Button,
  },
};
</script>
<style scoped>
._container {
  display: flex;
  justify-content: center;
  background-color: #121619;
  width: 100%;
  padding-bottom: 5%;
  padding-left: 5%;
  padding-right: 5%;
}

._insideContainer {
  width: 100%;
  max-width: 1900px;
}

._subTitle {
  text-align: center;
  font-size: 25px;
  color: rgb(15, 57, 100);
}

.aims {
  display: flex;
  justify-content: center;
}

.aims p {
  color: rgb(169, 167, 167);
  text-align: center;
  max-width: 900px;
  font-family: "DM Sans", sans-serif;
}

._subContainer {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  justify-content: center;
}

.infoContainer {
  max-width: 700px;
}

.infoContainer h5 {
  color: rgb(229, 236, 243);
  font-family: "DM Sans", sans-serif;
  padding-top: 50px;
}

.imgContainer {
  display: flex;
  width: 100%;
  margin-left: 80px;
  max-width: 500px;
  flex-direction: row;
  justify-content: center;
}

.img img {
  width: 100%;
}

.dot {
  height: 5px;
  width: 5px;
  background-color: rgb(229, 236, 243);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgContainerMobile {
  display: none;
}

@media screen and (max-width: 1023px) {
  ._insideContainer {
    flex-direction: column;
    padding-top: 3%;
    padding-bottom: 3%;
    padding-left: 5%;
    padding-right: 5%;
  }
  ._subContainer {
    flex-direction: column;
  }
  .imgContainer {
    display: none;
  }
  .imgContainerMobile {
    display: flex;
    width: 100%;
    max-width: 500px;
    flex-direction: row;
    justify-content: center;
    padding-left: 10%;
  }
}
</style>
