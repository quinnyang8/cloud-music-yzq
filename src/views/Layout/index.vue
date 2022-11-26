<template>
  <div>
    <van-nav-bar :title="activeTitle" fixed />
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/layout/home" name="首页"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" replace to="/layout/search" name="搜索"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { Toast } from "vant";

export default {
  data() {
    return {
      active: 0,
      activeTitle: this.$route.meta.title,
    };
  },
  watch: {
    $route() {
      //通过侦听器,当路由改变时，直接侦听组件对象身上的任意属性
      this.activeTitle = this.$route.meta.title;
    },
  },
};
//   methods: {
//     onChange(str) {
//       this.activeTitle = str;
//     },
//   },
// };
</script>

<style>
.main {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>