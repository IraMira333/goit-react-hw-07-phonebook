import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, removeContact } from './operationsThunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsInfo: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        // return { ...state, contactsInfo: action.payload, isLoading: false };
        state.contactsInfo = action.payload;

        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactsInfo.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(removeContact.pending, handlePending)
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contactsInfo.findIndex(
          contact => contact.id === action.payload
        );
        console.log(state.contactsInfo[index]);
        state.contactsInfo.splice(index, 1);
      })
      .addCase(removeContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
