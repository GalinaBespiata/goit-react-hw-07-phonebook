import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [],
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',

  initialState: contactsInitialState,

  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter, setContacts } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
