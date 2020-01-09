<template>
  <div class="lyrics_box">
    <div id="lyrics_view" >
      <div id="lyrics_content" :style="'top:'+(content_top)+'px'" v-on:mousedown="mouse_down" @mouseup="mouse_up" @mousemove="mouse_move" @mouseleave="mouse_leave">
        <p class="lyric_item" v-for="(value,index) in lyricArray" v-bind:key="index">{{value}}</p>
      </div>
    </div>
  </div>
</template>

<script>
var lyricStr='   ,你听不到我的声音,他脱口而出是你姓名,小确定我要遇见你,就像曾经交换过眼睛,我好想在哪见过你,我好像在哪见过你';
export default {
  data: function() {
    return {
      array: [{ a: 1, b: 2 }, { a: 2, b: 2 }, { a: 3, b: 2 }],
      lyricArray: lyricStr.split(','),
//      ['',"xxxxxxxxxxxxx", "xxxxxxxxxxxxx", "xxxxxxxxxxxxx","xxxxxxxxxxxxx", "xxxxxxxxxxxxx"],
      //歌词数据
      move_flag:false,
      content_top:0,
      move_current:undefined,
      move_timer:undefined,
      pre_timer:undefined,
      lyric_offset_height:2000
    };
  },
  methods:{
    mouse_down:function(e){
      // e.currentTarget 获取绑定事件的元素
      this.move_flag=true;
      this.move_current=e.clientY;
      window.console.log(e.clientY)
    },
    mouse_up:function(){
      this.move_flag=false;
    },
    mouse_leave:function(){
      if(!this.move_flag){
        return;
      }
      this.move_flag=false;
    },
    mouse_move:function(e){
      if(!this.move_flag || (this.move_timer!=this.pre_timer)){
        return;
      }
      this.move_timer=setTimeout(() => {
        window.console.log(this.move_current,e.clientY);

        var top=this.content_top+e.clientY-this.move_current;
        this.move_current=e.clientY;
        if(top>0){
          this.content_top=0;
        }else if(top<-this.lyric_offset_height){
          this.content_top=-this.lyric_offset_height
        }else{
          this.content_top=top
        }

        clearTimeout(this.move_timer);
        this.pre_timer=this.move_timer;
      }, 15);
    }
  },
  computed: {
    // 计算属性的 getter
    final_top: function () {
      // `this` 指向 vm 实例
      var top=this.content_top;
      if(top>0){
        top=0;
        // this.content_top=top;
      }else if(top<-this.lyric_offset_height){
        top=-this.lyric_offset_height;
        // this.content_top=top;
      }
      
      return top
    }
  }
};
</script>

<style >
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
}
#lyrics_content > p {
  height: 58px;
  line-height: 58px;
  text-align: center;
  font-size: 22px;
  color: #fff;
}

#lyrics_content > p.play{
  color: #31c27c;
}
</style>