import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicList: [{
        song: "可惜没如果",
        songid: 1,
        singer: "林俊杰",
        src: 'http://182.92.232.131:8001/static/music/可惜没如果.mp3',
        time: "04:58",
        album: "新地球",
        albumSrc: 'http://182.92.232.131:8001/static/img/T002R300x300M000001IV22P1RDX7p.jpg',
        isplay: false
      },
      {
        song: "齐天大圣",
        songid: 2,
        singer: "华晨宇",
        time: "04:12",
        src: 'http://182.92.232.131:8001/static/music/齐天大圣.mp3',
        album: '天籁之战 第七季',
        albumSrc: 'http://182.92.232.131:8001/static/img/T002R300x300M000003W6K120Kjh5z.jpg',
        isplay: false
      },
      {
        song: "樱花樱花想见你",
        singer: "blibli群星",
        songid: 3,
        time: "04:59",
        src: 'http://182.92.232.131:8001/static/music/樱花樱花想见你.mp3',
        album: 'bilibli翻唱集',
        albumSrc: 'http://182.92.232.131:8001/static/img/T001R300x300M000001NcxsJ24CC3T.jpg',
        isplay: false
      },{
        song: "可惜没如果",
        songid: 4,
        singer: "林俊杰",
        src: 'http://182.92.232.131:8001/static/music/可惜没如果.mp3',
        time: "04:58",
        album: "新地球",
        albumSrc: 'http://182.92.232.131:8001/static/img/T002R300x300M000001IV22P1RDX7p.jpg',
        isplay: false
      },
      {
        song: "齐天大圣",
        songid: 5,
        singer: "华晨宇",
        time: "04:12",
        src: 'http://182.92.232.131:8001/static/music/齐天大圣.mp3',
        album: '天籁之战 第七季',
        albumSrc: 'http://182.92.232.131:8001/static/img/T002R300x300M000003W6K120Kjh5z.jpg',
        isplay: false
      },
      {
        song: "樱花樱花想见你",
        singer: "blibli群星",
        songid: 6,
        time: "04:59",
        src: 'http://182.92.232.131:8001/static/music/樱花樱花想见你.mp3',
        album: 'bilibli翻唱集',
        albumSrc: 'http://182.92.232.131:8001/static/img/T001R300x300M000001NcxsJ24CC3T.jpg',
        isplay: false
      },{
        song: "可惜没如果",
        songid: 7,
        singer: "林俊杰",
        src: 'http://182.92.232.131:8001/static/music/可惜没如果.mp3',
        time: "04:58",
        album: "新地球",
        albumSrc: 'http://182.92.232.131:8001/static/img/T002R300x300M000001IV22P1RDX7p.jpg',
        isplay: false
      },
      {
        song: "齐天大圣",
        songid: 8,
        singer: "华晨宇",
        time: "04:12",
        src: 'http://182.92.232.131:8001/static/music/齐天大圣.mp3',
        album: '天籁之战 第七季',
        albumSrc: 'http://182.92.232.131:8001/static/img/T002R300x300M000003W6K120Kjh5z.jpg',
        isplay: false
      },
      {
        song: "樱花樱花想见你",
        singer: "blibli群星",
        songid: 9,
        time: "04:59",
        src: 'http://182.92.232.131:8001/static/music/樱花樱花想见你.mp3',
        album: 'bilibli翻唱集',
        albumSrc: 'http://182.92.232.131:8001/static/img/T001R300x300M000001NcxsJ24CC3T.jpg',
        isplay: false
      },{
        song: "可惜没如果",
        songid: 10,
        singer: "林俊杰",
        src: 'http://182.92.232.131:8001/static/music/可惜没如果.mp3',
        time: "04:58",
        album: "新地球",
        albumSrc: 'http://182.92.232.131:8001/static/img/T002R300x300M000001IV22P1RDX7p.jpg',
        isplay: false
      }

    ],
    playing_music: {},
    play_audio:{currentTime:0,duration:0},
  },
  mutations: {},
  actions: {},
  modules: {}
})