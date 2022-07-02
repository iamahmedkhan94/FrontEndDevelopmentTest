import TYPES from "./actionTypes"

const addTask = (payload={}) => {
    return {
        type: TYPES.ADD_TASK,
        payload:  {...payload}
    }
}

const updateTask = (payload = {}) => {
    return {
        type: TYPES.UPDATE_TASK,
        payload: { ...payload }
    }
}

const editTask = (payload = {}) => {
    return {
        type: TYPES.EDIT_TASK,
        payload: { ...payload }
    }
}

const deleteTask = (payload = {}) => {
    return {
        type: TYPES.DELETE_TASK,
        payload: { ...payload }
    }
}

const doneTask = (payload = {}) => {
    return {
        type: TYPES.DONE_TASK,
        payload: { ...payload }
    }
}


const getTasks = (payload = {}) => {
    return {
        type: TYPES.GET_TASKS,
        payload: { ...payload }
    }
}



export{
    addTask,
    updateTask,
    deleteTask,
    doneTask,
    getTasks,
    editTask
}