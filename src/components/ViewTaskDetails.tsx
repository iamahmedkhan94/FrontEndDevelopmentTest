import React from 'react'
import '../styles/css/_viewTaskDetails.css'
import { Button, Card } from 'antd';

const ViewTaskDetails = (props : any) => {
    let { task, doneTasks, editTask, taskIndex } = props
    let priorityColors : any = {
        'High': 'high-priority-circle',
        'Medium': 'medium-priority-circle',
        'Low': 'low-priority-circle'
    }
    return (
        <div className='viewTaskDetails-Main'>
        <Card className="viewTaskDetails">
            <h2 >{task.title}</h2>
            <div className='priority'>
                <span className={priorityColors[task.priority]}></span>
                <div className='priority-label'>{task.priority}</div>
            </div>
            <div className='description'>{task.description}</div>
            <div className='buttonAction'>
            <Button className='btn-edit' type='primary' danger size='small' disabled={task.doneTask} onClick={(e) => doneTasks(e, taskIndex)}>Done Task</Button>
                    <Button className='btn-done' type='primary' danger size='small' disabled={task.doneTask} onClick={(e) => editTask(e, task, taskIndex)}>Edit Task</Button>
                    <Button className='btn-delete' type='primary' danger size='small' disabled={task.doneTask}>Delete Task</Button>
            </div>
        </Card>
        </div>

    )
}

export default ViewTaskDetails