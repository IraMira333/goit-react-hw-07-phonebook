import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../services/contacts_API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  }
);
