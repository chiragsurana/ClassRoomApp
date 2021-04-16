import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items:   [
         {
           title :"process",
           instructor :"the ",
           id :  Math.random()*1000000000
         },
         {
          title :"process",
          instructor :"the ",
          id :  Math.random()*1000000000
        },
        {
          title :"process",
          instructor :"the ",
          id :  Math.random()*1000000000
        },
        {
          title :"process",
          instructor :"the ",
          id :  Math.random()*1000000000
        },
        {
          title :"process",
          instructor :"the ",
          id :  Math.random()*1000000000
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