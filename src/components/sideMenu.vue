<template>
  <div class="menu-box" :style="{top}">
    <div class="list-warp">
      <div
        class="item"
        v-for="(item, index) of menuList"
        :key="index"
        @click="handleClick(item, index)"
        :style="{background:(index==cnt?'#00a1d6':''),color:(index === cnt?'#fff':'')}"
      >{{item}}</div>
    </div>
    <div class="connect-line" v-if="flag"></div>
    <div class="back-top" v-if="flag" @click="backTop">TOP</div>
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
      top: "",
      flag: false,
      cnt: Number,
      bgColor: ""
    };
  },
  mounted() {
    this.listenerScroll();
  },
  methods: {
    handleClick(item, index) {
      let top;
      this.cnt = index;
      if (index === 0) {
        top = 225;
      } else {
        top = index * 375 + 225;
      }
      window.scrollTo({ left: 0, top, behavior: "smooth" });
    },
    backTop() {
      window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    },
    listenerScroll() {
      window.onscroll = () => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop; //兼容性写法，并且在滚动事件内可以实时获得滚动条距顶部的距离
        if (scrollTop > 224) {
          this.top = "0px";
          this.flag = true;
        } else {
          this.top = "232px";
          this.flag = false;
        }
      };
    }
  }
};
</script>

<style lang="less" scoped>
.menu-box {
  position: fixed;
  z-index: 10;
  left: 50%;
  top: 232px;
  margin-left: 590px;
  transition: top 0.3s;
  font-size: 12px;
  .list-warp {
    position: relative;
    background-color: #f6f9fa;
    border: 1px solid #e5e9ef;
    overflow: hidden;
    border-radius: 4px;
    .item {
      width: 48px;
      height: 28px;
      line-height: 30px;
      text-align: center;
      transition: background-color 0.3s, color 0.3s;
      cursor: pointer;
      -ms-user-select: none;
      user-select: none;
    }
    .item:hover {
      background: #00a1d6;
      color: white;
    }
  }
  .back-top {
    position: relative;
    display: block;
    cursor: pointer;
    height: 48px;
    border: 1px solid #e5e9ef;
    overflow: hidden;
    border-radius: 4px;
    text-align: center;
    line-height: 48px;
  }
  .back-top:hover {
    background-color: #00a1d6;
    background-position: -714px -72px;
    border-color: #00a1d6;
  }
  .connect-line {
    position: relative;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    height: 9px;
    width: 30px;
    margin: 0 auto;
  }
}
</style>