import { createStore } from 'vuex'
import { workersList, tasksList } from '@/data/6_tasks_devider'

export default createStore({
    state: {
        workersData: [],
        tasksData: [],
        selectedWorkerTasksList: [],
    },
    getters: {
        getWorkersData: ({ workersData }) => workersData,
        getTasksData: ({ tasksData }) => tasksData,
        getSelectedWorkerTasksList: ({ selectedWorkerTasksList }) => selectedWorkerTasksList,
        getWorkerById:
            ({ workersData }) =>
            (workerId) => {
                const findWorker = workersData.find((worker) => worker.id === workerId)
                return findWorker.name
            },
        getTasksByWorkerId:
            ({ tasksData }) =>
            (taskId) => {
                return tasksData.filter((task) => taskId.includes(task.id))
            },
    },
    mutations: {
        setWorkersData(state, list) {
            state.workersData = list
        },
        setTasksData(state, list) {
            state.tasksData = list
        },
        setSelectedWorkerTasksList(state, { workerId, taskId }) {
            const findWorker = state.selectedWorkerTasksList.find((worker) => worker.workerId === workerId)
            if (findWorker) findWorker.tasksId.push(taskId)
            else
                state.selectedWorkerTasksList.push({
                    workerId,
                    tasksId: [taskId],
                })
        },
        deleteTaskFromSelectedWorkerTasksList(state, { taskId, workerId }) {
            const findWorker = state.selectedWorkerTasksList.find((worker) => worker.workerId === workerId)
            if (findWorker) findWorker.tasksId = findWorker.tasksId.filter((task) => task !== taskId)
            if (!findWorker.tasksId.length)
                state.selectedWorkerTasksList = state.selectedWorkerTasksList.filter(
                    (worker) => worker.workerId !== workerId
                )
        },  
    },
    actions: {
        setWorkersData({ commit }) {
            commit('setWorkersData', workersList)
        },
        setTasksData({ commit }) {
            commit('setTasksData', tasksList)
        },

        setSelectedWorkerTasksList({ commit }, { workerId, taskId }) {
            commit('setSelectedWorkerTasksList', { workerId, taskId })
        },
        deleteTaskFromSelectedWorkerTasksList({ commit }, taskId) {
            commit('deleteTaskFromSelectedWorkerTasksList', taskId)
        },
    },
    modules: {},
})
