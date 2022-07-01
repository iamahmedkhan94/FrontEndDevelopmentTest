import React from 'react'
import '../styles/css/_viewTaskDetails.css'
import { Button, Card } from 'antd';

const ViewTaskDetails = (props) => {
    let { task, doneTasks, editTask, taskIndex } = props
    let priorityColors = {
        'High': 'high-priority-circle',
        'Medium': 'medium-priority-circle',
        'Low': 'low-priority-circle'
    }
    return (
        <Card className="viewTaskDetails">
            <h2 >{task.title}</h2>
            <div className='priority'>
                <span className={priorityColors[task.priority]}></span>
                <div className='priority-label'>{task.priority}</div>
            </div>
            <div className='description'>{task.description}</div>
            <div className='buttonAction'>
                <Button type='primary' danger size='small' disabled={task.doneTask} onClick={(e) => doneTasks(e, taskIndex)}>Done Task</Button>
                <Button type='primary' danger size='small' disabled={task.doneTask} onClick={(e) => editTask(e, task, taskIndex)}>Edit Task</Button>
                <Button type='primary' danger size='small' disabled={task.doneTask}>Delete Task</Button>
            </div>
        </Card>
    )
}

export default ViewTaskDetails