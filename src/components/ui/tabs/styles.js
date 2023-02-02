import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  padding: 8px 12px;
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: ${(props) => (props.active ? "auto" : "pointer")};
  background-color: ${(props) =>
    props.active
      ? props.theme.bgColorPositivCardType
      : props.theme.colorForOrder};

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const StyledText = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: ${(props) =>
    props.active
      ? props.theme.сolorFotTextWhite
      : props.theme.сolorFotTextBlack};
`;

export const Content = styled.div`
  margin-bottom: 14px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  box-sizing: border-box;
  color: ${(props) => props.theme.сolorFotTextBlack};
`;
