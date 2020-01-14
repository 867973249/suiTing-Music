<template>
  <div id="main">
    <Nav></Nav>
    <div class="center">
      <Lyrics v-if="show_lrc"></Lyrics>
      <PlayList v-else  @brotherHandler="brotherHandler"></PlayList>
    </div>
    <div class="footer">
      <PlayControl @toggleLrc="toggleLrc" ref="play_control" :now_progress="contorl_progress"></PlayControl>
    </div>
    <div class="bg_blur" :style="'background-image: url('+playing_music.albumSrc+')'"></div>
    <div class="bg_player"></div>
    <audio
      id="music_play"
      :src="playing_music.src"
      autoplay="false"
      controls
      hidden="true"
      width="0"
      height="0"
      @canplay="handleCanplay"
      @play="beginPlay"
      @pause="pausePlay"
      @ended="endPlay"
      ref="autoplay"
    ></audio>
  </div>
  <!--  -->
</template>
<style scoped>
#main {
  height: 100%;
  padding: 0px 30px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.bg_blur {
  height: 100%;
  width: 100%;
  position: absolute;

  background-position: 50%, 50%;
  background-size: 100%, 100%;
  background-repeat: no-repeat;
  z-index: -1;
  filter: blur(65px);
  opacity: 0.6;
  left: 0;
  top: 0;
}
.bg_player {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -2;
  background-color: rgba(0, 0, 0, 0.7);
}

.center {
  width: 92%;
  margin: 0 auto;
  padding-right: 30px;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: 300px;
  height: 80%;
}
.footer {
  height: 16%;
}
#music_play {
  width: 0;
  height: 0;
  display: none;
}
</style>
<script>
import Nav from "../components/playPage/Nav.vue";
import Lyrics from "../components/playPage/Lyrics.vue";
import PlayControl from "../components/playPage/PlayControl.vue";
import PlayList from "../components/playPage/PlayList.vue";
// import MusicPlay from "../components/playPage/MusicPlay.vue"
window.onready = function() {
  document.querySelector("#music_play").play();
  window.console.log(1);
};
export default {
  data() {
    return {
      show_lrc: false,
      music_play: null,
      contorl_progress: 0
    };
  },
  components: {
    Nav,
    Lyrics,
    PlayControl,
    PlayList
  },
  methods: {
    toggleLrc: function() {
      this.show_lrc = !this.show_lrc;
    },
    handleCanplay(e) {
      this.$store.state.play_audio = e.target;
      this.$nextTick(() => {
        this.$refs.autoplay.play();
      });
    },
    beginPlay(e) {
      let target = e.target;
      // let duration=target.duration
      clearInterval(this.music_timer);
      this.music_timer = setInterval(() => {
        this.contorl_progress = (target.currentTime / target.duration) * 100;
      }, 1000);
    },
    pausePlay() {
      clearInterval(this.music_timer);
    },
    endPlay(){
      //切歌
      clearInterval(this.music_timer);
      this.$refs.play_control.nextMusic();
    },
    brotherHandler(){
      this.$refs.play_control.nextMusic();
    }
  },
  created: function() {
    this.$store.state.playing_music = this.$store.state.musicList[0];
    window.console.log(this.$store.state.playing_music);
  },
  computed: {
    playing_music: function() {
      return this.$store.state.playing_music;
    },
    play_audio: function() {
      return this.$store.state.play_audio;
    }
  },
  watch: {}
};
</script>