<template>
  <div class="home">
    <div class="welcome_page">
      <div class="bounce fz26 fbold cfff" style="animation-duration:2s;animation-delay:0s;animation-iteration-count:1;animation-fill-mode:both;">欢迎来到调查问卷</div>
      <!-- <div class="">欢迎来到调查问卷</div> -->
    </div>
    <div class="home_enterInto">
      <button class="bounce" style="animation-duration:2s;animation-delay:0s;animation-iteration-count:1;animation-fill-mode:both;" @click="enterInto">进入问卷</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    enterInto() {
      this.$router.push("/myinfo")
    }
  },
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
}
.home .welcome_page{
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home .home_enterInto{
  width: 100%;
  display: flex;
  justify-content: center;
}
.home .home_enterInto>button{
  color: #bdc3c7;
  font-size: 16px;
  padding: 10px 20px;
  border: 1px solid #2c3e50;
  background: #34495e;
  border-radius: 5px;
}
</style>
