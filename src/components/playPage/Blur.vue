<template>
  <div class="blur"></div>
</template>

<style scoped>
.blur {
    height: 100%;
    width: 100%;
  position: absolute;
  background-image: url("https://y.gtimg.cn/music/photo_new/T002R300x300M000003nkrW42K3FLd.jpg?max_age=2592000");
  background-position: 50%, 50%;
  background-size: 100%, 100%;
  background-repeat: no-repeat;
  z-index: -1;
  filter: blur(10px);
}
</style>