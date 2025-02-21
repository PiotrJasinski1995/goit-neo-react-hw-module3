import { MainHeadingStyled } from "./styled";

interface IMainHeading {
  children: string;
}

const MainHeading = ({ children }: IMainHeading) => {
  return <MainHeadingStyled>{children}</MainHeadingStyled>;
};

export default MainHeading;
