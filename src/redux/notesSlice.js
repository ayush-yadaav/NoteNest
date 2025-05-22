import { createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";


const initialState = {
  note: localStorage.getItem("notes") 
  ?  JSON.parse(localStorage.getItem("notes"))
  : []
};

export const noteSlice = createSlice({
  name: 'notes',
  initialState,

  reducers: {
    addToNote: (state, action) => {
     const note = action.payload;
     state.note.push(note);
     localStorage.setItem("notes", JSON.stringify(state.note))
     toast.success("Note Was Created Successfully")
     
    },

    updateToNote: (state, action) => {
      console.log("")
     const note = action.payload;
     const index = state.note.findIndex(item => item._id === note._id )
     if(index >= 0){
      state.note[index] = note;
      localStorage.setItem("notes", JSON.stringify(state.note));
      toast.success("Note Updated")
     }
    },

    reset: (state) => {
      state.note = []
      localStorage.removeItem("notes");
      toast.success("All Notes Cleard")
    },

    removeFromNote: (state, action) => {
      const noteId = action.payload;
      const index = state.note.findIndex(item => item._id === noteId)
      if(index >= 0){
        state.note.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(state.note));
        toast.success("Note Deleted")
      }
    },
  }
});

export const { addToNote, updateToNote, reset, removeFromNote } = noteSlice.actions;
export default noteSlice.reducer;
