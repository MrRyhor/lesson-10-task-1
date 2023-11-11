<template>
    <div class="worker-tasks-item-container">
        <div>{{ task.title }}</div>
        <button @click = "onXClick(task.id)">X</button>
    </div>
</template>
<script>

export default {
    name: 'WorkerTasksItem',

    props: {
        task: {
            type: Object,
            default: () => ({}),
        },
    },
methods: {
    onXClick(id){
        return this.$emit('delete', id)
    }
},
   
}
</script>
<style lang="scss" scoped>
.worker-tasks-item-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    gap: 10px;

    button {
        cursor: pointer;
    }
    button:hover {
        background-color: rgb(73, 73, 73);
        color: white;
    }
}
</style>
