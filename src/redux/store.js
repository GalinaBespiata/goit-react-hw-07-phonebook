import { configureStore } from '@reduxjs/toolkit';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

import { contactReducer } from './contactSlice.js';

// const contactsReducerConfig = {
//   key: 'contact',
//   storage,
//   whitelist: ['contacts'],
// };

export const store = configureStore({
  reducer: {
    contactsData: contactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
