import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { addTaskk, deleteTask, getTask, ToastifyRedux, upDateTask } from "../../Services/Services";




const initialState = {
    task: [],
    openTaskModal: false,
    editToggle: false,
    taskEditData: {
        id: '',
        task: ''
    },
    deleteToggle:false,
    addTask :{
        task:"",
        status:'pending'
    }



}

export const fetchTaskAPI = createAsyncThunk('task/fetch', async (data, { getState }) => {


    const response = await getTask().then((res) => {

        const { data } = res;
        console.log(data);
        return {
            data
        }
    }).catch((err) => {
        alert(err, 'there is error in api')
    })
    return response;
})

export const taskEditSubmit = createAsyncThunk('taskEditSubmit/Post', async (dataa, { getState }) => {
    // console.log(getState());
    const { task } = getState()
    const { taskEditData } = task

    const response = await upDateTask(taskEditData).then((res) => {
        ToastifyRedux('updated')
    }).catch((err) => {
        alert('data not found')
    })

})
export const addTaskAPI = createAsyncThunk('addTask/Post', async (dataa, { getState }) => {
    // console.log(getState());
    const { task } = getState()
    const { addTask } = task

    const response = await addTaskk(addTask).then((res) => {
        ToastifyRedux('updated')
    }).catch((err) => {
        alert('data not found')
    })

})

export const deleteTaskData =createAsyncThunk ('deleteTaskData/Delete',async(data,{getState})=>{
    const response =await deleteTask(data).then((res)=>{
        ToastifyRedux('Delete')
    }).catch((err)=>{
        ToastifyRedux('error')
    })
})




const taskSlice = createSlice({
    name: "taskSlice",
    initialState,
    reducers: {
        setOpenTaskModal: (state, action) => {
            state.openTaskModal = action.payload
        },
        setEditToggle: (state, action) => {
            state.editToggle = action.payload
        },
        setDeleteToggle: (state, action) => {
            state.deleteToggle = action.payload
        },
        
        setTaskEditData: (state, action) => {
            console.log(action);
            const { id, task } = action.payload
            state.taskEditData = {
                id: id,
                task: task
            }
        },
        setTaskAddData :(state,action)=>{
            state.addTask.task = action.payload
        }


    },
    extraReducers: {
        [fetchTaskAPI.fulfilled]: (state, action) => {

            state.task = action.payload.data
        }
        ,
        [fetchTaskAPI.pending]: (state, _) => {
            state.task = []
        },
        [fetchTaskAPI.rejected]: (state, _) => {
            state.task = []
        },
        [taskEditSubmit.fulfilled]: (state, action) => {

            state.task = action.payload.data
        }
        ,
        [taskEditSubmit.pending]: (state, _) => {
            state.task = []
        },
        [taskEditSubmit.rejected]: (state, _) => {
            state.task = []
        },
        [addTaskAPI.fulfilled]: (state, action) => {
            state.editToggle = !state.editToggle;
        }
        ,
        [addTaskAPI.pending]: (state, _) => {
            state.task = []
        },
        [addTaskAPI.rejected]: (state, _) => {
            state.task = []
        }


    }
})

export const {
    setTaskEdit,
    setOpenTaskModal,
    setEditToggle,
    setTaskEditData,
    setDeleteToggle,
    setTaskAddData

} = taskSlice.actions

export default taskSlice.reducer;

