<template>
  <div>
    <div class="wrap">
      <router-view></router-view>
      <mt-tabbar v-model="selected">
        <mt-tab-item id="外卖">外卖</mt-tab-item>
        <mt-tab-item id="order">订单</mt-tab-item>
        <mt-tab-item id="find">发现</mt-tab-item>
        <mt-tab-item id="我的">我的</mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data: () => ({
    selected: "home"
  }),
  watch: {
    selected() {
      const url = this.selected === "home" ? "/" : `/${this.selected}`;
      this.$router.history.push(url);
    }
  }
};
</script>
<style>
body {
  margin: 0;
}
.mint-tabbar {
  position: fixed;
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #eaeaea;
  color: red;
}
</style>
