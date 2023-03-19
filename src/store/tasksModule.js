

export const tasksModule = {
    state: () => ({
        tasks: [
            { id: 1, text: 'lol', stage: 'BACKLOG' },
            { id: 2, text: 'lol2', stage: 'BACKLOG' }
        ],
        filterText: ''
    }),
    getters: {
        filteredTasks(state) {
            return [...state.tasks].filter(task => task.text.includes(state.filterText));
        },
    },
    mutations: {
        addTask(state, task) {
            task.id = 1;
            state.tasks.push(task)
        },
        editTask(state, editedTask) {
            state.tasks = state.tasks.map(task => task.id === editedTask.id ? editedTask : task)
        },
        deleteTask(state, taskId) {
            state.tasks = state.tasks.filter(task => task.id !== taskId)
        },
    },
    actions: {

    },
    namespaced: true
}
