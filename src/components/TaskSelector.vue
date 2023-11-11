<template>
    <h3>Tasks</h3>
    <task-selector-item v-for="task in getTasksData" :task-data="task" :key="task.id" :workers-data="getWorkersData" @selected = "setSelectedWorkerTasksList($event)" />
</template>
<script>
import TaskSelectorItem from './TaskSelectorItem.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'TaskSelector',

    components: {
        TaskSelectorItem,
    },

    computed: {
        ...mapGetters(['getTasksData', 'getWorkersData']),
    },

   methods: {
    ...mapActions(['setSelectedWorkerTasksList'])
   },
}
</script>
<style lang="scss" scoped></style>
