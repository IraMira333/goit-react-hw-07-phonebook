//import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { filterForContacts } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  function onFilterInput(e) {
    dispatch(filterForContacts(e.target.value));
  }

  return (
    <div className={css.filterInput}>
      <input placeholder="Search name..." onChange={onFilterInput}></input>
    </div>
  );
};

export default Filter;
