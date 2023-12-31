<template>
  <div class="home">
    <div class="image-container" style="margin-bottom: 10px;">
      <img alt="Vue logo" src="../assets/top.png" class="full-width-image">
      <div class="text-overlay">油气储运智能化与自动化</div>
    </div>

    
    <div class="text-size" style="margin-bottom: 20px;">Welcome to Study!</div>
    <img alt="logo" src="../assets/pic1.png" class="image image-size">
    <div class="text" style="margin-bottom: 20px;">
      <router-link to="/newpage">油罐液位控制系统</router-link>
    </div>

  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  width: 100%;
}

.full-width-image {
  width: 100%;
  height: 150px;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 30px;
  text-align: center;
}

.image-size {
  height: 400px;
  width: 600px; /* 设置图片宽度 */
}

.text-size {
  font-size: 25px; /* 设置文字字体大小 */
}

.text {
  font-size: 25px; /* 设置文字字体大小 */
}
</style>