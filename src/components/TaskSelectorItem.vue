<template>
    <div class="item-container">
        <div>{{ taskData.title }}</div>
        <select v-model="selectedWorker" @change="onSelectChange(selectedWorker, taskData.id)">
            <option v-for="worker in workersData" :value="worker.id" :key="worker.id">{{ worker.name }}</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'TaskSelectorItem',

    props: {
        taskData: {
            type: Object,
            default: () => ({}),
        },
        workersData: {
            type: Array,
            default: () => [],
        },
    },

    data() {
        return {
            selectedWorkerVal: null,
        }
    },

    computed: {
        selectedWorker: {
            get() {
                return this.selectedWorkerVal
            },
            set(val) {
                this.selectedWorkerVal = val
            },
        },
    },

    methods: {
        onSelectChange(workerId, taskId) {
            return this.$emit('selected', { workerId, taskId })
        },
    },
}
</script>
<style lang="scss" scoped>
    .item-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 5px;
    }
</style>
