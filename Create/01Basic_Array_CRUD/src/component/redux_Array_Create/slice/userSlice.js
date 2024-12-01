import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",

  initialState: [],

  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser:(state,action)=>{
        const deletedUser=state.filter((user)=> user.userName !==action.payload.userName)
        return deletedUser
    },
    
  },
});

export const { createUser,deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
