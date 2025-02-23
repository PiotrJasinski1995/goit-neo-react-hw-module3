import { Form } from "formik";
import styled from "styled-components";

export const ContactFormStyled = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  padding: 20px;
  border: solid black 1px;
`;

export const InlineErrorMessageStyled = styled.div`
  background-color: rgb(255, 245, 245);
  color: rgb(120, 27, 0);
  display: block;
  white-space: pre-line;
`;
