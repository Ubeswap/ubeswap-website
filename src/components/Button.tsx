import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type IButtonVariant = "green" | "pink";

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

  ${(props) =>
    props.variant === "pink" &&
    css`
      background-color: #d83aeb;
      color: #fff;
    `}
  ${(props) =>
    props.variant === "green" &&
    css`
      background-color: #00ffbd;
      color: rgb(6, 6, 27);
    `}
    :hover {
    transform: scale(1);
  }
`;
