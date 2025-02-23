import { useId } from "react";
import { ErrorMessage, Field, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { ContactFormStyled, InlineErrorMessageStyled } from "./styled";

interface IContactForm {
  onHandleSubmit: (username: string, phone: string) => void;
}

interface IFormValues {
  username: string;
  phone: string;
}

const phoneRegExp: RegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const FormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Wrong phone format")
    .required("Required"),
});

const initialValues: IFormValues = {
  username: "",
  phone: "",
};

const ContactForm = ({ onHandleSubmit }: IContactForm) => {
  const usernameInputId = useId();
  const phoneInputId = useId();

  const handleFormSubmit = (
    values: IFormValues,
    actions: FormikHelpers<IFormValues>
  ): void => {
    console.log("values");
    onHandleSubmit(values.username, values.phone);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={FormSchema}
    >
      <ContactFormStyled>
        <label htmlFor={usernameInputId}>Username</label>
        <Field type="text" name="username" id={usernameInputId} />
        <ErrorMessage name="username" component={InlineErrorMessageStyled} />
        <label htmlFor={phoneInputId}>Number</label>
        <Field type="phone" name="phone" id={phoneInputId} />
        <ErrorMessage name="phone" component={InlineErrorMessageStyled} />
        <button type="submit">Add contact</button>
      </ContactFormStyled>
    </Formik>
  );
};

export default ContactForm;
