import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ButtonAction from '../Utilites/ButtonAction'
import Inputs from '../Utilites/Inputs'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAPI, setOpenTaskModal, setTaskAddData } from '../../Store/Slice/TaskSlice';

function AddTask(props) {


    const [taskInput, setTaskInput] = useState({
        task: '',
        status: 'pending'
    });

    const [taskData, setTaskData] = useState();
    const [taskEvent, setTaskEvent] = useState('');
    const OpenTaskModal=useSelector((state)=>state.task.OpenTaskModal)
    const dispatch=useDispatch()


    const datahandler = () => {
        setTaskData(taskInput);
    }

    const handlerCancel = () => {
        // alert('Wowo');
        props.setAddTasksToggle(!props.addTasksToggle)
        console.log(taskInput);
        dispatch(setOpenTaskModal(false))

    }

    useEffect(() => {
        datahandler()
    }, [])

    const PostToServer = (e) => {
       dispatch(addTaskAPI())

    }

    const Toastify = (data) => {
        if (data === 'success') {
            toast.success('Data Has Been Submited!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else if (data === 'task') {
            toast.error('Please Enter The Task!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }



    const handlerInput = (e) => {
  dispatch(setTaskAddData(e.target.value))
    }





    return (
        <>
            <div className='modal box-shadow p-5'>
                <div className='header'>
                    <h2>Add Task</h2>
                </div>
                <div className='my-3 body'>
                    <Inputs name="task" value='task' type="text" handlerInput={(e) => { handlerInput(e); setTaskEvent(e.target.value) }} placeholder="Add Task" className="p-1 b-radius-1" />

                </div>
                <div className='row justify-content-end footer'>
                    <ButtonAction value='Cancel' handlerSubmit={() => handlerCancel()} className='btn cursor redHover bg-red color-white' />
                    <ButtonAction value='Submit' handlerSubmit={(e) => { PostToServer(e) }} className='btn greenHover cursor bg-green ml-2 color-white' />
                </div>

            </div>
        </>
    )
}

export default AddTask