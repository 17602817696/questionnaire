<template>
  <div class="questionnaire">
    <div class="questionnaire_common">
      <span class="cfff">标题</span>
      <span v-show="isBegin" class="cfff">{{currentPage+1}}/{{list.length}}</span>
      <button style="padding:5px 10px" @click="backLogin">返回</button>
    </div>
    <div class="questionnaire_content">
      <div v-show="!isBegin" class="content_topic">
        <div class="content_begin content_title">
          <h3 class="bounceInDown mt30" style="animation-duration:1s;animation-delay:0s;animation-iteration-count:1;animation-fill-mode:both;">非常感谢您花时间填写问卷!</h3>
        </div>
        <div class="content_title" style="height:40%">
          <van-button plain hairline @click="goAnswer" type="info">开始答题</van-button>
        </div>
      </div>
      <div v-show="isBegin" class="content_topic">
          <div class="content_title">
            {{topic.title}}
          </div>
          <van-radio-group v-for="(item,index) in topic.option" @change="selectValue(radio[currentPage])" :key="index" v-model="radio[currentPage]">
              <van-radio class="mt20" :name="index+1">{{item.value}}</van-radio>
          </van-radio-group>
      </div>
    </div>
    <div class="questionnaire_common">
      <span>
        <button v-show="!currentPage == 0" @click="previousPage">{{answerPrevious}}</button>
      </span>
      <button v-show="isBegin" @click="nextPage">{{answerPage}}</button>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  name: 'questionnaire',
  data() {
    return {
      isBegin:false,
      answerPrevious:'上一页',
      answerPage:'下一页',
      radio: [],
      list:[
        {
          title:"随树阴讽诵积年，板床为之锐减，而精力不辍，以文华显，注释魏收，北齐人，属，撰写，荥（xíng）阳，古地名，在今河南境内，④调：嘲笑。⑤戟（jǐ），泛指兵器。⑥夏月，夏季。⑦讽诵：背诵，解释下列句子中加着重号的词语。",
          option:[
            {value:"益慕圣贤之道 道:"},
            {value:"好习骑射 好"},
            {value:"益慕圣贤之道 道:"},
            {value:"好习骑射 好"},
            {value:"益慕圣贤之道 道:"},
            {value:"好习骑射 好"},
          ]
        },
        {
          title:"下面是对第②节的评析，最恰当．．．的一项是",
          option:[
            {value:"这节描写动静结合，虚实相生，从视觉、听觉、触觉角度写出了一幅五彩缤纷的春花图。"},
            {value:"这节的描写，色味俱全，虚实结合，动静相配，高低映衬，描绘出一幅五彩缤纷的立体感很强的春花图。"},
            {value:"这节运用排比、比喻、拟人、夸张的手法，生动地表现出春花的美丽。"},
            {value:"这节表达方式多样，描写角度别致，多种感官并用，写出了春天给人带来的愉悦。"},
          ]
        },
        {
          title:"随树阴讽诵积年，板床为之锐减，而精力不辍，以文华显，注释魏收，北齐人，属，撰写，荥（xíng）阳，古地名，在今河南境内，④调：嘲笑。⑤戟（jǐ），泛指兵器。⑥夏月，夏季。⑦讽诵：背诵，解释下列句子中加着重号的词语。",
          option:[
            {value:"益慕圣贤之道 道:"},
            {value:"好习骑射 好"},
            {value:"益慕圣贤之道 道:"},
            {value:"好习骑射 好"},
            {value:"益慕圣贤之道 道:"},
            {value:"好习骑射 好"},
          ]
        },
        {
          title:"下面是对第②节的评析，最恰当．．．的一项是",
          option:[
            {value:"这节描写动静结合，虚实相生，从视觉、听觉、触觉角度写出了一幅五彩缤纷的春花图。"},
            {value:"这节的描写，色味俱全，虚实结合，动静相配，高低映衬，描绘出一幅五彩缤纷的立体感很强的春花图。"},
            {value:"这节运用排比、比喻、拟人、夸张的手法，生动地表现出春花的美丽。"},
            {value:"这节表达方式多样，描写角度别致，多种感官并用，写出了春天给人带来的愉悦。"},
          ]
        },
        {
          title:"随树阴讽诵积年，板床为之锐减，而精力不辍，以文华显，注释魏收，北齐人，属，撰写，荥（xíng）阳，古地名，在今河南境内，④调：嘲笑。⑤戟（jǐ），泛指兵器。⑥夏月，夏季。⑦讽诵：背诵，解释下列句子中加着重号的词语。",
          option:[
            {value:"益慕圣贤之道 道:"},
            {value:"好习骑射 好"},
            {value:"益慕圣贤之道 道:"},
            {value:"好习骑射 好"},
            {value:"益慕圣贤之道 道:"},
            {value:"好习骑射 好"},
          ]
        },
        {
          title:"下面是对第②节的评析，最恰当．．．的一项是",
          option:[
            {value:"这节描写动静结合，虚实相生，从视觉、听觉、触觉角度写出了一幅五彩缤纷的春花图。"},
            {value:"这节的描写，色味俱全，虚实结合，动静相配，高低映衬，描绘出一幅五彩缤纷的立体感很强的春花图。"},
            {value:"这节运用排比、比喻、拟人、夸张的手法，生动地表现出春花的美丽。"},
            {value:"这节表达方式多样，描写角度别致，多种感官并用，写出了春天给人带来的愉悦。"},
          ]
        },
      ],
      topic:{},
      currentPage:0
    }
  },
  mounted () {
    this.getData();
    this.topicAnswer();
  },
  methods: {
    getData(){
      this.topic = this.list[this.currentPage];
    },
    topicAnswer(){
      for (var i=0;i<this.list.length;i++){
        this.radio[i] = 0;
      }
    },
    selectValue(v){
      this.radio[this.currentPage] = v;
      // console.log(v,'vvvvvvvvv')
      // console.log(this.radio)
      // console.log(this.currentPage,'currentPage')
    },
    goAnswer(){
      this.isBegin = true;
    },
    backLogin() {
      Dialog.confirm({
        title: '提示',
        message: '此操作将所有答题置空，是否放弃作答?',
      })
      .then(() => {
        this.$router.push("/myinfo")
      })
      .catch(() => {
        // on cancel
      });
    },
    previousPage(){
      if(this.radio[this.currentPage] == 0){
        Dialog.confirm({
          title: '提示',
          message: '本题尚未完成是否进入上一页?',
        })
        .then(() => {
          this.currentPage = this.currentPage - 1;
          this.getData();
        })
      }else{
        this.currentPage = this.currentPage - 1;
        this.getData();
      }
    },
    nextPage(){
      if(this.radio[this.currentPage] == 0){
        Dialog.confirm({
          title: '提示',
          message: '本题尚未完成是否进入下一页?',
        })
        .then(() => {
          this.currentPage = this.currentPage + 1;
          this.getData();
        })
      }else{
        let accomplish = this.currentPage + 1;
        if(accomplish == this.list.length){
          this.answerPage = "完成";
          this.currentPag = this.list.length;
          Dialog.confirm({
            title: '提示',
            message: '已是最后一题是否完成答题?',
          })
          .then(() => {
            this.$router.push("/myinfo");
          })
        }else{
          this.currentPage = accomplish;
          this.getData();
        }
        
      }
      
    },
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
.questionnaire .questionnaire_common button{
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
.questionnaire .questionnaire_content .content_begin{
  height: 20%;
}
.questionnaire .questionnaire_content .content_topic{
  width: 80%;
  height: 90%;
  background: #fff;
  border-radius: 5px;
  padding: 15px;
}
.questionnaire .questionnaire_content .content_title{
  display: flex;
  justify-content: center;
  align-items: center;
}
.questionnaire .questionnaire_footer{
  height: 8%;
  background: #2980b9;
}
</style>