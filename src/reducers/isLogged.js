import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name : "user",
    initialState:{value:{connected:false, token:"oupo"}},
    reducers : {
        login : (state, action )=>{
            state.value=action.payload
        },
        logout : (state) =>{
            state.value={connected:false, token:""}
        }
    }

})
export const {login} = userSlice.actions;
export const {logout} = userSlice.actions;

export default userSlice.reducer;