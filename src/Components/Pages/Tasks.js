import React, { useEffect, useState } from 'react'
import ButtonAction from '../Utilites/ButtonAction'
import Inputs from '../Utilites/Inputs'
import EditIcon from '../../assets/icon/settings/edit.svg'
import DeleteIcon from '../../assets/icon/settings/delete.svg'
import CrossIcon from '../../assets/icon/settings/cross.svg'
import RightTick from '../../assets/icon/settings/righttick.svg'
import AddTask from '../ModalComp/AddTask'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { deleteTask, getTask, ToastifyRedux, upDateTask } from '../../Services/Services'
import { useDispatch, useSelector } from 'react-redux'
import {  deleteTaskData, fetchTaskAPI, setDeleteToggle, setEditToggle, setOpenTaskModal, setTaskEditData, taskEditSubmit } from '../../Store/Slice/TaskSlice'
import { setTaskHeading } from '../../Store/Slice/HeaderHeadingSlice'

function Tasks() {


  const [taskDataFromServer, setTaskDataFromServer] = useState();
  const [prveTask, setPrevTask] = useState();
  const [IndexValue, setIndexValue] = useState();
  const [submitToggle, setSubmitToggle] = useState(false)
  const [taskUpdating, setTaskUpdating] = useState({
    task: '',
    status: ''
  })
  const [taskUpdated, setTaskUpdated] = useState()
  const dispatch = useDispatch();
  const tableDataFetch = useSelector((state) => state?.task?.task)
  const OpenTaskModal = useSelector((state) => state.task.openTaskModal)
  const editToggle = useSelector((state) => state.task.editToggle)
  const deleteTog = useSelector((state) => state.task.deleteToggle)



  useEffect(()=>{
      dispatch(setTaskHeading('Tasks'))
  },[])


 

  useEffect(() => {
    // DataFromServer();
    dispatch(fetchTaskAPI())
    


  }, [editToggle, deleteTog,OpenTaskModal])

  const DataFromServer = () => {
    // getTask()
    //   .then((res) => { setTaskDataFromServer(res.data); })
    //   .catch((err) => { console.log(err); })

  }


  const handlerEditSubmit = (items, index) => {
    
    dispatch(setEditToggle(false))
    dispatch(taskEditSubmit())
    // dispatch(editTasks())

    // let id = items.id;
    // upDateTask(id, {
    //   task: taskUpdating.task ? taskUpdating.task : prveTask.task,
    //   status: 'pending'
    // })
    // axios.put('http://localhost:5000/Tasks/' + id, {
    //   task: taskUpdating.task ? taskUpdating.task : prveTask.task,
    //   status: 'pending'

    // })
    //   .then((res) => { console.log(res); setEditToggle(false) })
    //   .catch((err) => { console.log(err); })

  }



  const handlerDelete = (items, index) => {
    
    let id = items.id
    dispatch(deleteTaskData(id))
    dispatch(setDeleteToggle(!deleteTog))
    // deleteTask(id)
    //   .then((res) => { console.log(res); setDeleteToggle(!deleteToggle); ToastifyRedux('error'); })
    //   .catch((err) => { console.log(err); })
  }

  const handlerInputUpdate = (e, items) => {
    // console.log(e.target.value);
    dispatch(setTaskEditData(
      {
        id: items.id,
        task: e.target.value
      }
    ))

    let { name, value } = e.target;
    setTaskUpdating((prevData) => ({ ...prevData, task: value }))
  }

  const handlerEdit = (items, index) => {
    setEditToggle(true)
    setIndexValue(index)
    let id = items.id;
    setPrevTask(items);
    dispatch(setEditToggle(true))

  }







  return (
    <>
      <div className='container p-2 '>

        <div className='my-3 row justify-content-between align-items-center'>

          <div className='row justify-content-center align-items-center'>


            <div>
              <Inputs className="border-none p-2 border-radius-1 b-radius-1" placeholder="Search The Value" />
            </div>

            <div>
              <select className='p-2 border-radius-1 mx-2 border-none cursor b-radius-1'>
                <option>All</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>

          </div>

          <div className=''>

          </div>

          <div className=''>
            <ButtonAction className='btn color-white cursor bg-blue blueHover' handlerSubmit={() => { dispatch(setOpenTaskModal(true)) }} value='Add Task' />
          </div>

        </div>

        <div className='row my-3 bg-white box-shadow'>
          <table className='' border='1px' cellPadding='0px' cellSpacing='0px'>
            <thead className='fz-1'>
              <tr>
                <th>S.NO</th>
                <th>Mark As Checked</th>
                <th>Task</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tableDataFetch && tableDataFetch?.map((items, index) => {
                return (
                  <tr key={items.id.toString()}>
                    <td>{items.id}</td>
                    <td><Inputs type="checkbox" /></td>
                    <td>{editToggle && IndexValue === index ? <Inputs handlerInput={(e) => { handlerInputUpdate(e, items) }} className="p-0-5 w-100" defaultValue={items.task} /> : items.task}</td>
                    <td>{items.status}</td>

                    <td>
                      {editToggle && IndexValue === index
                        ? <img onClick={() => { dispatch(setEditToggle(false)) }} src={CrossIcon} width="20px" alt="" />
                        : <img onClick={() => { handlerEdit(items, index) }} src={EditIcon} width="20px" alt="" />}
                    </td>


                    <td>
                      {editToggle && IndexValue === index
                        ? <img onClick={() => { handlerEditSubmit(items, index) }} src={RightTick} width="22px" alt="" />
                        : <img onClick={() => { handlerDelete(items, index) }} src={DeleteIcon} width="22px" alt="" />}
                    </td>

                  </tr>
                )
              })}


            </tbody>
          </table>
        </div>
      </div>
      {OpenTaskModal ? <AddTask   title="Welcome To Task" body="Wow" footer="jasldfjla" /> : ''}

    </>
  )
}

export default Tasks