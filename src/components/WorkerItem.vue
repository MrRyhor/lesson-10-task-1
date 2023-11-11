<template>
    <div class="worker-item-container">
        <div>{{ getWorkerById(workerData.workerId) }}</div>
        <worker-tasks-item v-for="task in tasksList" :key="task.id" :task="task" @delete = "deleteTask($event, workerData.workerId)"/>
    </div>
</template>
<script>
import WorkerTasksItem from './WorkerTasksItem.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'WorkerItem',

    components: {
        WorkerTasksItem,
    },

    props: {
        workerData: {
            type: Object,
            default: () => ({}),
        },
    },

    computed: {
        ...mapGetters(['getWorkerById', 'getTasksByWorkerId']),
        tasksList() {
            return this.getTasksByWorkerId(this.workerData.tasksId)
        },
    },

    methods: {
        ...mapActions(['deleteTaskFromSelectedWorkerTasksList']),

        deleteTask(taskId, workerId){
            return this.deleteTaskFromSelectedWorkerTasksList({taskId, workerId})
        }
    },
}
</script>
<style lang="scss" scoped>
    .worker-item-container{
        margin: 10px;
        border: 2px solid black;
        padding: 5px;
    }
</style>
