import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  function getFilterContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  const filteredContacts = getFilterContacts();
  return (
    <div className={css.phonebook}>
      <h2>Phonebook</h2>
      <ContactForm />

      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <p className={css.noContact}>You don't have any contact yet</p>
      )}
      <ContactList contacts={filteredContacts} />
    </div>
  );
}
