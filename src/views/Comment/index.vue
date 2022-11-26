<template>
  <div>
    <van-nav-bar title="评论" fixed left-arrow @click-left="$router.back()" />
    <div class="main">
      <!-- van -cell单元格的样式借用 内部全部自定义 -->
      <van-cell v-for="obj in list" :key="obj.id">
        <template>
          <div class="wrap">
            <div class="img_wrap">
              <img src="obj.user.avatarUrl" alt="" />
            </div>
            <div class="content_wrap">
              <div class="header_wrap">
                <div class="info_wrap">
                  <p>{{ obj.user.nickname }}</p>
                  <p>{{ obj.time }}</p>
                </div>
                <div>{{ obj.likeCount }}点赞</div>
              </div>
              <div class="footer_wrap">
                {{ obj.content }}
              </div>
            </div>
          </div>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
import { getCommentListAPI } from "@/api";
export default {
  data() {
    return {
      list: [],
    };
  },
  async created() {
    const res = await getCommentListAPI({
      id: this.$route.query.id,
      limit: 20,
    });
    this.list = res.data.comments;
  },
};
</script>

<style scoped>
.main {
  padding-top: 46px;
}
.wrap {
  display: flex;
}
.img_wrap {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.266667rem;
}
.img_wrap img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.content_wrap {
  flex: 1;
}
.info_wrap {
  flex: 1;
}
.header_wrap {
  display: flex;
}
.info_wrap {
  flex: 1;
}
.info_wrap p:first-child {
  font-size: 0.373333rem;
  color: #666;
}
.info_wrap p:last-of-type {
  font-size: 0.24rem;
  color: #999;
}
.header_wrap div:last-of-type {
  color: #999;
  font-size: 0.293333rem;
}
.footer_wrap {
  font-size: 0.4rem;
  color: #333;
}
</style>
