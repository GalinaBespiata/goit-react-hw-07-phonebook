import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectedWithValue }) => {
    try {
      const response = await axios.get(
        'https://63fdee76cd13ced3d7c289d3.mockapi.io/api/1/contacts'
      );
      const contacts = response.data;

      return contacts;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);
