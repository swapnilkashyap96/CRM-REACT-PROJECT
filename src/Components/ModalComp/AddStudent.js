import axios from 'axios';
import React, { useState } from 'react'
import ButtonAction from '../Utilites/ButtonAction'
import Inputs from '../Utilites/Inputs'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function AddStudent({ setAddStudentToggle, addStudentToggle }) {

    const [addStudForm, setAddStudForm] = useState({
        name: "",
        email: "",
        password: "",
        dob: "",
        contact: ""
    });
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [contact, setContact] = useState('');

    const handlerInputForm = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setAddStudForm((prevData) => ({ ...prevData, name: value }))
                break;
            case 'email':
                setAddStudForm((prevData) => ({ ...prevData, email: value }))
                break;
            case 'password':
                setAddStudForm((prevData) => ({ ...prevData, password: value }))
                break;
            case 'dob':
                setAddStudForm((prevData) => ({ ...prevData, dob: value }))
                break;
            case 'contact':
                setAddStudForm((prevData) => ({ ...prevData, contact: value }))
                break;

            default:
                break;
        }


    }

    const handlerSubmitForm = () => {

        if (name === '') {
            Toastify('name');
        }
        else if (email === '') {
            Toastify('email');
        }
        else if (password === '') {
            Toastify('password');
        }
        else if (dob === '') {
            Toastify('dob');
        }
        else if (contact === '') {
            Toastify('contact');
        }
        else {
            axios.post('http://localhost:5000/NewStudent/', addStudForm)
                .then((res) => { console.log(res.data); Toastify('success'); setAddStudentToggle(!addStudentToggle); })
                .catch((err) => { console.log(err); })
        }
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
            toast.error('Please Check Again!', {
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




    const handlerCancel = () => {
        setAddStudentToggle(!addStudentToggle);
    }

    return (
        <>
            <div className="modal p-5 box-shadow">
                <div className="header">
                    <h1>Add New Student</h1>

                </div>


                <div className="body my-4">
                    <table>
                        <tr>
                            <td colSpan='2'><Inputs value="name" handlerInput={(e) => { handlerInputForm(e); setName(e.target.value) }} name="name" type="text" className='p-1 w-100 ' placeholder='Enter The Name' /></td>
                        </tr>
                        <tr>
                            <td><Inputs value="email" handlerInput={(e) => { handlerInputForm(e); setEmail(e.target.value) }} name="email" type="email" className='p-1  ' placeholder='Enter The Email' /></td>
                            <td><Inputs value="password" handlerInput={(e) => { handlerInputForm(e); setPassword(e.target.value) }} name="password" type="password" className='p-1  ' placeholder='Enter The Password   ' /></td>
                        </tr>
                        <tr>
                            <td><Inputs value="date" handlerInput={(e) => { handlerInputForm(e); setDob(e.target.value) }} name="dob" type="date" className='p-1 w-100 ' placeholder='Enter The DOB' /></td>
                            <td><Inputs value="contact" handlerInput={(e) => { handlerInputForm(e); setContact(e.target.value) }} name="contact" type="number" className='p-1  ' placeholder='Enter The Contact   ' /></td>
                        </tr>
                    </table>

                </div>


                <div className="footer row justify-content-end">
                    <ButtonAction className='btn ml-2 redHover bg-red color-white' value='Cancel' handlerSubmit={() => { handlerCancel() }} />
                    <ButtonAction className='btn ml-2 blueHover bg-blue color-white' handlerSubmit={() => { handlerSubmitForm() }} value='Submit' />

                </div>
            </div>



        </>
    )
}

export default AddStudent