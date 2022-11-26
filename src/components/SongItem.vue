<template>
  <van-cell
    :title="name"
    :label="author + ' ' + name"
    center
    @click="$router.push({ path: '/comment', query: { id: id } })"
  >
    <template #right-icon>
      <van-icon
        name="play-circle-o"
        size="0.6rem"
        class="search-icon"
        @touchstart="playFn"
      />
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    name: String, //歌名
    author: String, //作者
    id: Number, //歌曲id
  },
  methods: {
    playFn() {
      this.$router.push({
        path: "/play",
        query: {
          id: this.id,
        },
      });
    },
  },
};
</script>

<style scoped>
.search-icon {
  font-size: 21px;
  line-height: inherit;
}
</style>