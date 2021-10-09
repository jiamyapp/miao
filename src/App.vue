<template>
    <!-- 每次组件渲染都会重新加载组件，这样有点浪费性能，加上keep-alive会有缓存组件的功能 -->
    <keep-alive>
        <router-view />
    </keep-alive>
</template>