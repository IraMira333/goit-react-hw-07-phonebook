import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { removeContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <ul className={css.listBox}>
      {contacts.map(contact => {
        return (
          <li className={css.liContact} key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number}</span>

            <button
              className={css.listBtn}
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default ContactList;
