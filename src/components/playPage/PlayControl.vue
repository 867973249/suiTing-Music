<template>
  <div id="playControl">
    <div class="control_box_left">
      <span class="btn_big_prev"></span>
      <span class="btn_big_play"></span>
      <span class="btn_big_next"></span>
    </div>
    <div class="control_box_center">
      <div class="playing_info">{{"可惜没如果"}} - {{"林俊杰"}}</div>
      <el-slider
        class="progress_style"
        v-model="progress"
        :show-tooltip="false"
        @change="progress_change"
      ></el-slider>
    </div>
    <div class="control_box_right">
      <span class="btn_big_style_list"></span>
      <span class="btn_big_like"></span>
      <span class="btn_big_down"></span>
      <span class="mod_btn_comment"></span>
      <span class="btn_big_only"></span>
      <!-- btn_big_only--on -->
      <span class="btn_big_voice"></span>
    </div>
  </div>
</template>

<style  >

#playControl {
  height: 100%;
  /* background-color: #ccc; */
  margin: 0 150px;
  display: flex;
  justify-content: space-between;
}
#playControl>div>span:hover {
  opacity: 1;
}
#playControl > div {
  width: 200px;
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
.mod_btn_comment {
    width: 24px;
    height: 24px;
    /* background-position: 0 -400px; */
        background-position: 0 -430px
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

/* 
{
  rgba(255,255,255,.2)
  rgba(255,255,255,.7)
  rgba(225,225,225,.8)
} */
</style>

<script>
export default {
  data: function() {
    return {
      progress: 0
    };
  },
  methods: {
    progress_change: function(progress) {
      window.console.log("进度：", progress, this.progress);
      // this.progress=progress;
    }
  }
};
</script>