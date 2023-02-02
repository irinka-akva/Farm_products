import styled from "styled-components";

export const TextInput = styled.input`
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colorForOrder};
  width: 100%;
  min-height: 48px;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 14px;

  ::placeholder {
    font-size: 14px;
    line-height: 21px;
    color: ${(props) => props.theme.сolorFotTextBlack};
  }
`;

export default TextInput;
