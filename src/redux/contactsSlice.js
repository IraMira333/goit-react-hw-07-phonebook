import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsInfo: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.contactsInfo.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.contactsInfo.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsInfo.splice(index, 1);
    },
  },
});
export const { addTask, removeContact } = contactsSlice.actions;
//export const contactsReducer = contactsSlice.reducer;
