import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm.js";
import ContactList from "./ContactList/ContactList.js";
import SearchBox from "./SearchBox/SearchBox.js";
import Section from "./Section/Section.js";
import MainHeading from "./MainHeading/MainHeading.js";
import Notification from "./Notification/Notification.js";
import { IContact } from "../types/types.js";

function App() {
  const [contacts, setContacts] = useState((): Array<IContact> => {
    const localContacts = window.localStorage.getItem("contacts");

    if (localContacts !== null && localContacts.length > 0) {
      return JSON.parse(localContacts);
    }

    return [];
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (contacts?.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } else {
      const localContacts = localStorage.getItem("contacts");

      if (localContacts !== null) {
        localStorage.removeItem("contacts");
      }
    }
  }, [contacts]);

  const handleFormSubmit = (username: string, phone: string) => {
    const nameContacts = contacts.map((contact) =>
      contact.username.toLowerCase()
    );

    if (nameContacts.indexOf(username.toLowerCase()) !== -1) {
      alert(`${username} is already in contacts.`);
    } else {
      setContacts((previousContacts) => [
        ...previousContacts,
        {
          id: nanoid(),
          username,
          phone,
        },
      ]);
    }
  };

  const handleDeleteContact = (contactId: string) =>
    setContacts((previousContacts) =>
      previousContacts.filter((contact) => contact.id !== contactId)
    );

  const visibleContacts = contacts.filter((contact) =>
    contact.username.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <MainHeading>Phonebook App</MainHeading>
      <Section>
        <ContactForm onHandleSubmit={handleFormSubmit} />
      </Section>
      <Section>
        {contacts.length === 0 ? (
          <Notification message="No contacts in phonebook" />
        ) : (
          <>
            <SearchBox filter={filter} onHandleFilter={setFilter} />
            {visibleContacts.length === 0 ? (
              <Notification message="No contacts matching given criteria"></Notification>
            ) : (
              <ContactList
                contacts={visibleContacts}
                onHandleDeleteContact={handleDeleteContact}
              />
            )}
          </>
        )}
      </Section>
    </>
  );
}

export default App;
