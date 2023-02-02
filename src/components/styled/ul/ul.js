import styled, { css } from "styled-components";

const gridList = css`
  margin-top: ${(props) => (props.$indent ? `${props.$indent}px` : "44px")};
  margin-bottom: ${(props) => (props.$indent ? `${props.$indent}px` : "64px")};
  margin-left: ${(props) => (props.$indent ? `-${props.$indent}px` : "-20px")};
  font-size: 0;
  line-height: 0;
  text-align: ${(props) => (props.$align ? `${props.$align}px` : "center")};

  li {
    display: inline-block;
    margin-left: ${(props) => (props.$indent ? `${props.$indent}px` : "20px")};
    margin-top: ${(props) => (props.$indent ? `${props.$indent}px` : "20px")};
    font-size: ${(props) =>
      props.$fontSize ? `${props.$fontSize}px` : props.theme.fontSizeDefault};
    line-height: ${(props) =>
      props.$lineHeight
        ? `${props.$lineHeight}px`
        : props.theme.lineHeightDefault};
    text-align: left;
    overflow: hidden;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  ${(props) => (props.$isGridList ? gridList : "")}
`;

export default Ul;
