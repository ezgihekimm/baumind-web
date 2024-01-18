<template>
  <Header type="white" />
  <Patent />
  <Footer />
</template>

<script>
import AOS from "aos";
import Header from "../components/common/Header";
import Patent from "../components/patents/Patent";
import Footer from "../components/common/Footer";

export default {
  name: "Patents",
  components: {
    Header,
    Patent,
    Footer,
  },
  mounted() {
    AOS.init({ once: true });
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title =
          this.$t("home.title") || "BAU Innovation and Consultancy Inc.";
      },
    },
  },
};
</script>
