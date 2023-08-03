import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContacts } from './operationsThunk';

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
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        // return { ...state, contactsInfo: action.payload, isLoading: false };
        state.contactsInfo = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, state => {
        // return { ...state, isLoading: true, error: null };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        // return { ...state, isLoading: false, error: action.payload };
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export const { addTask, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
