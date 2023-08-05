import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import Spiner from 'components/Spiner/Spiner';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'reduxThunk/selectors';
import * as contactsOperations from '../reduxThunk/operationsThunk';
import { useEffect } from 'react';

export default function App() {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);
  const showContacts = !isLoading && !isError && contacts.length > 0;
  const showNoContacts = !isLoading && !isError && contacts.length === 0;

  return (
    <div className={css.phonebook}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <Spiner />}
      {isError && <p>{isError}</p>}
      {showContacts && (
        <>
          <Filter />
          <ContactList contacts={filteredContacts} />
        </>
      )}
      {showNoContacts && (
        <p className={css.noContact}>You don't have any contact yet</p>
      )}
    </div>
  );
}
