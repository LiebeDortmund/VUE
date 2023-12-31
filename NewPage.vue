<template>
    <div>
     <div class="image-container" style="margin-bottom: 10px;">
       <img alt="Vue logo" src="../assets/top.png" class="full-width-image">
       <div class="text-overlay">液位控制PLC设计</div>
     </div>

      <img alt="logo" src="../assets/pic2.png" class="image-siz">
      <div class="text-over">程序段1:通过常开、常闭触点实现显示屏中启动系统、停止系统按键效果。<br><br>
                             
        程序段2:实现在满足输出条件下,进油泵打开指令,液位显示以10进行累加。当液位≥20并满足设置时间条件下,实现出油阀门打开操作。<br><br>
        
        程序段3:实现在出油阀门打开条件下,按设置的时间,将液位显示器中的液位以5进行递减。<br><br>
        
        程序段4:通过置位、复位按键,将罐内液位控制在20-80之间</div>

        <img alt="logo" src="../assets/pic3.png" class="image-si" >
        <div class="text">程序段5:实现电机在显示屏中转动、进油流动显示功能<br><br>
                               程序段6:实现显示屏中出油油流流动显示功能</div>


      <button @click="goBack">Back</button>
      <!-- 在这里添加新页面的内容 -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewPage',
    methods: {
      goBack() {
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  /* 在这里添加样式 */
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

.image-siz {
  height: 400px;
  width: 600px; /* 设置图片宽度 */
}
.image-si {
  height: 400px;
  width: 600px; /* 设置图片宽度 */
}
.text-over {
  font-size: 15px; /* 设置文字字体大小 */
  text-indent: 20px; 
}
.text {
  font-size: 15px; /* 设置文字字体大小 */
  text-indent: 20px; 
}
button {
  margin-top: 20px;
}
  </style>