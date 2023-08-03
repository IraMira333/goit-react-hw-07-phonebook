import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './actions';

const entities = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) =>
    (state = action.payload),
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, action) => action.payload,
  [contactsActions.fetchContactsRequest]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
