<template>
  <div id="playControl">
    <div class="control_box_left">
      <span class="btn_big_prev" @click="prevMusic"></span>
      <span
        :class="'btn_big_play '+ (this.playing_music.isplay?'btn_big_play--pause':'') "
        @click="playChange"
      ></span>
      <span class="btn_big_next" @click="nextMusic"></span>
    </div>
    <div class="control_box_center">
      <div style="width:100%">
        <div class="playing_info">
          <div>
            <span>{{playing_music.song}}</span> -
            <span>{{playing_music.singer}}</span>
          </div>
          <div class="time_box">
            {{this.currentTime}}/{{playing_music.time}}
            <!-- {{time}} -->
          </div>
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
      <span :class="'btn_big_style_'+loopWay" @click="toggleLoopWay"></span>
      <span :class="'btn_big_like '+(onLike?'btn_big_like_like':'')" @click="toggleLike"></span>
      <span class="btn_big_down"></span>
      <span class="mod_btn_comment"></span>
      <span :class="'btn_big_only '+(onOnly?'':'btn_big_only--on')" @click="toggleContent"></span>
      <!-- btn_big_only--on -->
      <span
        :class="'btn_big_voice '+(onVolume?'':'btn_big_voice--on')"
        @click.self="toggleVolume"
        style="position:relative"
      >
        <!-- @click.capture.stop='' 捕获期触发，停止事件传递
        click.self='' 点击本身才会触发
        -->
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

<style >
#playControl {
  height: 100%;
  /* background-color: #ccc; */
  width: 92%;
  /* margin: 0 auto; */
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
.btn_big_play--pause {
  background-position: -30px 0;
}
.btn_big_next {
  width: 19px;
  height: 20px;
  background-position: 0 -52px;
}

.btn_big_like {
  width: 23px;
  height: 21px;
  background-position: 0 -96px;
  /* background-position: -30px -96px; */
}
.btn_big_like_like {
  background-position: -30px -96px;
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
.btn_big_voice--on {
  background-position: 0 -182px;
}

.btn_big_style_list {
  width: 26px;
  height: 25px;
  background-position: 0 -205px;
}
.btn_big_style_order {
  width: 26px;
  height: 20px;
  background-position: 0 -260px;
}
.btn_big_style_random {
  width: 26px;
  height: 19px;
  background-position: 0 -74px;
}
.btn_big_style_single {
  width: 26px;
  height: 25px;
  background-position: 0 -232px;
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
  /* opacity: 0.8; */
  user-select: none;
  height: 21px;
  display: flex;
  justify-content: space-between;
}
.playing_info span {
  cursor: pointer;
}
.playing_info span:hover {
  color: #fff;
}
.playing_info .time_box {
  padding-right: 30px;
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
      onOnly: true,
      onVolume: true,
      loopWay: "list",
      onLike: false
    };
  },
  props: ["now_progress"],
  methods: {
    progress_change: function(progress) {
      window.console.log("进度：", progress, this.progress);
      this.$store.state.play_audio.currentTime =
        (this.progress * this.$store.state.play_audio.duration) / 100;
    },
    sound_change: function(sound) {
      window.console.log("音量：", sound, this.sound);
    },
    toggleContent: function() {
      this.onOnly = !this.onOnly;
      this.$emit("toggleLrc");
    },
    toggleVolume: function() {
      this.onVolume = !this.onVolume;
    },
    toggleLoopWay: function() {
      switch (this.loopWay) {
        case "list":
          this.loopWay = "order";
          break;
        case "order":
          this.loopWay = "random";
          break;
        case "random":
          this.loopWay = "single";
          break;
        case "single":
          this.loopWay = "list";
          break;
        default:
          break;
      }
    },
    toggleLike: function() {
      this.onLike = !this.onLike;
    },
    playChange: function() {
      this.$store.state.playing_music.isplay = !this.playing_music.isplay;
      if (this.playing_music.isplay) {
        this.$store.state.play_audio.play();
      } else {
        this.$store.state.play_audio.pause();
      }
    },
    stopPop: function(event) {
      event.preventDefault();
      event.stopPropagation();
    },
    prevMusic() {
      // window.console.log(this.playing_music);
      this.switchMusic("prev");
    },
    nextMusic() {
      this.switchMusic("next");
    },
    switchMusic(method) {
      let musicList = this.$store.state.musicList;
      let isNext = method == "next" ? true : false;
      let nowIndex = musicList.findIndex(item => item === this.playing_music);
      window.console.log(musicList, nowIndex);
      switch (this.loopWay) {
        case "list":
          if (isNext) {
            nowIndex = nowIndex + 1;
          } else {
            nowIndex = nowIndex - 1;
          }
          break;
        case "order":
          if (isNext) {
            nowIndex = nowIndex + 1;
          } else {
            nowIndex = nowIndex - 1;
          }
          break;
        case "random":
          nowIndex = Math.floor(Math.random(0, 1) * musicList.length);
          break;
        case "single":
          if (isNext) {
            nowIndex = nowIndex + 1;
          } else {
            nowIndex = nowIndex - 1;
          }
          break;
        default:
          break;
      }
      if (nowIndex >= musicList.length) {
        nowIndex = 0;
      } else if (nowIndex < 0) {
        nowIndex = musicList.length - 1;
      }

      this.$store.state.playing_music.isplay = false;
      musicList[nowIndex].isplay = true;
      this.$store.state.playing_music = musicList[nowIndex];

      window.console.log(nowIndex, this.playing_music);
    }
  },
  computed: {
    playing_music: function() {
      return this.$store.state.playing_music;
    },
    play_audio: function() {
      return this.$store.state.play_audio;
    },
    currentTime:function () {
      let time=new Date(this.progress/100*this.play_audio.duration*1000);
      let res='';
      if(time.getMinutes()<10){
        res+=('0'+time.getMinutes());
      }else{
        res+=time.getMinutes();
      }
      res+=':'
      if(time.getSeconds()<10){
        res+=('0'+time.getSeconds());
      }else{
        res+=time.getSeconds();
      }
        console.log(res);
      // if(res=='NaN:NaN'){
      //   return '00:00'
      // }
      return res;
    }
  },
  mounted: function() {},
  watch: {
    now_progress: function() {
      // console.log(this.now_progress);
      this.progress = this.now_progress;
    }
  }
};
</script>