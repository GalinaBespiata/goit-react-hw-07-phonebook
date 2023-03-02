import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactList } from './ContactList/ContactList';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { fetchContacts } from 'redux/servises/fetchContacts ';
import { useSelector } from 'react-redux';
import { selectItems } from 'redux/selectors/selectors';

export function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div
      style={{
        border: '2px solid #4b193e',
        padding: '40px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        // fontSize: 40,
        color: '#4b193e',
        flexDirection: 'column',
      }}
    >
      <h1
        style={{
          color: '#3a3639',
          textShadow: '-5px -3px 5px #B23479',
        }}
      >
        My Phonebook
      </h1>
      <FormAddContacts />
      <h2>Contacts</h2>
      {contacts.length ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Контактів немає</p>
      )}
    </div>
  );
}
