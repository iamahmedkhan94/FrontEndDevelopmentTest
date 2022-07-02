import React from 'react'
import { Card } from 'antd';
import '../styles/css/_doneTask.css'

const DoneTasks = (props : any) => {
    let { taskList } = props
    let priorityColors : any = {
        'High': 'high-priority-circle',
        'Medium': 'medium-priority-circle',
        'Low': 'low-priority-circle'
    }
    return (
        <Card className='done-task'>
            {taskList.filter((item1 : any )=> item1.doneTask).map((item : any, i : any) => {
                return <Card key={i} className='task'>
                    <div className='done-list'>
                        <div>
                            <h3>{item.title}</h3>
                            <div className='description'>{item.description}</div>
                        </div>
                        <div className='priority'>
                            <div className='priority-label'>{item.priority}</div>
                            <span className={priorityColors[item.priority]}></span>
                        </div>
                    </div>
                </Card>
            })}
        </Card>
    )
}

export default DoneTasks