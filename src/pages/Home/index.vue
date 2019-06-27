<template>
  <div>
    <!-- <div>
      <p>{{$store.state.count}}</p>
      <button @click="handleAddClcik(1)">增加</button>
      <button @click="handleReduceClick(1)">减少</button>
      <button @click="handleResetClick(0)">归零</button>
      <button @click="handleAsyncAdd(1)">异步增加</button>
      <button @click="handleAsyncReduce(1)">异步减少</button>
      <button @click="handleAsyncReset(0)">异步归零</button>
    </div>-->
    <div class="top-wrapper">哔哩哔哩 (゜-゜)つロ 干杯~-bilibili</div>
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
  created() {},
  methods: {
    ...mapMutations({
      handleAddClcik: "mutationsAddCount",
      handleReduceClick: "mutationsReduceCount",
      handleResetClick: "mutationsReset"
    }),
    ...mapActions({
      handleAsyncAdd: "actionsAddCount",
      handleAsyncReduce: "actionsReduceCount",
      handleAsyncReset: "actionsResetCount"
    }),
    handleAddClcik(n) {
      this.$store.commit("mutationsAddCount", n);
    },
    handleReduceClick(n) {
      this.$store.commit("mutationsReduceCount", n);
    },
    handleResetClick(n) {
      this.$store.commit("mutationsResetCount", n);
    },
    handleAsyncAdd(n) {
      this.$store.dispatch("actionsAddCount", n);
    },
    handleAsyncReduce(n) {
      this.$store.dispatch("actionsReduceCount", n);
    },
    handleAsyncReset(n) {
      this.$store.dispatch("actionsResetCount", n);
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
.top-wrapper {
  font-size: 30px;
  text-align: center;
  line-height: 175px;
  position: relative;
  height: 175px;
  color: #222;
  background: -webkit-linear-gradient(left, pink, cyan); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, pink, cyan); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, pink, cyan); /* Firefox 3.6 - 15 */
  background: linear-gradient(
    to right,
    pink,
    cyan
  ); /* 标准的语法（必须放在最后） */
}
.top-background {
  position: relative;
  height: 175px;
  margin-top: -42px;
}
</style>