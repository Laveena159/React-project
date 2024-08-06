import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./header";
import AddContact from "./addcontact";
import ContactList from "./contactlist";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}
export default App;
