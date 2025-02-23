import { IContactObj } from "../../types/types";
import { ContactLinesStyled, ContactLineStyled, ContactStyled } from "./styled";

import sprite from "../../assets/icons.svg";

const Contact = ({
  id = "",
  username = "",
  phone = "",
  onHandleDeleteContact,
}: IContactObj) => {
  const handleDeleteContact = () => {
    onHandleDeleteContact(id);
  };

  return (
    <ContactStyled>
      <ContactLinesStyled>
        <ContactLineStyled>
          <svg className="contact-icon" width="18" height="18">
            <use href={sprite + "#icon-person"}></use>
          </svg>
          <span>{username}</span>
        </ContactLineStyled>
        <ContactLineStyled>
          <svg className="contact-icon" width="18" height="18">
            <use href={sprite + "#icon-phone"}></use>
          </svg>
          <span>{phone}</span>
        </ContactLineStyled>
      </ContactLinesStyled>
      <button type="button" onClick={handleDeleteContact}>
        Delete
      </button>
    </ContactStyled>
  );
};

export default Contact;
