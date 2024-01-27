<template>
  <Header type="white" />
  <WhoAreWe />
  <OurAims type="light" :title="$t('aboutus.aims')" :head="$t('aboutus.tag')" />
  <Misyon
    type="light"
    :title="$t('Misyon & Vizyon')"
    :head="$t('aboutus.tag')"
  />
  <Teams type="light" :title="$t('teams.title')" :head="$t('aboutus.tag')" />
  <Footer />
</template>

<script>
import AOS from "aos";
import Header from "../components/common/Header";
import Title from "../components/common/Title";
import WhoAreWe from "../components/about-us/WhoAreWe";
import Misyon from "../components/about-us/Misyon";
import OurAims from "../components/about-us/OurAims";
import Teams from "../components/about-us/Teams";
import Footer from "../components/common/Footer";

export default {
  name: "AboutUs",
  components: {
    Header,
    Title,
    WhoAreWe,
    OurAims,
    Teams,
    Misyon,
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
