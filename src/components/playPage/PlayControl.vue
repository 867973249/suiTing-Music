<template>
  <div id="playControl">
    <div class="control_box_left">
      <span class="btn_big_prev"></span>
      <span :class="'btn_big_play '+ (this.playing?'btn_big_play--pause':'') " @click="playChange"></span>
      <span class="btn_big_next"></span>
    </div>
    <div class="control_box_center">
      <div style="width:100%">
        <div class="playing_info">
          <span>{{"可惜没如果"}}</span> -
          <span>{{"林俊杰"}}</span>
        </div>
        <el-slider
          class="progress_style"
          v-model="progress"
          :show-tooltip="false"
          @change="progress_change"
        ></el-slider>
      </div>
    </div>
    <div class="control_box_right">
      <span class="btn_big_style_list"></span>
      <span class="btn_big_like"></span>
      <span class="btn_big_down"></span>
      <span class="mod_btn_comment"></span>
      <span class="btn_big_only" @click="toggleContent"></span>
      <!-- btn_big_only--on -->
      <span class="btn_big_voice" style="position:relative">
        <el-slider
          class="progress_style sound"
          v-model="sound"
          :show-tooltip="true"
          @change="sound_change"
        ></el-slider>
      </span>
    </div>
  </div>
</template>

<style  >
#playControl {
  height: 100%;
  /* background-color: #ccc; */
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
#playControl > div > span:hover {
  opacity: 1;
}
#playControl > div {
  height: 100%;
  /* background-color: #ccc; */
}

#playControl > .control_box_center {
  flex-grow: 1;
  min-width: 450px;
}

.btn_big_prev {
  width: 19px;
  height: 20px;
  background-position: 0 -30px;
}
.btn_big_play {
  width: 21px;
  height: 29px;
  background-position: 0 0;
}
.btn_big_play--pause{
  background-position: -30px 0;
}
.btn_big_next {
  width: 19px;
  height: 20px;
  background-position: 0 -52px;
}
.btn_big_style_list {
  width: 26px;
  height: 25px;
  background-position: 0 -205px;
}
.btn_big_like {
  width: 23px;
  height: 21px;
  background-position: 0 -96px;
  /* background-position: -30px -96px; */
}
.btn_big_down {
  width: 22px;
  height: 21px;
  background-position: 0 -120px;
}
/* .btn_big_down:hover{
    width: 22px;
    height: 21px;
    background-position: 0 -120px;
} */
.mod_btn_comment {
  width: 24px;
  height: 24px;
  /* background-position: 0 -400px; */
  background-position: 0 -430px;
}
.btn_comment99:hover {
  background-position: 0 -490px;
}
.btn_big_only {
  width: 74px;
  height: 26px;
  background-position: 0 -282px;
  /* background-position: 0 -311px; */
}
.btn_big_only--on {
  background-position: 0 -311px;
}
.btn_big_voice {
  width: 26px;
  height: 21px;
  background-position: 0 -144px;
}

.btn_big_down,
.btn_big_like,
.btn_big_next,
.btn_big_only,
.btn_big_play,
.btn_big_prev,
.btn_big_style_list,
.btn_big_style_order,
.btn_big_style_random,
.btn_big_style_single,
.btn_big_voice,
.btn_lang,
.mod_btn_comment,
.player_progress__dot {
  background-image: url("../../common/img/player.png");
  /* background-image: -webkit-image-set(url(img/player.png?max_age=2592000&v=f051617…&v=f051617…) 1x,url(img/player@2x.png?max_age=2592000&v=f051617…&v=f051617…&v=19a355a…) 2x); */
  opacity: 0.8;
  filter: alpha(opacity=80);
  display: inline-block;
  cursor: pointer;
}
.sound {
  position: absolute;
  width: 80px;
  left: 35px;
  top: 50%;
  transform: translate(0, -50%);
}
.progress_style .el-slider__runway {
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
}
.progress_style .el-slider__bar {
  height: 2px;
  background-color: rgba(225, 225, 225, 0.7);
}
.progress_style .el-slider__button-wrapper {
  top: -17px;
}
.progress_style .el-slider__button {
  width: 10px;
  height: 10px;
  border: none;
  /* background-color: rgba(225,225,225,.8); */
}
.playing_info {
  opacity: 0.8;
  user-select: none;
  cursor: pointer;
}
.playing_info > span:hover {
  color: #fff;
}
.control_box_left {
  width: 200px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-evenly;
}
.control_box_center {
  min-width: 550px;
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  align-items: center;
}
.control_box_right {
  width: 350px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-evenly;
}
</style>

<script>
export default {
  data: function() {
    return {
      progress: 0,
      sound: 60,
      playing:false
    };
  },
  methods: {
    progress_change: function(progress) {
      window.console.log("进度：", progress, this.progress);
      // this.progress=progress;
    },
    sound_change: function(sound) {
      window.console.log("音量：", sound, this.sound);
      // this.progress=progress;
    },
    toggleContent: function(e) {
      //切换icon
      // e.currentTarget.toggle('btn_big_only--on')
      var classArray=e.currentTarget.classList;
      if (classArray.contains("btn_big_only--on")) {
        classArray.remove("btn_big_only--on");
      } else {
        classArray.add("btn_big_only--on");
      }
    },
    playChange:function(){
      this.playing=!this.playing;
    }
  }
};
</script>