import { useId } from "react";
import { ContactFormStyled } from "./styled";

interface IContactForm {
  onHandleSubmit: (name: string, number: string) => void;
}

const ContactForm = ({ onHandleSubmit }: IContactForm) => {
  const nameInputId = useId();
  const numberInputId = useId();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const target = event.target as typeof event.target & {
      name: { value: string };
      number: { value: string };
    };

    const name = target.name.value;
    const number = target.number.value;

    onHandleSubmit(name, number);
    form.reset();
  };

  return (
    <ContactFormStyled onSubmit={handleFormSubmit}>
      <label htmlFor={nameInputId}>Name</label>
      <input
        type="text"
        name="name"
        id={nameInputId}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        autoComplete="off"
        required
      />
      <label htmlFor={numberInputId}>Number</label>
      <input
        type="tel"
        name="number"
        id={numberInputId}
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        autoComplete="off"
        required
      />
      <button type="submit">Add contact</button>
    </ContactFormStyled>
  );
};

export default ContactForm;
