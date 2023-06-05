import axios from "axios";

import { toast } from 'react-toastify';

const api_URL = "http://localhost:5000";



//this code for Task Data get from server
export const getTask = async () => {
    return await axios.get(api_URL +  "/Tasks")
}

export const deleteTask = (id) => {
    return axios.delete(api_URL + "/Tasks/" + id)
}
// this code for edit task
export const upDateTask = ( body) => {
    const {id,task}=body

    return axios.patch(api_URL + "/Tasks/" + id, {
        task:task
    })
}

// this code for only post
export const addTaskk = async (body) => {
  console.log(body);
    return await axios.post(api_URL + "/Tasks", body)
}
// this code for only Contact API
export const ContactAPI = async () => {
  return await axios.get(api_URL + "/NewStudent")
}

export const editContactAPI = ( data) => {
  const {id , body}=data;
  return axios.patch(api_URL + "/NewStudent/" + id, body)
}





// this code for only ToastifyRedux
export const ToastifyRedux = (data)=>{
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
    else if (data === 'Delete') {
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
    else if (data === 'error') {
      toast.error('Something Went Wrong', {
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
    else if (data === 'updated') {
      toast.success('Data Has Been Updated!', {
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


