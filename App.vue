<template>  
  <div id="app">  
    <router-view/>  
    <div class="nav-container">  
      <nav>  
        <router-link to="/">Home</router-link>  |  
        <router-link to="/data">Data</router-link>   |
        <router-link to="/about">Members</router-link>  
        
      </nav>  
    </div>  
  </div>  
</template>  
  
<style lang="scss">  
#app {  
  font-family: Avenir, Helvetica, Arial, sans-serif;  
  -webkit-font-smoothing: antialiased;  
  -moz-osx-font-smoothing: grayscale;  
  text-align: center;  
  color: #2c3e50;  
}  
  
.nav-container {  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  position: relative; /* 将 position 属性设置为 relative */  
}  
  
nav {  
  padding: 30px;  
  
  a {  
    font-weight: bold;  
    color: #2c3e50;  
  
    &.router-link-exact-active {  
      color: #2557c4;  
    }  
  }  
}  
</style>