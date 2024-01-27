<template>
  <div
    class="_container"
    :class="{ _dark: type == 'dark', _light: type == 'light' }"
  >
    <div class="_insideContainer">
      <Title
        :title="title"
        :tag="head"
        :type="type == 'dark' ? 'dark' : 'light'"
      />

      <div class="row" data-v-3c8ce00b="">
        <div class="col" data-v-3c8ce00b="">
          <img
            src="../../assets/images/teams/Nil-Girgin.jpeg"
            alt=""
            data-v-3c8ce00b=""
          />
          <div class="name" data-v-3c8ce00b="">Nil Girgin Kalıp</div>
          <div class="subtitle" data-v-3c8ce00b="">
            <div class="_col" data-v-3c8ce00b="">
              {{ $t("teams.niltitle1") }}
            </div>
            <div class="_col" data-v-3c8ce00b="">
              {{ $t("teams.niltitle2") }}
            </div>
            <div class="_col" data-v-3c8ce00b="">
              {{ $t("teams.niltitle3") }}
            </div>
          </div>
        </div>
        <div class="col" data-v-3c8ce00b="">
          <img
            src="../../assets/images/teams/Ferhat-Kutlu.png"
            alt=""
            data-v-3c8ce00b=""
          />
          <div class="name" data-v-3c8ce00b="">Ferhat Kutlu</div>
          <div class="subtitle" data-v-3c8ce00b="">
            <div class="_col" data-v-3c8ce00b="">
              {{ $t("teams.ferhattitle") }}
            </div>
          </div>
        </div>
        <div class="col" data-v-3c8ce00b="">
          <img
            src="../../assets/images/teams/Selcuk-özyurt.png"
            alt=""
            data-v-3c8ce00b=""
          />
          <div class="name" data-v-3c8ce00b="">Selçuk Özyurt</div>
          <div class="subtitle" data-v-3c8ce00b="">
            <div class="_col" data-v-3c8ce00b="">
              {{ $t("teams.selcuktitle") }}
            </div>
          </div>
        </div>
        <div class="col" data-v-3c8ce00b="">
          <img
            src="../../assets/images/teams/Bülent-Aydın.png"
            alt=""
            data-v-3c8ce00b=""
          />
          <div class="name" data-v-3c8ce00b="">Bülent Aydın</div>
          <div class="subtitle" data-v-3c8ce00b="">
            <div class="_col" data-v-3c8ce00b="">
              {{ $t("teams.bulenttitle") }}
            </div>
          </div>
        </div>
        <div class="col" data-v-3c8ce00b="">
          <img
            src="../../assets/images/teams/Süleyman-Şemsioğlu.png"
            alt=""
            data-v-3c8ce00b=""
          />
          <div class="name" data-v-3c8ce00b="">Süleyman Şemsioğlu</div>
          <div class="subtitle" data-v-3c8ce00b="">
            <div class="_col" data-v-3c8ce00b="">
              {{ $t("teams.suleymantitle") }}
            </div>
          </div>
        </div>
        <div class="col" data-v-3c8ce00b="">
          <img
            src="../../assets/images/teams/Hakan-Karaman.png"
            alt=""
            data-v-3c8ce00b=""
          />
          <div class="name" data-v-3c8ce00b="">Hakan Karaman</div>
          <div class="subtitle" data-v-3c8ce00b="">
            <div class="_col" data-v-3c8ce00b="">
              {{ $t("teams.hakantitle") }}
            </div>
          </div>
        </div>
        <div class="col" data-v-3c8ce00b="">
          <img
            src="../../assets/images/teams/Eray-Davran.png"
            alt=""
            data-v-3c8ce00b=""
          />
          <div class="name" data-v-3c8ce00b="">Eray Davran</div>
          <div class="subtitle" data-v-3c8ce00b="">
            <div class="_col" data-v-3c8ce00b="">
              {{ $t("teams.eraytitle") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "../common/Title.vue";

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
    aims: function () {
      return [
        this.$t("aboutus.aims1"),
        this.$t("aboutus.aims2"),
        this.$t("aboutus.aims3"),
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
  padding-bottom: 100px;
}

._insideContainer {
  width: 100%;
  max-width: 1900px;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  font-family: "DM Sans", sans-serif;
}

.sub-row {
  display: flex;
  flex-direction: row;
  gap: 30px;
  font-family: "DM Sans", sans-serif;
  padding-top: 50px;
}
.col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.col img {
  width: 230px;
  height: 230px;
}

.name {
  font-size: 20px;
  margin-top: 10px;
  font-weight: 500;
}

.subtitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
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
