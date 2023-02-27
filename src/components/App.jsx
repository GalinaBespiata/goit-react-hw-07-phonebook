import { Filter } from './Filter/Filter';

import { ContactList } from './ContactList/ContactList';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { setContacts, setFilter } from 'redux/contactSlice';

export function App() {
  const contacts = useSelector(state => state.contactsData.contacts);

  const filter = useSelector(state => state.contactsData.filter);
  const dispatch = useDispatch();

  const addContact = contact => {
    if (
      contacts.some(el => el.name.toLowerCase() === contact.name.toLowerCase())
    ) {
      alert('!!!');
      return;
    }
    const newContact = { id: nanoid(), ...contact };
    dispatch(setContacts([newContact, ...contacts]));
  };

  const handleFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  const onDeleteContact = contactId => {
    dispatch(setContacts(contacts.filter(contact => contact.id !== contactId)));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );
  return (
    <div
      style={{
        border: '2px solid #4b193e',
        padding: '40px',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        fontSize: 40,
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
      <FormAddContacts onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilterChange={handleFilter} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}
