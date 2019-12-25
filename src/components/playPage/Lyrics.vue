<template>
  <div class="lyrics_box">
    <div id="lyrics_view" >
      <div id="lyrics_content" :style="'top:'+(content_top)+'px'" v-on:mousedown="mouse_down" @mouseup="mouse_up" @mousemove="mouse_move">
        <p class="lyric_item" v-for="(value,index) in lyricArray" v-bind:key="index">{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      array: [{ a: 1, b: 2 }, { a: 2, b: 2 }, { a: 3, b: 2 }],
      lyricArray: ['',"xxxxxxxxxxxxx", "xxxxxxxxxxxxx", "xxxxxxxxxxxxx","xxxxxxxxxxxxx", "xxxxxxxxxxxxx"],
      //歌词数据
      move_flag:false,
      content_top:0,
      move_current:undefined
    };
  },
  methods:{
    mouse_down:function(e){
      // e.currentTarget 获取绑定事件的元素
      this.move_flag=true;
      this.move_current=e.offsetY;
    },
    mouse_up:function(){
      this.move_flag=false;
    },
    mouse_move:function(e){
      if(!this.move_flag){
        return;
      }
      window.console.log(this.move_current,e.offsetY-this.move_current);
      this.content_top+=e.offsetY-this.move_current;
      this.move_current=e.offsetY
    }
  }
};
</script>

<style scoped>
.lyrics_box {
  height: 100%;
  padding: 80px 60px;
  box-sizing: border-box;
  user-select: none;
}
#lyrics_view {
  height: 100%;
  overflow: hidden;
  mask-image: linear-gradient(to bottom,rgba(255,255,255,0) 0,rgba(255,255,255,.6) 15%,rgba(255,255,255,1) 25%,rgba(255,255,255,1) 75%,rgba(255,255,255,.6) 85%,rgba(255,255,255,0) 100%);
  position: relative;
}
#lyrics_content{
  cursor: grab;
  width: 100%;
  position: absolute;
  top: 0;

  height: 2000px;
  background-color: rgba(100,100,100,.5);
}
#lyrics_content > p {
  height: 58px;
  line-height: 58px;
  text-align: center;
  font-size: 22px;
  color: #fff;
}
</style>