import { createSlice,nanoid } from "@reduxjs/toolkit";
const intialState={
    notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [] ,
    total: 0,
}

const notesSlice=createSlice({
    name:"notes",
    initialState:intialState,
    reducers:{
        addNote(state,action){
            state.notes.push({
                id:nanoid(),
                data:action.payload,
            })
            localStorage.setItem("notes",JSON.stringify(state.notes));
        },
        removeNote(state,action){
            state.notes=state.notes.filter((note)=>note.id!==action.payload)
            localStorage.setItem("notes",JSON.stringify(state.notes));
        
        },
        editNote(state,action){
            const { id, data } = action.payload;
           // console.log(action.payload);
            for (let i = 0; i < state.notes.length; i++) {
                if (state.notes[i].id === id) {
                  state.notes[i].data = data;
                  break; 
                }
              }
              localStorage.setItem("notes",JSON.stringify(state.notes));
        
        }
    }
})


export const {addNote,removeNote,editNote}=notesSlice.actions
export default notesSlice.reducer;