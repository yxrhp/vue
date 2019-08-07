<template>
  <div id="app" class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- 路由 router-view -->
    <transition>
        <router-view></router-view>
    </transition>
    
    <!-- 底部tabbar -->
    <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/Home">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/Mem">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/Search">
            <span class= "mui-icon mui-icon-extra mui-icon-extra-cart">
              <span class="mui-badge">0</span>
            </span>
            <span class= "mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/Shop">
            <span class= "mui-icon mui-icon-search"></span>
            <span class= "mui-tab-label">搜索</span>
        </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
    
    .app-container{
      padding-top: 40px;
      overflow-x: hidden;
    }
    .v-enter{
      opacity: 0;
      transform: translateX(100%);
    }
    .v-leave-to{
      opacity: 0;
      transform: translateX(-100%);
      position: absolute;
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
    }
</style>

