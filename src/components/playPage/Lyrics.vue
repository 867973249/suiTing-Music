<template>
  <div class="lyrics_box">
    <div id="lyrics_view">
      <div
        id="lyrics_content"
        :style="'top:'+(auto_scroll_flag?(-58*(now_lyric_index-2)):content_top)+'px'"
        v-on:mousedown="mouse_down"
        @mouseup="mouse_up"
        @mousemove="mouse_move"
        @mouseleave="mouse_leave"
      >
        <p
          :class="'lyric_item '+((index==now_lyric_index)?'play_on':'')"
          v-for="(value,index) in lyricArray"
          v-bind:key="index"
        >{{value.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
//var lyricStr =
//  " ,你听不到我的声音,他脱口而出是你姓名,小确定我要遇见你,就像曾经交换过眼睛,我好想在哪见过你,我好像在哪见过你";
export default {
  data: function() {
    return {
      lyricArray: [
        //歌词数据
        {
          time: 0,
          content: ""
        }
      ],
      auto_scroll_flag: false,
      move_flag: false,
      content_top: 0,
      move_current: undefined,
      move_timer: undefined,
      pre_timer: undefined,
      lyric_offset_height: 2000,
      lyric_reg: {
        _regTi: /\[ti:(.+)\]/,
        _regAr: /\[ar:(.+)\]/,
        _regAl: /\[al:(.+)\]/,
        _regBy: /\[by:(.+)\]/,
        _regOffset: /\[offset:.+\]/,
        _regTime: /\[\d+:\d+(\.\d+)?\]/g
      }
      // now_lyric_index:1
    };
  },
  created: function() {
    this.getLyrics();
  },
  methods: {
    getLyrics() {
      //获取歌词文件，渲染到页面
      this.Axios({
        methods: "get",
        url: "http://182.92.232.131:8001/static/lrc/kxmrg.lrc"
      })
        .then(respone => {
          let data;
          if (respone.data.split("\n").length > 1) {
            data = respone.data.split("\n");
          } else {
            data = respone.data.split("\r\n");
          }
          let that = this;
          data.forEach(el => {
            let time = el.match(that.lyric_reg._regTime);
            if (time != null) {
              that.lyricArray.push({
                time: that.getTime(time[0]),
                content: el.substring(time[0].length)
              });
            }
          });
          console.log(this.lyricArray);
          // this.lyricArray.push(...list);
        })
        .catch(function(error) {
          console.log(error);
        });
      console.log(this.lyricArray);
    },
    mouse_down: function(e) {
      // e.currentTarget 获取绑定事件的元素
      this.move_flag = true;
      this.auto_scroll_flag=false;
      this.move_current = e.clientY;
      window.console.log(e.clientY);
    },
    mouse_up: function() {
      this.move_flag = false;
      setTimeout(() => {
        if(!this.auto_scroll_flag){
          this.auto_scroll_flag=true;
        }
      }, 1000);
    },
    mouse_leave: function() {
      if (!this.move_flag) {
        return;
      }
      this.move_flag = false;
    },
    mouse_move: function(e) {
      if (!this.move_flag || this.move_timer != this.pre_timer) {
        return;
      }
      this.move_timer = setTimeout(() => {
        console.log(this.move_current, e.clientY);

        var top = this.content_top + e.clientY - this.move_current;
        this.move_current = e.clientY;
        if (top > 0) {
          this.content_top = 0;
        } else if (top < -this.lyric_offset_height) {
          this.content_top = -this.lyric_offset_height;
        } else {
          this.content_top = top;
        }

        clearTimeout(this.move_timer);
        this.pre_timer = this.move_timer;
      }, 15);
    },
    getTime: function(timeStr) {
      //将时间转换为秒数
      timeStr = timeStr.substring(1, timeStr.length - 1);
      let time = timeStr.split(":");
      time = time[0] * 60 + parseFloat(time[1]);
      console.log(time);
      return time;
    }
  },
  computed: {
    // 计算属性的 getter
    final_top: function() {
      // `this` 指向 vm 实例
      var top = this.content_top;
      if (top > 0) {
        top = 0;
      } else if (top < -this.lyric_offset_height) {
        top = -this.lyric_offset_height;
      }
      return top;
    },
    now_lyric_index: function() {
      return 1;
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
  mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.6) 15%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0.6) 85%,
    rgba(255, 255, 255, 0) 100%
  );
  position: relative;
}
#lyrics_content {
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

#lyrics_content > p.play {
  color: #31c27c;
}

.play_on {
  color: #31c27c !important;
  text-shadow: 5px 2px 6px #000;
}
</style>