import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type IButtonVariant = "ube";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: IButtonVariant;
}

export const Button: React.FC<IProps> = (props) => {
  return <StyledButton {...props} />;
};

const StyledButton = styled.button<IProps>`
  transform: scale(0.98);
  border: none;
  border-radius: 3px;
  padding: 14px 22px;
  transition: transform 0.25s ease 0s;
  cursor: pointer;

  font-weight: 500;
  font-size: 16px;
  line-height: 17px;

  ${(props) =>
    props.variant === "ube" &&
    css`
      background-color: #8878c3;
      color: #fff;
    `};
  :hover {
    transform: scale(1);
  }
`;
