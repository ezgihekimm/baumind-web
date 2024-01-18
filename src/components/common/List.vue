<template>
  <div
    class="__container"
    :class="{ _dark: type == 'dark', _light: type == 'light' }"
  >
    <div class="__insideContainer">
      <div class="_listContainer">
        <div
          class="listItem"
          v-for="(item, index) in list"
          :key="index"
          :class="{
            listItemBorder: endline == true && index == list.length - 1,
          }"
          :data-aos="animation && 'fade-right'"
          :data-aos-delay="animationDelay && index * 100"
          :data-aos-offset="animationOffset && '500px'"
        >
          <div class="leftContainer">
            <div class="itemContainer">
              <div class="item" @click="onClick(item.link || item.customlink)">
                {{ item.title }}
              </div>
            </div>
            <div class="tagContainer">
              <div
                class="_tag"
                v-for="(itemtag, index) in item.tag"
                :key="index"
              >
                {{ itemtag }}
              </div>
            </div>
          </div>

          <div class="buttonContainer">
            <Button
              :text="item.buttonText"
              :type="type == 'dark' ? 'light' : 'dark'"
              :link="item.link"
              :customlink="item.customlink"
            />
          </div>
          <div class="imgContainer">
            <img :src="item.img" alt="" />
          </div>
        </div>
        <div
          class="seeMore"
          v-if="seemore == true"
          :data-aos="animation && 'fade-right'"
        >
          <div
            class="seeMoreText"
            @click="onClick(item.link || item.customlink)"
          >
            <span>{{ seemoretext }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  props: {
    list: {
      type: Array,
    },
    type: {
      type: String,
    },
    endline: {
      type: Boolean,
      default: false,
    },
    animation: {
      type: Boolean,
      default: false,
    },
    animationDelay: {
      type: Boolean,
      default: false,
    },
    animationOffset: {
      type: Boolean,
      default: false,
    },
    seemore: {
      type: Boolean,
      default: false,
    },
    seemorelink: {
      type: String,
    },
    seemoretext: {
      type: String,
      default: "See more",
    },
  },
  components: {
    Button,
  },
  methods: {
    onClick(link) {
      if (link && link.includes("https")) {
        return window.open(link, "_blank");
      }
      return this.$router.push(this.linkCreator(this.$i18n.locale, link));
    },
    linkCreator: function (locale, route) {
      return "/" + locale + "/" + route.toLowerCase();
    },
  },
};
</script>

<style scoped>
.__container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
}

._dark {
  background-color: #141618;
}
._light {
  background-color: white;
}
.__insideContainer {
  width: 100%;
  max-width: 1900px;
}
.listItem {
  padding-bottom: 43px;
  padding-top: 35px;
  display: flex;
  flex-direction: row;
  position: relative;
  text-transform: capitalize;
}
._dark .listItemBorder {
  border-bottom: 1px solid rgba(255, 255, 255, 0.22);
}
._light .listItemBorder {
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);
}
._dark .listItem {
  border-top: 1px solid rgba(255, 255, 255, 0.22);
}
._light .listItem {
  border-top: 1px solid rgba(0, 0, 0, 0.22);
}
.leftContainer {
  flex-grow: 1;
}
.buttonContainer {
  display: flex;
  align-items: center;
}
.itemContainer {
  max-width: 500px;
  width: 100%;
}

.itemContainer .item {
  font-family: "DM Sans", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  display: inline !important;
  width: 100%;
  background-repeat: no-repeat;
  background-position-y: -5px;
  background-image: linear-gradient(
    transparent calc(100% - 1px),
    currentColor 1px
  );
  transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  background-size: 0 100%;
  cursor: pointer;
}
.listItem:hover .itemContainer .item {
  background-size: 100% 100%;
}
._light .listItem:hover .itemContainer .item {
  background-size: 100% 100%;
  color: rgb(15, 98, 254);
}
._dark .itemContainer .item {
  color: white;
}
.tagContainer {
  display: flex;
  flex-direction: row;
  margin-top: 23px;
}
._dark ._tag:hover {
  color: black;
  background-color: white;
  border-color: black;
}
._light ._tag:hover {
  color: white;
  background-color: black;
  border-color: white;
}
._tag {
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 100px;
  padding-bottom: 4px;
  padding-left: 11px;
  padding-right: 11px;
  padding-top: 4px;
  text-transform: capitalize;
  cursor: pointer;
}
._dark ._tag {
  color: white;
  border: 1px solid white;
}
.imgContainer {
  position: absolute;
  top: -50%;
  left: 60%;
  width: auto;
  display: block;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-out, visibility 0.2s ease-out;
}
.listItem:hover .imgContainer {
  visibility: visible;
  opacity: 1;
}
.seeMore {
  margin-top: 65px;
  margin-bottom: 15px;
}
.seeMoreText {
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;
  display: inline !important;
  width: 100%;
  background-repeat: no-repeat;
  background-position-y: -2px;
  background-image: linear-gradient(
    transparent calc(100% - 1px),
    currentColor 1px
  );
  transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  background-size: 100% 100%;
  cursor: pointer;
}
._dark .seeMoreText {
  color: white;
}
._light .seeMoreText {
  color: black;
}
.seeMore:hover .seeMoreText {
  animation-name: underline;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  animation-direction: normal;
}

@keyframes underline {
  0% {
    background-position-x: 0px;
  }
  50% {
    background-position-x: 140px;
  }
  51% {
    background-position-x: -140px;
  }
  100% {
    background-position-x: 0px;
  }
}

@media screen and (max-width: 1023px) {
  .listItem {
    flex-direction: column;
  }
  .buttonContainer {
    padding-top: 30px;
  }
  .listItem:hover .imgContainer {
    visibility: hidden;
    opacity: 0;
  }
  .itemContainer .item {
    font-size: 22px;
  }
}
</style>
