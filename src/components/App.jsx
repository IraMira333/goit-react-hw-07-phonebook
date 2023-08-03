import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import * as contactsOperations from '../redux/operations';
import { useEffect } from 'react';

export default function App() {
  const entities = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  function getFilterContacts() {
    return entities.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  const filteredContacts = getFilterContacts();
  return (
    <div className={css.phonebook}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {entities.length > 0 ? (
        <Filter />
      ) : (
        <p className={css.noContact}>You don't have any contact yet</p>
      )}
      <ContactList contacts={filteredContacts} />
    </div>
  );
}
