import { ReactNode } from "react";
import { SectionStyled } from "./styled";

interface ISection {
  title?: string;
  children?: ReactNode;
}

const Section = ({ title = "", children }: ISection) => {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      {children}
    </SectionStyled>
  );
};

export default Section;
