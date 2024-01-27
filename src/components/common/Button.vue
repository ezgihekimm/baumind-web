<template>
  <router-link
    v-if="!customlink"
    :to="linkCreator(this.$i18n.locale, link)"
    custom
    v-slot="{ navigate, href }"
  >
    <a
      :href="linkCreator(this.$i18n.locale, href)"
      @click="navigate"
      class="button"
      :class="{
        dark: type == 'dark',
        light: type == 'light',
        transparent: type == 'transparent',
      }"
    >
      {{ text }} &nbsp;
      <div class="iconContainer">
        <span id="arrow1" class="material-symbols-outlined arrow"
          >north_east</span
        >
        <span id="arrow2" class="material-symbols-outlined arrow"
          >north_east</span
        >
      </div>
    </a>
  </router-link>

  <a
    v-if="customlink"
    :href="customlink"
    class="button"
    :target="target"
    :class="{ dark: type == 'dark', light: type == 'light' }"
  >
    {{ text }} &nbsp;
    <div class="iconContainer">
      <span id="arrow1" class="material-symbols-outlined arrow"
        >north_east</span
      >
      <span id="arrow2" class="material-symbols-outlined arrow"
        >north_east</span
      >
    </div>
  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    type: {
      type: String,
      default: "dark",
    },
    link: {
      type: String,
      default: "/",
    },
    customlink: {
      type: Boolean,
      default: false,
    },
    target: {
      type: String,
      default: "_blank",
    },
  },
  methods: {
    linkCreator: function (locale, route) {
      return "/" + locale + "/" + route.toLowerCase();
    },
  },
};
</script>

<style scoped>
.button {
  height: 45px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding-left: 19px;
  padding-right: 40px;
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
}
.iconContainer {
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 19px;
  top: 50%;
  transform: translateY(-55%);
  overflow: hidden;
}
.button span#arrow1 {
  font-size: 23px;
  display: block;
  position: absolute;
  z-index: 2;
  transform: translateY(0%) translateX(0%);
  transition: transform 0.2s ease-in-out;
}
.button span#arrow2 {
  font-size: 23px;
  display: block;
  position: absolute;
  z-index: 3;
  transform: translateY(100%) translateX(-100%);
  transition: transform 0.2s ease-in-out;
}
.button:hover span#arrow1 {
  transform: translateY(-100%) translateX(100%);
}
.button:hover span#arrow2 {
  transform: translateY(0%) translateX(0%);
}
.dark {
  color: white;
  background-color: black;
}
.light {
  color: black;
  background-color: white;
}

.transparent {
  background-color: transparent;
}
</style>
