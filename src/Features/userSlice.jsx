import {createSlice} from "@reduxjs/toolkit"
import axios from "axios";
import jwt from 'jwt-decode';
//Creating new Slice with a name and an initial state
export const userSlice = createSlice({
    name: "user",
    initialState: {
        token: ""
    },
    //The state is the current data of it that we take to update it, the action is the data passed to us in order to update the state
    reducers: {
        login: (state,action) => {
           return {
            ...state,
            ...action.payload
           }
        },
        logout: (state) => {
           return{
            token: ""
           }
        }

    }
});

//Login 
export const loginUser = (data, setOutputAttempt) => async(dispatch) => {
    try {
        const user = await axios.post("https://bbobras.onrender.com/api/auth/login", data);
        let decode = jwt(user.data.token)
        if(user.status === 200){
            dispatch(login({ ...decode, token: user.data.token}));
        }
    } catch (error) {
        setOutputAttempt(error.response.data.message)
    }
}
//Logout
export const logOut = () => (dispatch) => {
    dispatch(logout())
}

//Exporting the actions that have been done
export const {login,logout} = userSlice.actions;
//Exporting the current state of the slice
export const userData = (state) => state.user;
//Exporting the reducer
export default userSlice.reducer;

