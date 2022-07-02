import React, { useState, useEffect } from 'react'
import { Input, Radio, Button, Card } from 'antd';
import '../styles/css/_taskAddUpdateForm.css'
import { uuidGenerator } from '../helper/helperfunctions';
// import { setTimeout } from 'timers/promises';

const { TextArea } = Input;

const TaskAddUpdateForm = (props: any) => {

    const { setTaskAddForm, setTaskList, data, updateTask, taskUpdateForm } = props

    const [state, setState] = useState({
        task: {
            title: data.title ?? '',
            description: data.description ?? '',
            reward: data.reward ?? '',
            priority: data.priority ?? 'Low',
            doneTask: false,
            id: uuidGenerator()
        }
    })

    const plainOptions = ['Low', 'Medium', 'High'];

    const onChangeInputHandler = (e: any) => {
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

    const onChangeRadioHandler = (e: any) => {
        let value = e.target.value
        setState((prevState) => ({
            ...prevState,
            task: {
                ...prevState.task,
                priority: value
            }
        }));
        (document.getElementById(`${state.task.priority}`) as HTMLElement).classList.add(`${value}`);
        (document.getElementById(`${state.task.priority}`) as HTMLElement).classList.remove(`${state.task.priority}`)
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
                    doneTask: false,
                    id : data.id ?? null
                }
            }));
        }

    }

    // useEffect(() => {
    //     var element =   document.getElementById(`${state?.task?.priority}`)
    //    console.log(element.find('input') )
    // }, [state])

    return (
        <Card className='taskAddUpdateForm'>
            <div className="one" >
                {state.task.title ? '' : <span className='required' >* required</span>}
                <Input
                    id="title"
                    className={state.task.title ? '' : 'required'}
                    value={state.task.title}
                    onChange={onChangeInputHandler}
                    placeholder="Task Title"
                />
            </div>
            <div className="one">
                {state.task.description ? '' : <span className='required'>* required</span>}
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
            <Radio.Group id={state.task.priority} options={plainOptions} onChange={onChangeRadioHandler} value={state.task.priority} />
            <div className="main-btn" >
                {taskUpdateForm ?
                    <Button type='primary' className='d-flex btn-danger' danger onClick={() => editTask()}>Update to Tasks</Button> :
                    <Button type='primary' className='d-flex btn-danger' danger onClick={addTask}>Add to Tasks</Button>}
            </div>

        </Card>
    )
}

export default TaskAddUpdateForm