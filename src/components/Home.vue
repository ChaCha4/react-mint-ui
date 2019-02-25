<template>
  <div>
    <h1>home</h1>
    <mt-loadmore
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
      class="load"
    >
      <ul>
        <li v-for="num in arr" :key="num">{{num}}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
export default {
  name: "Home",
  data: () => ({
    arr: [1, 2, 3, 4, 5, 6, 7, 8],
    allLoaded: false
  }),
  methods: {
    loadTop() {
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
      setTimeout(() => {
        this.arr.push(99, 100, 1222, 155, 122, 133, 156, 1565);
        this.$refs.loadmore.onBottomLoaded();
      }, 1000);
    }
  }
};
</script>
<style>
ul {
  list-style: none;
  padding: 0;
}
.load {
  height: calc(100vh-90px-55px);
}
ul li {
  border-bottom: 1px solid #ccc;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
}
</style>
