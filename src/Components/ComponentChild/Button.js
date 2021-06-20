import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  border: ${(props) => props.theme.borderButton};
  padding: 0.25em 0.5em;
  appearance: none;
  transition: all 0.5s;
  font-size: 17px;
  &:hover{
    background-color: ${(props) => props.theme.hoverBgColor};
    color: ${(props) => props.theme. hoverTextColor};
    border: ${(props) => props.theme.borderButton};
  }
`;
