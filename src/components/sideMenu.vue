<template>
  <div class="menu-box">
    <ul>
      <li v-for="(item, index) of menuList" :key="index" @click="handleClick(item, index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { MenuList, clickRoute } from "../config/index";
export default {
  name: "Menu",
  data() {
    return {
      menuList: MenuList,
      clickRoute,
      display: "",
      screenWidth: document.documentElement.clientWidth
    };
  },
  mounted() {
    const that = this;
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      that.screenWidth = document.documentElement.clientWidth; //窗口高度
      //   console.log(that.screenHeight);
    };
  },
  methods: {
    handleClick() {}
  }
};
</script>

<style lang="less" scoped>
.menu-box {
  width: 48px;
  border: 1px solid #e5e9ef;
  font-size: 12px;
  border-radius: 4px;
  position: fixed;
  left: 300px;
  top: 232px;
  z-index: 99999;
  text-align: center;
  ul {
    width: 100%;
    cursor: pointer;
    li {
      height: 28px;
      line-height: 28px;
    }
    li:hover {
      background: #1890ff;
    }
  }
}
</style>