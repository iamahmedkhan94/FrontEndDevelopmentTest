import actionTypes from '../action/actionTypes';

let INIT_STATE = {
  taskAddForm: false,
  taskUpdateForm: false,
  taskList: [],
  editTaskObj: {},
  editTaskIndex: null,
  viewDoneTask: false
};
const todos = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return { ...state, ...action.payload }
    case actionTypes.EDIT_TASK:
      return { ...state, ...action.payload }
    case actionTypes.UPDATE_TASK:
      let modifiedArr: any = state.taskList
      modifiedArr[action.payload.editTaskIndex] = action.payload.taskList[action.payload.editTaskIndex]
      return { ...state, ...action.payload, taskList: modifiedArr}
    case actionTypes.DONE_TASK:
      let tempArr: any = state.taskList
      tempArr[action.payload.editTaskIndex].doneTask = true
      return { ...state, ...action.payload, taskList: [...tempArr]}
    case actionTypes.DELETE_TASK:
      return { ...state, ...action.payload }
    case actionTypes.GET_TASKS:
      return { ...state, ...action.payload, taskList: [...state.taskList, ...action.payload.taskList] }
    default:
      return state
  }
}
export {
  todos
}
