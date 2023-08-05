import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'reduxThunk/selectors';
import { addContact } from 'reduxThunk/operationsThunk';
import { useId } from 'react';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const findingDoubleName = useSelector(selectContacts);

  const onSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const number = Number(e.currentTarget.number.value);
    console.log(name, number);
    const existingContact = findingDoubleName.find(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (existingContact) {
      alert(`${name} is already in contacts!`);
      return;
    }
    dispatch(addContact({ name, number }));
    e.target.reset();
  };

  const nameId = useId();
  const numberId = useId();

  return (
    <div className={css.formbox}>
      <form onSubmit={onSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          type="text"
          name="name"
          id={nameId}
          pattern="^[a-zA-Z\s]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={numberId}>Number</label>
        <input
          type="tel"
          name="number"
          id={numberId}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.formBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
}
