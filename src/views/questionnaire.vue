<template>
  <div class="questionnaire">
    <div class="questionnaire_common">
      <span class="cfff">标题</span>
      <button @click="backLogin">返回登录</button>
    </div>
    <div class="questionnaire_content">
      <div class="content_topic">

      </div>
    </div>
    <div class="questionnaire_common">
      <button @click="backLogin">上一题</button>
      <button @click="backLogin">下一题</button>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  name: 'questionnaire',
  methods: {
    backLogin() {
      Dialog.confirm({
        title: '提示',
        message: '此操作将所有答题置空，是否放弃作答?',
      })
      .then(() => {
        this.$router.push("/")
      })
      .catch(() => {
        // on cancel
      });
    }
  },
}
</script>

<style scoped>
.questionnaire{
  width: 100%;
  height: 100%;
  background: #ecf0f1;
  opacity: 0.9; /* 支持CSS3的浏览器(FF 1.5也支持)透明度20%*/
}
.questionnaire .questionnaire_common{
  height: 8%;
  padding: 0 3px;
  background: cornflowerblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.questionnaire .questionnaire_common>button{
  padding: 3px 5px;
  border: 1px solid #2980b9;
  border-radius: 5px;
  background: none;
  color: #fff;
}
.questionnaire .questionnaire_content{
  height: 84%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.questionnaire .questionnaire_content .content_topic{
  width: 80%;
  height: 90%;
  background: #fff;
  border-radius: 5px;
}
.questionnaire .questionnaire_footer{
  height: 8%;
  background: #2980b9;
}
</style>