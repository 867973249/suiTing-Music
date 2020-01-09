<template>
  <!-- v-show="is_show" -->
  <div  v-show="is_show"  class="alert_box" :style="'opacity:'+(show_alert?'1':'0')">
    <div class="icon_class">
      <span :class="'iconfont '+icon_class"></span>
    </div>
    <div class="alert_title">{{alert_title}}</div>
  </div>
</template>
<style scoped>
.alert_box {
  width: 200px;
  height: 150px;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  transition: all 0.5s;
  text-align: center;
  cursor: default;
  border-radius: 5px;
}
.alert_box .alert_title{
    color: #fff;
    font-size: 13px;
}
.icon_class {
  text-align: center;
  padding: 30px 0 10px 0;
}
.iconfont {
  font-size: 58px;
  color: #fff;
}
</style>
<script>
export default {
  data: function() {
    return {
      is_show: false
    };
  },
  props: ["alert_title", "icon_class", "show_alert"],
  watch: {
    show_alert: function() {
      if (!this.show_alert) {
        return;
      }
      this.is_show = true;
      setTimeout(() => {
        this.is_show = false;
      }, 2500);
    }
  },
  method: {
    // show_alert:function () {
    //     var timer=setTimeout(() => {
    //     }, 1500);
    // }
  }
};
</script>