<template>
    <div class="data">
      <div class="image-container" style="margin-bottom: 10px;">
        <img alt="Vue logo" src="../assets/top.png" class="full-width-image">
        <div class="text-overlay">储罐数据监测与分析</div>
      </div>
  
      <h1>Data Analysis</h1>
  
      <nav class="navbar">
        <ul class="nav-list">
          <li :class="{ active: selectedParameter === 'temperature' }" @click="selectedParameter = 'temperature'">温度</li>
          <li :class="{ active: selectedParameter === 'humidity' }" @click="selectedParameter = 'humidity'">湿度</li>
          <li :class="{ active: selectedParameter === 'pressure' }" @click="selectedParameter = 'pressure'">压力</li>
          <li :class="{ active: selectedParameter === 'level' }" @click="selectedParameter = 'level'">液位</li>
        </ul>
      </nav>
  
      <div class="content">
        <h2>{{ selectedParameter }} 数据表格</h2>
        <table v-if="dataLoaded">
          <thead>
            <tr>
              <th style="text-align:center;">时间</th>
              <th>{{ selectedParameter }}</th>
              <th>安全状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, index) in parameterData" :key="index">
              <td style="text-align:center;">{{ data.time }}</td>
              <td>{{ data.value }} {{ data.unit }}</td>
              <td :class="{ unsafe: !isSafe(data.value) }">{{ isSafe(data.value) ? 'safe' : 'unsafe' }}</td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          数据加载中...
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedParameter: '',
        parameterData: [],
        dataLoaded: false,
        parameterLimits: {
          temperature: { min: -10, max: 40 },
          humidity: { min: 30, max: 70 },
          pressure: { min: 80, max: 120 },
          level: { min: 0, max: 10 }
        }
      };
    },
    mounted() {
      // 在这里根据selectedParameter加载对应的数据
      this.loadData();
    },
    watch: {
      selectedParameter() {
        this.loadData();
      }
    },
    methods: {
      loadData() {
        this.dataLoaded = false;
        // 模拟从服务器获取数据
        setTimeout(() => {
          this.parameterData = this.generateRandomData();
          this.dataLoaded = true;
        }, 1000);
      },
      generateRandomData() {
        const data = [];
        for (let i = 0; i < 10; i++) {
          const time = new Date().toLocaleString();
          const value = Math.random() * 100;
          let unit = '';
          if (this.selectedParameter === 'temperature') {
            unit = '°C';
          } else if (this.selectedParameter === 'humidity') {
            unit = '%RH';
          } else if (this.selectedParameter === 'pressure') {
            unit = 'KPa';
          } else if (this.selectedParameter === 'level') {
            unit = 'm';
          }
  
          data.push({
            time,
            value: value.toFixed(2),
            unit
          });
        }
        return data;
      },
      isSafe(value) {
        const limits = this.parameterLimits[this.selectedParameter];
        if (limits) {
          return value >= limits.min && value <= limits.max;
        } else {
          return false;
        }
      }
    }
  };
  </script>
    
    <style scoped>
    .image-container {
    position: relative;
    width: 100%;
    }
    
    .full-width-image {
    width: 100%;
    height: 100px;
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
    
    .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    }
    
    .nav-list {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 500px;
    border-radius: 10px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
    background-color: #f2f2f2;
    }
    
    .nav-list li {
    flex-grow: 1;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    }
    
    .nav-list li:hover {
    background-color: #d9d9d9;
    }
    
    .nav-list li.active {
    background-color: #4CAF50;
    color: white;
    }
    
    .content {
    padding: 20px;
    margin-top: -10px;
    }
    
    table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
    }
    
    table th,
    table td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    }
    
    table th {
    font-weight: bold;
    }
    
    .unsafe {
    color: red;
    }
    </style>