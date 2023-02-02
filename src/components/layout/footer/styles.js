import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: ${(props) => props.theme.pageWidth};
  min-height: ${(props) => props.theme.heightFooterHeader};
  padding: 10px 90px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 auto;
`;

export const StyledCopyright = styled.span`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: ${(props) => props.theme.сolorFotTextBlack};
`;
