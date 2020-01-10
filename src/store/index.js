import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    musicList: [{
        song: "可惜没如果",
        songid: 1,
        singer: "林俊杰",
        src: 'http://58.49.111.29/amobile.music.tc.qq.com/C400002FoSOe0Aqz8y.m4a?guid=6708538290&vkey=73DF193F61E0144A15F893B312136B3102270F6D94600A49821133E4B9B6B4F2F21A2DA5689B2C20276B8018131F347D3CD26111B03A2E3E&uin=6273&fromtag=66',
        time: "04:58",
        album: "新地球",
        albumSrc: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001IV22P1RDX7p.jpg?max_age=2592000',
        isplay: false
      },
      {
        song: "齐天大圣",
        songid: 2,
        singer: "华晨宇",
        time: "04:12",
        src: 'http://58.49.111.29/amobile.music.tc.qq.com/C4000003Fwu93oP5oB.m4a?guid=6708538290&vkey=3D240ECB0CE0DD21786A253B6019A724D9ED75D2532829F527778E45FCDAB40A74307CE3C81E67D46E8D7CA17D0ACA741C2C506A505D9621&uin=6273&fromtag=66',
        album: '天籁之战 第七季',
        albumSrc: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003W6K120Kjh5z.jpg?max_age=2592000',
        isplay: false
      },
      {
        song: "樱花樱花想见你",
        singer: "blibli群星",
        songid: 3,
        time: "04:59",
        src: 'http://58.49.111.29/amobile.music.tc.qq.com/C400002HYlAF2xjKXz.m4a?guid=6708538290&vkey=BB8EDA4EDC6C71FF2D48CD2D931A93AD06165D10F0EC64D7432A27BD42D3675FFA4AEEB506DCC95A413D2889F1D0F270D77352345E8D4CF8&uin=6273&fromtag=66',
        album: 'bilibli翻唱集',
        albumSrc: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000001NcxsJ24CC3T.jpg?max_age=2592000',
        isplay: false
      },{
        song: "可惜没如果",
        songid: 4,
        singer: "林俊杰",
        src: 'http://58.49.111.29/amobile.music.tc.qq.com/C400002FoSOe0Aqz8y.m4a?guid=6708538290&vkey=73DF193F61E0144A15F893B312136B3102270F6D94600A49821133E4B9B6B4F2F21A2DA5689B2C20276B8018131F347D3CD26111B03A2E3E&uin=6273&fromtag=66',
        time: "04:58",
        album: "新地球",
        albumSrc: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001IV22P1RDX7p.jpg?max_age=2592000',
        isplay: false
      },
      {
        song: "齐天大圣",
        songid: 5,
        singer: "华晨宇",
        time: "04:12",
        src: 'http://58.49.111.29/amobile.music.tc.qq.com/C4000003Fwu93oP5oB.m4a?guid=6708538290&vkey=3D240ECB0CE0DD21786A253B6019A724D9ED75D2532829F527778E45FCDAB40A74307CE3C81E67D46E8D7CA17D0ACA741C2C506A505D9621&uin=6273&fromtag=66',
        album: '天籁之战 第七季',
        albumSrc: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003W6K120Kjh5z.jpg?max_age=2592000',
        isplay: false
      },
      {
        song: "樱花樱花想见你",
        singer: "blibli群星",
        songid: 6,
        time: "04:59",
        src: 'http://58.49.111.29/amobile.music.tc.qq.com/C400002HYlAF2xjKXz.m4a?guid=6708538290&vkey=BB8EDA4EDC6C71FF2D48CD2D931A93AD06165D10F0EC64D7432A27BD42D3675FFA4AEEB506DCC95A413D2889F1D0F270D77352345E8D4CF8&uin=6273&fromtag=66',
        album: 'bilibli翻唱集',
        albumSrc: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000001NcxsJ24CC3T.jpg?max_age=2592000',
        isplay: false
      },{
        song: "可惜没如果",
        songid: 7,
        singer: "林俊杰",
        src: 'http://58.49.111.29/amobile.music.tc.qq.com/C400002FoSOe0Aqz8y.m4a?guid=6708538290&vkey=73DF193F61E0144A15F893B312136B3102270F6D94600A49821133E4B9B6B4F2F21A2DA5689B2C20276B8018131F347D3CD26111B03A2E3E&uin=6273&fromtag=66',
        time: "04:58",
        album: "新地球",
        albumSrc: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001IV22P1RDX7p.jpg?max_age=2592000',
        isplay: false
      },
      {
        song: "齐天大圣",
        songid: 8,
        singer: "华晨宇",
        time: "04:12",
        src: 'http://58.49.111.29/amobile.music.tc.qq.com/C4000003Fwu93oP5oB.m4a?guid=6708538290&vkey=3D240ECB0CE0DD21786A253B6019A724D9ED75D2532829F527778E45FCDAB40A74307CE3C81E67D46E8D7CA17D0ACA741C2C506A505D9621&uin=6273&fromtag=66',
        album: '天籁之战 第七季',
        albumSrc: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003W6K120Kjh5z.jpg?max_age=2592000',
        isplay: false
      },
      {
        song: "樱花樱花想见你",
        singer: "blibli群星",
        songid: 9,
        time: "04:59",
        src: 'http://58.49.111.29/amobile.music.tc.qq.com/C400002HYlAF2xjKXz.m4a?guid=6708538290&vkey=BB8EDA4EDC6C71FF2D48CD2D931A93AD06165D10F0EC64D7432A27BD42D3675FFA4AEEB506DCC95A413D2889F1D0F270D77352345E8D4CF8&uin=6273&fromtag=66',
        album: 'bilibli翻唱集',
        albumSrc: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000001NcxsJ24CC3T.jpg?max_age=2592000',
        isplay: false
      },{
        song: "可惜没如果",
        songid: 10,
        singer: "林俊杰",
        src: 'http://58.49.111.29/amobile.music.tc.qq.com/C400002FoSOe0Aqz8y.m4a?guid=6708538290&vkey=73DF193F61E0144A15F893B312136B3102270F6D94600A49821133E4B9B6B4F2F21A2DA5689B2C20276B8018131F347D3CD26111B03A2E3E&uin=6273&fromtag=66',
        time: "04:58",
        album: "新地球",
        albumSrc: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001IV22P1RDX7p.jpg?max_age=2592000',
        isplay: false
      }

    ],
    playing_music: null,
    play_audio:null
  },
  mutations: {},
  actions: {},
  modules: {}
})