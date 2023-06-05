import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ContactAPI, ToastifyRedux , editContactAPI} from "../../Services/Services"



const initialState = {
    contact: [],
    editToggle: false,
    rowIndexNo: {
        index: '',
        prevData: '',
    },
    fetchContactToggle :false,
    
    editContact: {
        name: '',
        email: '',
        password: '',
        contact: '',
        dob: '',
    }
}




export const fetchContactAPI = createAsyncThunk('fetchContactAPI/get', async (dataaa, { getState }) => {
    const response = await ContactAPI().then((res) => {
        const { data } = res;
        console.log("fetch", data);
        return { data }
    }).catch((err) => {
        console.log(err, 'Data Not Found Please Check Your API');
    })
    return response;
})

export const editContactUpdateAPI = createAsyncThunk('editContactAPI/get', async (dataaa, { getState }) => {
    const {contact } = getState();
    const {editContact , rowIndexNo } = contact;
    const {prevData} = rowIndexNo
let data = {
    id:prevData.id,
    body:{
        name:editContact.name ?  editContact.name : prevData.name ,
        email: editContact.email ?  editContact.email : prevData.email,
        password: editContact.password ?  editContact.password : prevData.password,
        contact: editContact.contact ?  editContact.contact : prevData.contact,
        dob: editContact.dob ?  editContact.dob : prevData.dob,
    }
}
    const response = await editContactAPI(data).then((res) => {
        const { data } = res;
        console.log("edit contact", data);
        return { data }
    }).catch((err) => {
        console.log(err, 'Data Not Found Please Check Your API');
    })
    return response;
})


const ContactSlice = createSlice({
    name: 'contactSlice',
    initialState,
    reducers: {
        setEditToggle: (state, action) => {
            state.editToggle = action.payload
        },
        setRowIndexNo: (state, action) => {
            state.rowIndexNo = action.payload
        },
        setEditContact: (state, action) => {
            const { name, value } = action.payload;
            switch (name) {
                case 'name':
                    state.editContact.name = value;
                    break;
                case 'email':
                    state.editContact.email = value;
                    break;
                case 'password':
                    state.editContact.password = value;
                    break;
                case 'contact':
                    state.editContact.contact = value;
                    break;
                case 'dob':
                    state.editContact.dob = value;
                    break;
            }

        },
    },
    extraReducers: {
        [fetchContactAPI.fulfilled]: (state, action) => {
            console.log(action);
            state.contact = action.payload.data

        },
        [fetchContactAPI.pending]: (state, _) => {
            state.contact = []
        },
        [fetchContactAPI.rejected]: (state, _) => {
            state.contact = []
        },
        [editContactUpdateAPI.fulfilled]: (state, action) => {
            console.log(action);
            state.editToggle = false;
            state.fetchContactToggle = !state.fetchContactToggle
            // state.contact = action.payload.data

        },
        [editContactUpdateAPI.pending]: (state, _) => {
            state.contact = []
        },
        [editContactUpdateAPI.rejected]: (state, _) => {
            state.contact = []
        }

    }
})


export const {
    setEditToggle,
    setRowIndexNo,
    setEditContact
} = ContactSlice.actions

export default ContactSlice.reducer