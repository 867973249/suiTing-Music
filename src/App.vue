<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  color: rgba(225, 225, 225, 0.8);
}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
body, html,#app{
    height: 100%;
    width: 100%;
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color:transparent
    //  rgba($color:transparent, $alpha: 0.1);
}

/* 滚动槽 */
::-webkit-scrollbar-track {
    border-radius: 10px;
    opacity: 1;
    background-color: transparent;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border-radius: 5px;
    width: 8px;
    background: rgba($color: #fff, $alpha: 0.2);
}

</style>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>