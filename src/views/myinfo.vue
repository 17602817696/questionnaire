<template>
    <div class="myinfo">
        <div class="myinfo_header">
            <span class="cfff fz20 fbold">information</span>
        </div>
        <div class="myinfo_content">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="../assets/image/banner_1.jpg" style="width: 100%;height: 100%;" alt="图片加载失败">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../assets/image/banner_2.jpg" style="width: 100%;height: 100%;" alt="图片加载失败">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../assets/image/banner_3.jpg" style="width: 100%;height: 100%;" alt="图片加载失败">
                </van-swipe-item>
                <van-swipe-item>
                    <img src="../assets/image/banner_4.jpg" style="width: 100%;height: 100%;" alt="图片加载失败">
                </van-swipe-item>
            </van-swipe>
            <div class="content_box">
                <div class="pointer" @click="seeQuestionnaire">查看问卷</div>
                <div class="pointer" @click="maskData(1)">问卷记录</div>
                <div class="pointer" @click="maskData(2)">排行榜</div>
            </div>
            <div class="content_box">
                <div class="pointer" @click="collect">我的收藏</div>
                <div class="pointer" @click="mynote">我的笔记</div>
                <div class="pointer" @click="goHome">退出</div>
            </div>
        </div>
        <!-- 蒙板层 -->
        <div class="maskLayer" v-show="show" @click="show = false">
            <div class="block">
                <div style="height:90%" class="over-y">
                    <p v-for="(v,i) in list" :key="i" @click.stop="goQuestionnaire(v.name)" class="flex-center borc6c6c6 marginzero pd10 pointer">{{v.name}}</p>
                </div>
                <div style="height:10%">
                    <van-button @click="show=false" style="width: 100%;height:100%" type="primary">取消</van-button>
                </div>
            </div>
        </div>

        <div class="maskLayer" v-show="isShow">
            <div class="block">
                <div style="height:90%" class="over-y">
                    <p v-for="(v,i) in data" :key="i" class="flex-center borc6c6c6 marginzero pd10 pointer">{{v.name}}</p>
                </div>
                <div style="height:10%">
                    <van-button @click="isShow=false" style="width: 100%;height:100%" type="primary">取消</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
     data() {
        return {
            show: false,
            isShow: false,
            data:[
                {name:"野外知识问卷完成率90%"},
                {name:"求生知识问卷完成率80%"},
                {name:"一对多知识问卷完成率70%"},
                {name:"野外知识问卷完成率60%"},
                {name:"一对多知识问卷完成率50%"},
                {name:"一对多知识问卷完成率40%"},
                {name:"野外知识问卷完成率30%"},
                {name:"户外知识问卷完成率20%"},
                {name:"野外知识问卷完成率10%"},
                {name:"户外知识问卷完成率100%"},
            ],
            list:[
                {name:"野外知识问卷"},
                {name:"求生知识问卷"},
                {name:"军体拳问卷"},
                {name:"户外知识问卷"},
                {name:"一对多知识问卷"},
                {name:"野外知识问卷"},
                {name:"求生知识问卷"},
                {name:"军体拳问卷"},
                {name:"户外知识问卷"},
                {name:"一对多知识问卷"},
                {name:"野外知识问卷"},
                {name:"求生知识问卷"},
                {name:"军体拳问卷"},
                {name:"户外知识问卷"},
                {name:"一对多知识问卷"},
            ],
            rankingList:[
                {name:"刘备"},
                {name:"关羽"},
                {name:"张飞"},
                {name:"诸葛亮"},
                {name:"曹操"},
                {name:"赵云"},
                {name:"黄忠"},
                {name:"司马懿"},
            ],
        };
    },
    methods: {
        seeQuestionnaire() {
            setTimeout(() => this.show = true, 500);
        },
        maskData(v){
            setTimeout(() => this.isShow = true, 500);
            if(v == 2){
                this.data = this.rankingList;
            }
        },
        collect(){
            alert("我的收藏")
        },
        mynote(){
            alert('我的笔记')
        },
        goHome(){
            this.$router.push("/")
        },
        goQuestionnaire(v){
            Dialog.confirm({
                message: `即将跳转至${v}`,
            })
            .then(() => {
                this.$router.push("/questionnaire")
            })
            .catch(() => {
                // on cancel
            });
        }
    },
}
</script>

<style scoped>
.myinfo{
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
}
.myinfo .marginzero{
    margin: 0;
}
.myinfo .myinfo_header{
    height: 8%;
    background: #353b48;
    display: flex;
    justify-content: center;
    align-items: center;
}
.myinfo .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.myinfo .block {
  width: 80%;
  height: 80%;
  background-color: #fff;
}
.myinfo .maskLayer{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}
.myinfo .myinfo_content{
    height: 80%;
    padding: 20px 10px;
}
.myinfo .myinfo_content .my-swipe{
    height: 30%;
}
.myinfo .myinfo_content .my-swipe .van-swipe-item {
    height: 100%;
}
.myinfo .myinfo_content .content_box{
    height: 15%;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
.myinfo .myinfo_content .content_box>div{
    width: 30%;
    height: 90%;
    background: #38ada9;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.6s;
}
.myinfo .myinfo_content .content_box>div:hover{
    width: 33%;
    height: 100%;
    color: #fff;
    font-weight: bold;
    box-shadow:0px 0px 10px #eaeaea;
}
</style>