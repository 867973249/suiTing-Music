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
}
body, html,#app{
    height: 100%;
    width: 100%;
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: #fff;
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
    background: rgb(128, 3, 3);
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