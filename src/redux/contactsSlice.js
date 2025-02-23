import { createSlice } from "@reduxjs/toolkit";
import contactsAll from "../contactsAll.json";

const initialState = {
  contacts: {
    items: contactsAll,
  },
};

const slice = createSlice({
  name: "contacts",
  initialState: initialState.contacts,
  reducers: {
    addContact: (state, actions) => {
      state.items.push(actions.payload);
    },

    deleteContact: (state, actions) => {
      state.items = state.items.filter(
        (contact) => contact.id !== actions.payload
      );
    },
  },
});

export const contactsReducer = slice.reducer;
export const { addContact, deleteContact } = slice.actions;
export const selectContacts = (state) => state.contacts.items;
