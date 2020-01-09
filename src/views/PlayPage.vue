<template>
  <div id="main">
    <Nav></Nav>
    <div class="center">
      <Lyrics v-if="show_lrc"></Lyrics>
      <PlayList v-else></PlayList>
    </div>
    <div class="footer">
      <PlayControl @toggleLrc='toggleLrc'></PlayControl>
    </div>
    <div class="bg_blur"></div>
    <div class="bg_player"></div>
    <div class="music_play"></div>
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
  background-image: url(../common/img/test.jpg);
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
</style>
<script>
import Nav from "../components/playPage/Nav.vue";
import Lyrics from "../components/playPage/Lyrics.vue";
import PlayControl from "../components/playPage/PlayControl.vue";
import PlayList from "../components/playPage/PlayList.vue";
// import MusicPlay from "../components/playPage/MusicPlay.vue"
export default {
  data() {
    return {
      show_lrc: false
    };
  },
  components: {
    Nav,
    Lyrics,
    PlayControl,
    PlayList,
  },
  methods:{
    toggleLrc:function(){
      this.show_lrc=!this.show_lrc;
    }
  },
  created:function () {
    this.$store.state.playing_music=this.$store.state.musicList[0];
    window.console.log(this.$store.state.playing_music)
  }
};
</script>