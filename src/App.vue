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

</style>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>