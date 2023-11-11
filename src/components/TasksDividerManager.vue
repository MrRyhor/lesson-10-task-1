<template>
    <div class="manager-container">
        <h1>Tasks divider</h1>
        <task-selector />
        <workers-show-list />
    </div>
</template>
<script>
import TaskSelector from './TaskSelector.vue'
import WorkersShowList from './WorkersShowList.vue'
import { mapActions } from 'vuex'
export default {
    name: 'TasksDividerManager',

    components: {
        TaskSelector,
        WorkersShowList
    },

    created() {
        this.setWorkersData(), this.setTasksData()
    },

    methods: {
        ...mapActions(['setWorkersData', 'setTasksData']),
    },
}
</script>
<style lang="scss" scoped>
    .manager-container{
        max-width: 1000px;
        margin: 0 auto;
    }
</style>
