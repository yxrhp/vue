<template>
  <div id="app" class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- 路由 router-view -->
    <!-- 底部tabbar -->
    <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item mui-active" href="#tabbar">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-chat">
            <span class="mui-icon mui-icon-email">
                <span class="mui-badge">0</span>
            </span>
            <span class="mui-tab-label">会员</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-contact">
            <span class= "mui-icon mui-icon-contact"></span>
            <span class= "mui-tab-label">购物车</span>
        </a>
        <a class="mui-tab-item" href="#tabbar-with-map">
            <span class= "mui-icon mui-icon-gear"></span>
            <span class= "mui-tab-label">搜索</span>
        </a>
    </nav>
    <h1>121212</h1>
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
    }
    
</style>

