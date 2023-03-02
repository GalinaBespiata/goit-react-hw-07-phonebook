import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axios.post(
        'https://63fdee76cd13ced3d7c289d3.mockapi.io/api/1/contacts'
      );
      const contact = response.data;
      return contact;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
