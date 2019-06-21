<template>
  <div class="top-info-container">
    <div>
      <p>{{$store.state.count}}</p>
      <button @click="handleAddClcik(1)">增加</button>
      <button @click="handleReduceClick(1)">减少</button>
      <button @click="handleAsyncAdd(1)">异步增加</button>
      <button @click="handleAsyncReduce(1)">异步减少</button>
    </div>
    <div class="wrapper"></div>
    <div class="top-info"></div>
    <Top-Menu></Top-Menu>
    <content-list></content-list>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import TopMenu from "../../components/topMenu";
import contentList from "../../components/content";
// import { fetch } from "../../until/index";
export default {
  name: "Home",
  components: {
    // Menu,
    TopMenu,
    contentList
  },
  created() {
    // this.requestDb();
  },
  methods: {
    ...mapMutations({
      handleAddClcik: "mutationsAddCount",
      handleReduceClick: "mutationsReduceCount"
    }),
    ...mapActions({
      handleAsyncAdd: "actionsAddCount",
      handleAsyncReduce: "actionsReduceCount"
    }),
    handleAddClcik(n) {
      this.$store.commit("mutationsAddCount", n);
    },
    handleReduceClick(n) {
      this.$store.commit("mutationsReduceCount", n);
    },
    handleAsyncAdd(n) {
      this.$store.dispatch("actionsAddCount", n);
    },
    handleAsyncReduce(n) {
      this.$store.dispatch("actionsReduceCount", n);
    }
  },
  computed: {
    count() {
      return this.$store.mapGetters.getterCount;
    }
  }
};
</script>

<style lang="less" scoped>
.top-info-container {
  margin: 0;
  padding: 0;
  position: relative;
  .wrapper {
    position: relative;
    height: 42px;
    color: #222;
  }
  .top-info {
    position: relative;
    height: 170px;
    margin-top: -42px;
    background-image: url("../../assets/title.png");
    background-repeat: no-repeat;
  }
}
</style>