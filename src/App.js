import { useState } from 'react';
import './App.css';
import { Button } from 'antd';
import TaskAddUpdateForm from './views/TaskAddUpdateForm';
import TasksList from './views/TasksList';

function App() {

  const [state, setState] = useState({
    taskAddForm: false,
    taskUpdateForm: false,
    taskList: [],
    editTask: {},
    editTaskIndex: null,
    viewDoneTask: false
  })

  const setTaskAddForm = (bool = true) => {
    setState((prevState) => ({
      ...prevState,
      taskAddForm: bool
    }))
  }

  const setTaskList = (list) => {
    setState((prevState) => ({
      ...prevState,
      taskList: [
        ...prevState.taskList,
        list
      ]
    }))
  }

  const editTask = (e, task, i) => {
    e.stopPropagation();
    setState((prevState) => ({
      ...prevState,
      taskUpdateForm: true,
      editTask: task,
      editTaskIndex: i,
    }))
  }

  const updateTask = (list) => {
    let newTaskList = state.taskList
    newTaskList[state.editTaskIndex] = list
    setState((prevState) => ({
      ...prevState,
      taskUpdateForm: false,
      taskList: newTaskList
    }))
  }

  const doneTasks = (e, i) => {
    e.stopPropagation();
    console.log('Task', i);
    let newTaskList = state.taskList
    newTaskList[i].doneTask = true
    setState((prevState) => ({
      ...prevState,
      taskUpdateForm: false,
      taskList: newTaskList
    }))
  }

  return (
    <div className="App">
      {
        state.taskAddForm || state.taskUpdateForm ?
          <TaskAddUpdateForm
            taskAddForm={state.taskAddForm}
            setTaskAddForm={setTaskAddForm}
            setTaskList={setTaskList}
            data={state.editTask}
            taskUpdateForm={state.taskUpdateForm}
            updateTask={updateTask}
          /> :
          state.taskList.length > 0 ?
            <TasksList
              taskList={state.taskList}
              editTask={editTask}
              doneTasks={doneTasks}
              setTaskAddForm={setTaskAddForm}
            /> :
            <Button
              type="primary"
              danger
              onClick={setTaskAddForm}
            >
              Create your First Task ;{')'}
            </Button>
      }
    </div >
  );
}

export default App;
