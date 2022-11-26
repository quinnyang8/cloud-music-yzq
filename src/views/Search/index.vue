<template>
  <div>
    <van-search
      v-model="searchValue"
      placeholder="请输入搜索关键词"
      shape="round"
    />

    <!-- 热门搜索 -->
    <div class="search_wrap" v-if="resultList.length === 0">
      <p class="hot_title">热门搜索</p>
      <!-- 关键字 -->
      <ul class="hot_name_wrap">
        <li
          class="hot_item"
          v-for="(obj, index) in hotList"
          :key="index"
          @click="btn(obj.first)"
        >
          {{ obj.first }}
        </li>
      </ul>
    </div>

    <!-- 搜索结果 -->
    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <SongItem
        v-for="obj in resultList"
        :key="obj.id"
        :name="obj.name"
        :author="obj.ar[0].name"
        :id="obj.id"
      ></SongItem>
    </div>
  </div>
</template>

<script>
import { hotSearchAPI, searchResultAPI } from "@/api";
import SongItem from "@/components/SongItem";
// import { searchResult } from "@/api/Search";

export default {
  data() {
    return {
      searchValue: "",
      hotList: [],
      resultList: [], //搜索结果
    };
  },
  async created() {
    const res = await hotSearchAPI();
    console.log(res);
    this.hotList = res.data.result.hots;
  },
  methods: {
    async btn(str) {
      this.searchValue = str; //点击关键字赋予给予输入框显示
      const res = await searchResultAPI({
        type: 1,
        keywords: this.searchValue,
      });
      console.log(res);
      this.resultList = res.data.result.songs;
      setTimeout(() => {
        clearTimeout(this.timer);
      });
    },
  },
  watch: {
    searchValue(val) {
      //输入海阔天空这首歌
      clearTimeout(this.timer); //防止输入框空，还显示请求回来的数据--保证最后那次网络请求定时器关闭
      if (val.length === 0) this.resultList = []; //判断输入框有无值
      this.timer = setTimeout(async () => {
        const res = await searchResultAPI({
          type: 1,
          keywords: val,
        });
        console.log(res);
        this.resultList = res.data.result.songs;
      }, 600);
    },
  },
  //防抖：n秒内，最后执行一次
  //节流：间隔n秒，执行一次
  components: {
    SongItem,
  },
};
</script>

<style scoped>
/* 覆盖vant组件样式，除了用less文件以外，还可以直接找到类名，直接覆盖 */
/* deep控制scoped的随意属性，放到选择器前面，能够保证选中的组件内的标签类名 */
/deep/.van-field__control {
  font-size: 14px;
}
/*热门搜索文字标题样式 */
.hot_title {
  font-size: 0.32rem;
  color: #666;
}
/* 搜索容器的样式 */
.search_wrap {
  padding: 0.266667rem;
}
/* 热搜词_容器 */
.hot_name_wrap {
  margin: 0.266667rem 0;
}

/* 热搜词_样式 */
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>