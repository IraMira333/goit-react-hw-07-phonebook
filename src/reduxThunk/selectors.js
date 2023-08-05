import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contactsInfo;
export const selectFilter = state => state.filter.filter;

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [state => state.contacts.contactsInfo, state => state.filter.filter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);
