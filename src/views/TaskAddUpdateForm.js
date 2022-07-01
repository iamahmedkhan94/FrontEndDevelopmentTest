import React, { useState } from 'react'
import { Input, Radio, Button, Card } from 'antd';
import '../styles/css/_taskAddUpdateForm.css'

const { TextArea } = Input;

const TaskAddUpdateForm = (props) => {

    const { setTaskAddForm, setTaskList, data, updateTask, taskUpdateForm } = props

    const [state, setState] = useState({
        task: {
            title: data.title ?? '',
            description: data.description ?? '',
            reward: data.reward ?? '',
            priority: data.priority ?? 'Low',
            doneTask: false
        }
    })

    const plainOptions = ['Low', 'Medium', 'High'];

    const onChangeInputHandler = (e) => {
        let value = e.target.value
        let id = e.target.id
        setState((prevState) => ({
            ...prevState,
            task: {
                ...prevState.task,
                [id]: value
            }
        }))
    }

    const onChangeRadioHandler = (e) => {
        let value = e.target.value
        setState((prevState) => ({
            ...prevState,
            task: {
                ...prevState.task,
                priority: value
            }
        }))
    };

    const editTask = () => {
        if (state.task.title !== '' && state.task.description !== '') {
            updateTask(state.task)
        }
    }

    const addTask = () => {
        if (state.task.title !== '' && state.task.description !== '') {
            setTaskAddForm(false);
            setTaskList(state.task)
            setState((prevState) => ({
                ...prevState,
                task: {
                    title: data.title ?? '',
                    description: data.description ?? '',
                    reward: data.reward ?? '',
                    priority: data.priority ?? 'Low',
                    doneTask: false
                }
            }))
        }

    }

    return (
        <Card className='taskAddUpdateForm'>
            <div className="one" >
                {state.task.title ? '' : <span className='required ' >* required</span>}
                <Input
                    id="title"
                    className={state.task.title ? '' : 'required'}
                    value={state.task.title}
                    onChange={onChangeInputHandler}
                    placeholder="Task Title"
                />
            </div>
            <div className="one">
                {state.task.description ? '' : <span className='required '>* required</span>}
                <TextArea
                    id="description"
                    value={state.task.description}
                    rows={4}
                    onChange={onChangeInputHandler}
                    placeholder="Task Description"
                    className={state.task.description ? '' : 'required'}
                />
            </div>

            <Input
                id="reward"
                value={state.task.reward}
                onChange={onChangeInputHandler}
                placeholder="Gifts and KPI for this task ;)"
            />
                <Radio.Group options={plainOptions} onChange={onChangeRadioHandler} value={state.task.priority} />
            {taskUpdateForm ?
                <Button type='primary' className='d-flex btn-danger' danger onClick={() => editTask()}>Update to Tasks</Button> :
                <Button type='primary' className='d-flex btn-danger' danger onClick={addTask}>Add to Tasks</Button>}

        </Card>
    )
}

export default TaskAddUpdateForm