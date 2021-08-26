import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:   [
         {
           title :"Machine Learning",
           instructor :"Rofl",
           id :  Math.random()*1000000000,
           start_time : "16.30",
           end_time :"17.30",
           description:""
         },
         {
          title :"Data Science",
          instructor :"Lendl",
          id :  Math.random()*1000000000,
          start_time : "10.30",
          end_time :"11.30",
          description:""
        },
        {
          title :"Internet Of Things",
          instructor :"Migrane",
          id :  Math.random()*1000000000,
          start_time : "8.30",
          end_time :"9.30",
          description:""
        },
        {
          title :"Computational Mechanics",
          instructor :"NOtch",
          id :  Math.random()*1000000000,
          start_time : "11.30",
          end_time :"12.30",
          description:""
        },
        {
          title :"Electrodynamics",
          instructor :"yera",
          id :  Math.random()*1000000000,
          start_time : "12:30",
          end_time :"13:30",
          description:"",
        },
         
                    
      ]
    }

const classSlice = createSlice({
    name: 'sl',
    initialState,
    reducers: {
    saveIt: (state,action) =>{
        console.log(state.items);
  state.items  = [ action.payload,...state.items]

    },
    deleteIt :(state,action)=> {
     
     state.items = state.items.filter(({id}) => id !== action.payload.id)  ;

    }
    }
});
export const selectItems = (state) =>state.items ;
export const { saveIt ,deleteIt} = classSlice.actions ;
export default classSlice.reducer;