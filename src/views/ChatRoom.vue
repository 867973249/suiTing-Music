<template>
  <div class="container">
    <div class="title">
      <span>迷你聊天室</span>
      <span class="hidden_box">-</span>
      <span class="close_box">x</span>
    </div>
    <div class="center_view">
      <div class="center_content">
        <div
          v-for="(value,i) in messgeList"
          :key="i"
          :class="'content_item '+( value.is_slef ? 'self_message':'')"
        >
          <img src="../common/img/avator_define.jpg" alt class="avator" />
          <p class="message_box">{{value.msg}}</p>
        </div>
      </div>
    </div>
    <div class="send_box">
      <el-input type="textarea" :rows="1" placeholder="请输入内容" v-model="textarea"></el-input>
      <el-button @click="sendMssage" class="send_btn" title="按ctrl+enter发送">发送(S)</el-button>
    </div>
  </div>
</template>
<style scoped>
.container {
  width: 400px;
  height: 350px;
  position: fixed;
  bottom: 30px;
  left: 10px;
  /*background-color: #ccc;*/
  box-shadow: 0px 0px 3px 1px #ccc;
  display: flex;
  flex-direction: column;
}
.title {
  text-align: center;
  line-height: 40px;
  font-size: 17px;
  position: relative;
  background-image: linear-gradient(
    to right,
    rgb(194, 161, 161),
    rgb(194, 194, 155)
  );
  opacity: 0.8;
}
.hidden_box,
.close_box {
  display: block;
  height: 15px;
  width: 20px;
  top: 50%;
  transform: translate(0, -50%);
  text-align: center;
  line-height: 100%;
}
.title > .hidden_box {
  position: absolute;
  right: 40px;
  cursor: pointer;
}
.title > .close_box {
  position: absolute;
  right: 10px;
  cursor: pointer;
}
.hidden_box:hover,
.close_box:hover {
  background-color: #fff;
}

.center_view {
  height: 260px;
  border-bottom: 1px solid rgba(219, 204, 204, 0.6);
  overflow: auto;
  /* background-color: #ccc; */
}
.center_view > .center_content {
  padding: 10px 6px;
  padding-left: 8px;
  /* min-height: 120%; */
}
.content_item {
  min-height: 48px;
  position: relative;
}
.content_item:not(:nth-child(1)) {
  margin-top: 5px;
}
.content_item > .avator {
  position: absolute;
  left: 0;
  top: 0;
  width: 42px;
  height: 42px;
  border-radius: 50%;
}

.content_item > .message_box {
  max-width: 70%;
  width: auto;
  margin: 10px 0 0 50px;
  /* border: 1px solid rgba(64, 48, 48, 0.3); */
  background-color: rgba(187, 143, 143, 0.3);
  display: inline-block;
  padding: 5px 8px;
  border-radius: 8px;
  line-height: 24px;
  font-size: 15px
}
/* slef_message */
.self_message > .avator {
  right: 0;
  left: auto;
}
.self_message > .message_box {
  margin-right: 50px;
  margin-left: 0;
  float: right;
}
.self_message::after {
  content: '';
  display: block;
  clear: both;
}
.send_box {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5px 0 10px;
  flex-grow: 1;
}
.send_btn {
  padding: 8px 10px;
  margin-left: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      messgeList: [
        { msg: "xxxxxx", is_slef: false },
        { msg: "是不是是是不是是是不是是是不是是是不是是是不是是是不是是是不是是是不是是", is_slef: true },
        { msg: "xxxxx", is_slef: false },
        { msg: "xxxxx", is_slef: false }
      ],
      textarea: ""
    };
  },
  methods: {
    sendMssage() {
    //   var reg = new RegExp("\n", "g");
    //   setTimeout(() => {
    //   }, 0);
      window.console.log(this.textarea);
      this.textarea = "";
    }
  },
  created:function(){
      
  },
  mounted: function() {
    var input = document.querySelector(".el-textarea__inner");
    var _this = this;
    input.onkeypress = function(e) {
      window.console.log(e.keyCode);
      if (e.keyCode != 10) {
        return;
      }
      _this.sendMssage();
    };
  }
};
</script>