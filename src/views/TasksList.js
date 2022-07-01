import React, { useState } from 'react'
import { Button, Card } from 'antd';
import '../styles/css/_taskList.css'
import DoneTasks from './DoneTasks';
import ViewTaskDetails from './ViewTaskDetails';
import { PlusCircleFilled } from '@ant-design/icons';

const TasksList = (props) => {

    let { taskList, editTask, doneTasks, setTaskAddForm } = props

    let priorityColors = {
        'High': 'high-priority-circle',
        'Medium': 'medium-priority-circle',
        'Low': 'low-priority-circle'
    }

    const [state, setState] = useState({
        viewDoneTask: false,
        viewTaskDetails: false,
        task: {},
        taskIndex: null
    })

    const setViewTaskDetails = (e, bool, item, i) => {
        e.stopPropagation();
        setState((prevState) => ({
            ...prevState,
            viewTaskDetails: bool,
            task: item,
            taskIndex: i
        }))
    }

    const setViewDoneTask = (e, bool) => {
        e.stopPropagation();
        if (taskList.filter(item => item.doneTask).length > 0) {
            setState((prevState) => ({
                ...prevState,
                viewDoneTask: bool
            }))
        }
    }

    return (
        state.viewDoneTask ?
            <DoneTasks taskList={taskList} /> :
            state.viewTaskDetails ?
                <ViewTaskDetails
                    task={state.task}
                    taskIndex={state.taskIndex}
                    doneTasks={doneTasks}
                    editTask={editTask}
                /> :
                <div className="task-list">
                    <Button type='primary' className='view-task-button' onClick={(e) => setViewDoneTask(e, true)}>View Done task</Button>
                    {taskList.filter(item1 => !item1.doneTask).map((item, i) => {
                        return <Card key={i} className='task' onClick={(e) => setViewTaskDetails(e, true, item, i)}>
                            <div className='list'>
                                <div>
                                    <h3>{item.title}</h3>
                                    <div className='description'>{item.description}</div>
                                </div>
                                <div>
                                    <div className='priority'>
                                        <div className='priority-label'>{item.priority}</div>
                                        <span className={priorityColors[item.priority]}></span>
                                    </div>
                                    <Button type='primary' danger size="small" onClick={(e) => doneTasks(e, i)}>Done Task</Button>
                                    <Button type='primary' danger size="small" onClick={(e) => editTask(e, item, i)}>Edit Task</Button>
                                </div>
                            </div>
                        </Card>
                    })}
                    <div style={{ float: 'right' }}>
                        <PlusCircleFilled onClick={() => setTaskAddForm(true)} />
                    </div>
                </div>
    )
}

export default TasksList