<template>
  <div class="top-info-container">
    <div class="wrapper"></div>
    <div class="top-info"></div>
    <Top-Menu></Top-Menu>
    <content-list></content-list>
  </div>
</template>

<script>
import TopMenu from "../../components/topMenu";
import contentList from "../../components/content";
export default {
  name: "Home",
  components: {
    // Menu,
    TopMenu,
    contentList
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