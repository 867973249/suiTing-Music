<template>
  <div id="nav">
    <div  style="float:left;position: relative;">
      <!-- class="nav_left_top" 
      随听音乐 -->
      <img src="https://y.gtimg.cn/mediastyle/yqq/img/player_logo.png" alt="随听" />
      <!-- <div class=""></div> -->
    </div>
    <div class="userBox">
      <div class="avatorBox">
        <img
          class="avator"
          src="http://thirdqq.qlogo.cn/g?b=sdk&k=pb8YwexmfEvLqpKuG4edJA&s=140&t=1572788016"
          alt
        />
        <img
          class="comeFrom"
          src="https://y.gtimg.cn/mediastyle/yqq/img/login_qq.png?max_age=2592000"
          alt
        />
      </div>
      <div class="userName">{{userName}}</div>
      <div class="exit">退出</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

#nav {
  width: 100%;
  height: 60px;
  padding-top: 10px;
  line-height: 60px;
  .userBox {
    float: right;
    display: flex;
    align-items: center;
    color: rgba(225,225,225,.8);
    .exit {
      margin: 0 20px;
      cursor: pointer;
    }
    .userName {
      cursor: pointer;
    }
    .userName:hover,
    .exit:hover {
      color: #fff;
      
    }
  }
}
#nav::after {
  content: "";
  display: block;
  clear: both;
}
.avatorBox {
  position: relative;
  width: 30px;
  height: 30px;
  margin-right: 20px;
  cursor: pointer;
  .avator {
    width: 30px;
    height: 30px;
    position: absolute;
    border-radius: 50%;
  }
  .comeFrom {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 12px;
    height: 12px;
  }
}
.nav_left_top{
  width: 85px;
  float: left;
  color: rgba(225, 225, 225, 0.8);
  font-size: 21px;
  font-family: cursive;
  opacity: 1;
}
.nav_left_top:hover{
  color: #fff;
  cursor: pointer;
}
</style>

<script>
export default {
  data: function() {
    return {
      userName: "Lost&finding"
    };
  }
};
</script>