<template>
  <div class="box-wrapper">
    <div class="content-wrapper clearfix" v-for="(item, index) of content" :key="index">
      <div>
        <div class="left">
          <div class="left-top-title">
            <div class="headline clearfix">
              <a class="name">{{item.link}}</a>
              <div class="bili-tab">
                <div class="tabList" v-for="(value, i) of item.tab" :key="i">{{value}}</div>
              </div>
              <a class="link-more">{{item.more}}</a>
              <div class="refresh">
                <span>{{item.newDynamic}}</span>
              </div>
            </div>
          </div>
          <div class="left-bottom-content clearfix">
            <div class="movieList" v-for="(item, index) of 10" :key="index">
              <a>
                <div class="moviePic"></div>
                <p class="t">【爱要坦荡荡】,不要装模作样到天荒</p>
                <p class="num">
                  <span class="play">11</span>
                  <span class="danmu">22</span>
                </p>
              </a>
            </div>
          </div>
        </div>
        <section class="right">
          <header class="right-header">
            <h3>排行</h3>
            <div class="all">
              <div class="rightTab" v-for="(value, i) of item.rightTab" :key="i">{{value}}</div>
            </div>
            <div class="rightDropdown">
              <span class="selected">三日</span>
              <ul class="dropdownList">
                <li class="dropdown-item" style="display: none;">三日</li>
                <li class="dropdown-item">一周</li>
              </ul>
            </div>
          </header>
          <div class="right-content">
            <ul class="rank-list" v-for="(value, index) of 2" :key="index">
              <li class="rank-item" v-for="(res, i) of 7" :key="i">
                <i class="ri-num">{{res}}</i>
                <a class="info-wrap clearfix">
                  <div class="ri-detail">
                    <p class="ri-title">【视听盛宴/极致体验】开口就沦陷，这次一定让你爽！</p>
                    <p class="ri-point">综合评分：52.9万</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { content } from "../config/index";
export default {
  name: "contentList",
  data() {
    return {
      content
    };
  }
};
</script>

