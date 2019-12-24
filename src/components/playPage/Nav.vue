<template>
  <div id="nav">
    <div style="float:left">
      <img src="https://y.gtimg.cn/mediastyle/yqq/img/player_logo.png" alt="随听" />
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

    .exit {
      margin: 0 6px;
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
  margin-right: 10px;
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