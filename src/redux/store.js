import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filterSlice';
//import { contactsReducer } from './contactsSlice';

import contactsReducers from './contactsReducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducers,
    filter: filterReducer,
  },
});
