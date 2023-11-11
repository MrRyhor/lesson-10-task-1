<template>
    <div class="workers-list-container">
        <worker-item v-for="worker in getSelectedWorkerTasksList" :key="worker.workerId" :worker-data="worker" />
    </div>
</template>
<script>
import WorkerItem from './WorkerItem.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'WorkersShowList',
    components: {
        WorkerItem,
    },

    computed: {
        ...mapGetters(['getSelectedWorkerTasksList']),
    },
}
</script>
<style lang="scss" scoped>
    .workers-list-container{
        display: flex;
    }
</style>
