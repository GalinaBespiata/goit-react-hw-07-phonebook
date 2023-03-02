import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectedWithValue }) => {
    try {
      const response = await axios.delete(
        `https://63fdee76cd13ced3d7c289d3.mockapi.io/api/1/contacts/${contactId}`
      );
      const contacts = response.data.id;

      return contacts;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
