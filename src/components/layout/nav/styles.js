import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledButton = styled(Button)`
  padding: 0;
  width: auto;
  min-width: 0;
  display: inline-block;
  background-color: ${(props) => props.theme.сolorFotTextWhite};
  color: ${(props) => props.theme.сolorFotTextBlack};
  font-size: 18px;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.сolorFotTextWhite};
    text-decoration: underline;
  }

  &:hover {
    box-shadow: none;
  }
`;
