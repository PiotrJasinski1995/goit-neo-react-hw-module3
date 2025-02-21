import Contact from "../Contact/Contact";

import { IContact } from "../../types/types";
import { ContactListStyled } from "./styled";

interface IContactList {
  contacts: Array<IContact>;
  onHandleDeleteContact: (id: string) => void;
}

const ContactList = ({
  contacts = [],
  onHandleDeleteContact,
}: IContactList) => {
  return (
    <ContactListStyled>
      {contacts.map((contact) => {
        const { id, name, number } = contact;

        return (
          <li key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              onHandleDeleteContact={onHandleDeleteContact}
            />
          </li>
        );
      })}
    </ContactListStyled>
  );
};

export default ContactList;
