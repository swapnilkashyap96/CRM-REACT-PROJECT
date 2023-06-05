import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AddStudent from '../ModalComp/AddStudent'
import ButtonAction from '../Utilites/ButtonAction'
import EditIcon from '../../assets/icon/settings/edit.svg'
import DeleteIcon from '../../assets/icon/settings/delete.svg'
import CrossIcon from '../../assets/icon/settings/cross.svg'
import RightTick from '../../assets/icon/settings/righttick.svg'
import Inputs from '../Utilites/Inputs';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactAPI } from '../../Services/Services';
import { setTaskHeading } from '../../Store/Slice/HeaderHeadingSlice'
import { editContactUpdateAPI, fetchContactAPI, setEditContact, setEditToggle, setRowIndexNo } from '../../Store/Slice/ContactSlice';


function Contacts() {
  const [addStudentToggle, setAddStudentToggle] = useState(false);
  const [studentData, setStudentData] = useState();
  const [deleteToggle, setDeleteToggle] = useState(false);
  // const [IndexValue, setIndexValue] = useState();
  const dispatch = useDispatch();
  const contactState = useSelector((state)=>state.contact.fetchContactToggle)
  const tabledata=useSelector((state)=>state?.contact?.contact)
  const editToggle=useSelector((state)=>state?.contact?.editToggle)
  const indexNo=useSelector((state)=>state?.contact?.rowIndexNo?.indexNo)


  useEffect(()=>{
      dispatch(setTaskHeading('Contacts'))
  },[])


  useEffect(() => {
    dispatch(fetchContactAPI())
  }, [addStudentToggle, deleteToggle ,contactState])




  const editToggleFunction = (items, index) => {
    dispatch(setEditToggle(true))
    dispatch(setRowIndexNo({
      indexNo:index,
      prevData:items
    }))
    
  }

  const handlerDelete = (items) => {

    let id = items.id;
    axios.delete('http://localhost:5000/NewStudent/' + id)
      .then((res) => { console.log(res); setDeleteToggle(true); Toastify('error'); })
      .catch((err) => { console.log(err); })
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
    else if (data === 'error') {
      toast.error('Data Has Been Deleted!', {
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
    else if (data === 'name') {
      toast.error('Please Enter the Name!', {
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
    else if (data === 'email') {
      toast.error('Please Enter the Email!', {
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
    else if (data === 'password') {
      toast.error('Please Enter the Password!', {
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
    else if (data === 'dob') {
      toast.error('Please Enter the DOB!', {
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
    else if (data === 'contact') {
      toast.error('Please Enter the Contact!', {
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
  const handlerInput =(e)=>{
    dispatch(setEditContact(e.target))
    console.log('inside' , e.target.name);
    
  }
  const onUpdate =()=>{
  dispatch(editContactUpdateAPI())
  }

  return (
    <>
      <div className='container'>


        <div className="row my-5 justify-content-end">
          <ButtonAction handlerSubmit={() => { setAddStudentToggle(true) }} className='btn color-white blueHover bg-blue' value='Add Student' />
        </div>


        <div className="row bg-white my-5 box-shadow">
          <table border="1px" cellPadding='0px' cellSpacing='0px'>
            <thead>
              <tr className='fz-1'>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Contact</th>
                <th>DOB</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tabledata && tabledata.map((items, index) => {
                
                return (
                  <tr>
                    <td>{items.id}</td>
                    <td>{editToggle && index == indexNo ? <Inputs handlerInput={handlerInput}  type="text" name="name" className="p-0-5" defaultValue={items.name} /> : items.name}</td>
                    <td>{editToggle && index == indexNo ? <Inputs  handlerInput={handlerInput} type="email" name="email" className="p-0-5" defaultValue={items.email} /> : items.email}</td>
                    <td>{editToggle && index == indexNo ? <Inputs handlerInput={handlerInput} type="password" name="password" className="p-0-5" defaultValue={items.password} /> : items.password}</td>
                    <td>{editToggle && index == indexNo ? <Inputs  handlerInput={handlerInput}type="number" name="contact" className="p-0-5" defaultValue={items.contact} /> : items.contact}</td>
                    <td>{editToggle && index == indexNo ? <Inputs handlerInput={handlerInput} type="date" name="dob" className="p-0-5" defaultValue={items.dob} /> : items.dob}</td>
                    <td>
                      {editToggle && index == indexNo
                        ? <img src={CrossIcon} onClick={() => { dispatch(setEditToggle(false)) }} width='20px' />
                        : <img src={EditIcon} width='20px' onClick={() => { editToggleFunction(items, index) }} />}
                    </td>
                    <td>
                      {editToggle && index == indexNo
                        ? <img src={RightTick} width='20px'onClick={(e)=>onUpdate(e)} />
                        : <img src={DeleteIcon} onClick={() => { handlerDelete(items, index) }} width='22px' />}
                    </td>
                  </tr>
                )
              }
              )}
            </tbody>
          </table>

        </div>

      </div>
      {addStudentToggle ? <AddStudent addStudentToggle={addStudentToggle} setAddStudentToggle={setAddStudentToggle} /> : ''}
    </>
  )
}

export default Contacts