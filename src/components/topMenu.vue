<template>
  <div class="top-menu-box">
    <div class="title" v-for="(item, index) of TopMenu" :key="index">{{item}}</div>
  </div>
</template>

<script>
import { TopMenu } from "../config/index";
export default {
  name: "TopMenu",
  data() {
    return {
      TopMenu
    };
  }
};
</script>

<style lang="less" scoped>
.top-menu-box {
  height: 59px;
  display: flex;
  flex-direction: row;
  font-size: 12px;
  cursor: pointer;
  margin: 0 auto;
  max-width: 1160px;
  min-width: 980px;
  text-align: center;
  .title {
    width: 48px;
    height: 100%;
    line-height: 59px;
    margin-right: 8px;
  }
}
</style>