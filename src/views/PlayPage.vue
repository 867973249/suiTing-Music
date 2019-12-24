<template>
  <div id="main">
    <div class="bg_blur"></div>
    <div class="bg_player"></div>
    <Nav></Nav>
    <div class="center">
        <Lyrics v-if="show_lrc"></Lyrics>
    </div>
  </div>
</template>
<style scoped>

#main {
  height: 100%;
  padding: 0px 30px;
  position: relative;
}
.bg_blur {
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("https://y.gtimg.cn/music/photo_new/T002R300x300M000003nkrW42K3FLd.jpg?max_age=2592000");
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

.center{
    width: 1000px;
    margin: 0 auto;
    padding-right: 30px;
}
</style>
<script>
import Nav from "../components/playPage/Nav.vue";
import Lyrics from "../components/playPage/Lyrics.vue";

export default {
  data() {
    return {
        show_lrc:true
    };
  },
  components: {
    Nav,
    Lyrics
  }
};
</script>