<style lang="less" scoped>
.box-wrapper {
  margin: 0 auto;
  max-width: 1160px;
  min-width: 980px;
  padding: 0;
  font-size: 12px;
  .content-wrapper {
    padding-bottom: 30px;
    zoom: 1;
    margin: 0;
    padding: 0;
    min-width: 1160px;
    .left {
      float: left;
      max-width: 900px;
      min-width: 720px;
      .left-top-title {
        padding-right: 20px;
        .headline {
          padding: 0 0 15px;
          .name {
            font-size: 24px;
            line-height: 24px;
            font-weight: 400;
            margin-right: 20px;
            float: left;
            color: #222;
          }
          .bili-tab {
            float: left;
            margin: 0 10px 0 0;
            overflow: hidden;
            zoom: 1;
            .tabList {
              float: left;
              position: relative;
              height: 20px;
              line-height: 20px;
              cursor: pointer;
              padding: 1px 0 2px;
              border-bottom: 1px solid transparent;
              margin-left: 12px;
              transition: 0.2s;
              transition-property: border, color;
            }
          }
          .link-more {
            float: right;
            width: 52px;
            height: 22px;
            line-height: 22px;
            background-color: #fff;
            border: 1px solid #ccd0d7;
            color: #555;
            border-radius: 4px;
            text-align: center;
            margin: 0 0 0 10px;
            transition: all 0.2s;
            cursor: pointer;
          }
          .refresh {
            float: right;
            cursor: pointer;
            background-color: #fff;
            border: 1px solid #ccd0d7;
            border-radius: 4px;
            height: 22px;
            padding: 0 10px;
            transition: all 0.2s;
            line-height: 22px;
          }
        }
        .headline::before {
          content: "";
          display: table;
        }
      }
      .left-bottom-content {
        height: 336px;
        overflow: hidden;

        .movieList {
          float: left;
          margin: 0 20px 20px 0;
          position: relative;
          width: 160px;
          height: 148px;
          font-size: 12px;
          overflow: hidden;
          text-align: center;
          line-height: 148px;
          cursor: pointer;
          .moviePic {
            position: relative;
            width: 160px;
            height: 100px;
            display: block;
            overflow: hidden;
            text-align: center;
            background: pink;
            border-radius: 4px;
          }
          .t {
            padding-top: 8px;
            height: 40px;
            line-height: 40px;
            transition: all 0.2s linear;
            color: #222;
            word-wrap: break-word;
            word-break: break-all;
            overflow: hidden;
            text-align: left;
          }
          .num {
            position: relative;
            width: 100%;
            bottom: 0;
            height: 20px;
            line-height: 20px;
            color: #99a2aa;
            background-color: #fff;
            transition: all 0.3s;
            font-size: 0;
            span {
              line-height: 12px;
              height: 14px;
              display: inline-block;
              width: 50%;
              overflow: hidden;
              font-size: 12px;
              vertical-align: bottom;
            }
          }
        }
      }
    }
    .right {
      float: right;
      width: 260px;
      min-height: 360px;
      overflow: hidden;
      .right-header {
        height: 24px;
        line-height: 24px;
        h3 {
          font-size: 18px;
          float: left;
          font-weight: 400;
          display: block;
          margin: 0;
          padding: 0;
        }
        .all {
          margin-left: 20px;
          float: left;
          overflow: hidden;
          zoom: 1;
          .all:first-child {
            margin-left: 0;
          }
          .all:last-child {
            margin-left: 5px;
          }
          .rightTab {
            float: left;
            position: relative;
            height: 20px;
            line-height: 20px;
            cursor: pointer;
            padding: 1px 0 2px;
            border-bottom: 1px sol transparent;
            transition: 0.2s;
            transition-property: border, color;
            .rightTab.on {
              background-color: transparent;
              border-color: #00a1d6;
              color: #00a1d6;
            }
            .rightTab:hover {
              color: #00a1d6;
            }
            .rightTab::before {
              display: block;
              display: none;
              position: absolute;
              left: 50%;
              margin-left: -3px;
              bottom: 0;
              width: 0;
              height: 0;
              border-bottom: 3px solid #00a1d6;
              border-top: 0;
              border-left: 3px dashed transparent;
              border-right: 3px dashed transparent;
            }
          }
        }
        .rightDropdown {
          float: right;
          position: relative;
          display: inline-block;
          vertical-align: middle;
          background-color: #fff;
          cursor: pointer;
          padding: 0 7px;
          height: 22px;
          line-height: 22px;
          border: 1px solid #ccd0d7;
          border-radius: 4px;
          .selected {
            display: inline-block;
            vertical-align: top;
          }
          .dropdownList {
            position: absolute;
            width: 100%;
            background: #fff;
            border: 1px solid #ccd0d7;
            border-top: 0;
            left: -1px;
            top: 22px;
            z-index: 10;
            display: none;
            border-radius: 0 0 4px 4px;
            .dropdown-item {
              cursor: pointer;
              margin: 0;
              padding: 3px 7px;
            }
          }
        }
      }
      .right-content {
        margin-left: -100%;
        width: 200%;
        overflow: hidden;
        zoom: 1;
        transition: all 0.2s linear;
        .rank-list {
          padding-bottom: 15px;
          min-height: 278px;
          padding-top: 20px;
          position: relative;
          width: 50%;
          float: left;
          .rank-item {
            position: relative;
            padding-left: 25px;
            margin-top: 20px;
            overflow: hidden;
            .ri-num {
              position: absolute;
              color: #fff;
              height: 18px;
              line-height: 18px;
              top: 0;
              left: 0;
              font-size: 12px;
              min-width: 12px;
              text-align: center;
              background-color: #b8c0cc;
              border-radius: 4px;
              padding: 0 3px;
              font-weight: bolder;
              font-style: normal;
            }
            .info-wrap {
              position: relative;
              display: block;
              cursor: pointer;
              .ri-detail {
                float: left;
                .ri-title {
                  line-height: 18px;
                  height: 18px;
                  overflow: hidden;
                  color: #222;
                }
                .ri-point {
                  line-height: 12px;
                  color: #99a2aa;
                  height: 12px;
                  margin-top: 5px;
                  display: none;
                  overflow: hidden;
                }
              }
            }
          }
        }
      }
    }
  }
  .content-wrapper::before {
    content: "";
    display: table;
  }
}
.clearfix:after {
  clear: both;
  overflow: hidden;
  content: "";
  display: table;
}
.clearfix:before {
  content: "";
  display: table;
}
</style>