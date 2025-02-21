import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import contactsAll from "./contactsAll.json"

const LOCAL_STORAGE_KEY = "contactsAll";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : contactsAll;
  }
  )
  
  const [filter, setFilter] = useState("");

   useEffect(() => {
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  
   }, [contacts]);
  
  const handleAddNewContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  }
   const handleDeleteContact = (id) => {
    setContacts((prev) => prev.filter(contact => contact.id !== id));
  };
  const handleFilterChange = (value) => {
    setFilter(value);
  };
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
     <h1>Phonebook</h1>
      <ContactForm onAddNewContact={handleAddNewContact} />
      <SearchBox filter={filter} onFilter={handleFilterChange} />
      <ContactList contacts={filteredContacts} handleDeleteContact={handleDeleteContact}  />
    </>
  )
}

export default App
