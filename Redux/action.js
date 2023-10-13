import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name: "user",
    initialState:[],
    reducers: {
      addTask: (state, action) => {
        const newTask = {
          email: action.payload.email,
          password: action.payload.password,
        };
        state.push(newTask);
    }
  },
});

export const { addTask, DeleteTask } = taskSlice.actions;

export default taskSlice.reducer;


//  export const taskSlice = createSlice({

//     name: "user",
    
//     initialState: {
//         email: "ai@gmail.com",
       
//         users: []
//     },
//     reducers: {
//         addTask: (state,action) => {
//             const newTask={
                
//                 email:action.payload.email,
//                 password:action.payload.password,
               
//             }
//             state.push(newTask)
            
//         },
     

//     }

// });
// export  const {addTask,DeleteTask} = taskSlice.actions;

// export default taskSlice.reducer
