import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledButton = styled(Link)`
  min-width: ${(props) => (props.$minWidth ? `${props.$minWidth}px` : "100%")};
  padding: 16px;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: ${(props) => props.theme.сolorFotTextWhite};
  background-color: ${(props) => props.theme.colorButton};
  border: none;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colorButtonHover};
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    background-color: ${(props) => props.theme.colorButtonHover};
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.colorButton};
  }
`;
