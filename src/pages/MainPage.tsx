import { useState } from 'react';
import '../App.css';
import { Button } from 'antd';
import TaskAddUpdateForm from '../components/TaskAddUpdateForm';
import TasksList from '../components/TasksList';
import { addTask, doneTask, editTask, getTasks, updateTask } from '../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';

export default () => {
  const todos = useSelector((state: any) => state)

  const { taskAddForm, taskList, taskUpdateForm, editTaskObj, editTaskIndex, viewDoneTask } = todos
  const dispatch = useDispatch()

  const setTaskAddForm = (bool = true) => {
    dispatch(addTask({ taskAddForm: bool }));
  }

  const setTaskList = (list: any) => {
    dispatch(getTasks({ taskList: [list] }));

  }

  const _editTask = (e: any, task: any, i: any) => {
    e.stopPropagation();
    dispatch(editTask({ taskUpdateForm: true, editTaskObj: task, editTaskIndex: i }))
  }

  const _updateTask = (list: any) => {
    dispatch(updateTask({ taskUpdateForm: false, taskList: [list], editTaskIndex: editTaskIndex }))
  }

  const doneTasks = (e: any, i: any) => {
    e.stopPropagation();
    dispatch(doneTask({ taskUpdateForm: false, taskList, editTaskIndex: i }))

  }

  return (
    <div className="App">
      <div className='header'>
        Hello World
      </div>
      {
        taskAddForm || taskUpdateForm ?
          <TaskAddUpdateForm
            taskAddForm={taskAddForm}
            setTaskAddForm={setTaskAddForm}
            setTaskList={setTaskList}
            data={editTaskObj}
            taskUpdateForm={taskUpdateForm}
            updateTask={_updateTask}
          /> :
          taskList.length > 0 ?
            <TasksList
              taskList={taskList}
              editTask={_editTask}
              doneTasks={doneTasks}
              setTaskAddForm={setTaskAddForm}
            /> :
            <Button
              type="primary"
              danger
              onClick={() => setTaskAddForm()}
            // className='main-btn'
            >
              Create your First Task ;{')'}
            </Button>
      }
    </div >
  );
}


