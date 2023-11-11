<template>
    <tasks-divider-manager />
</template>

<script>
import TasksDividerManager from './components/TasksDividerManager.vue'
export default {
    name: 'App',
    components: {
        TasksDividerManager,
    },
    
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
