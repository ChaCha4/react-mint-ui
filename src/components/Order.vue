<template>
  <div>
    <h1>订单</h1>
    <mt-loadmore :top-method="loadTop" ref="loadmore">
      <ul>
        <li v-for="num in arr" :key="num">{{ num }}</li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
export default {
  name: "Order",
  data: () => ({
    arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }),
  methods: {
    loadTop() {
      this.arr.reverse();
      this.$refs.loadmore.onTopLoaded();
    }
  }
};
</script>

