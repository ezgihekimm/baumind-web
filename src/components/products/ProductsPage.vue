<template>
  <div
    class="_container"
    :class="{ _dark: type == 'dark', _light: type == 'light' }"
  >
    <div class="_insideContainer">
      <Title :title="getTitle" :tag="getHead" type="light" />
      <List
        :list="getList"
        type="light"
        :animation="true"
        :animationDelay="true"
        :animationOffset="true"
      />
    </div>
  </div>
</template>
<script>
import Title from "../common/Title.vue";
import List from "../common/List.vue";

export default {
  props: {
    head: {
      type: String,
      default: "Head",
    },
    title: {
      type: String,
      default: "Title",
    },
    type: {
      type: String,
      default: "light",
    },
  },
  components: {
    Title,
    List,
  },
  methods: {
    onClick(link) {
      return this.$router.push(this.linkCreator(this.$i18n.locale, link));
    },
    linkCreator: function (locale, route) {
      return "/" + locale + "/" + route.toLowerCase();
    },
  },
  computed: {
    getHead() {
      return this.$t("projects.tag");
    },
    getTitle() {
      return this.$t("product.title");
    },
    getList() {
      return [
        {
          title: this.$t("product.product1.name"),
          tag: [
            this.$t("projects.project1.tag1"),
            this.$t("projects.project1.tag2"),
          ],
          link: "products/co-lighting",
          buttonText: this.$t("projects.buttonText"),
        },
        {
          title: this.$t("product.product5.name"),
          tag: [
            this.$t("product.product5.tag1"),
            this.$t("product.product5.tag2"),
          ],
          link: "products/co-link",
          buttonText: this.$t("projects.buttonText"),
        },
        {
          title: this.$t("product.product2.name"),
          tag: [
            this.$t("projects.project2.tag1"),
            this.$t("projects.project2.tag2"),
          ],
          link: "products/co-diver",
          buttonText: this.$t("projects.buttonText"),
        },
        {
          title: this.$t("product.product6.name"),
          tag: [
            this.$t("product.product6.tag1"),
            this.$t("product.product6.tag2"),
          ],
          customlink: "https://yetenek12.com/",
          buttonText: this.$t("projects.buttonText"),
        },
      ];
    },
  },
};
</script>

<style scoped>
._container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 50px;
}

._insideContainer {
  width: 100%;
  max-width: 1900px;
}

._dark {
  background-color: #141618;
}
._light {
  background-color: white;
}

@media screen and (max-width: 1023px) {
}
</style>
