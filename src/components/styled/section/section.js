import styled from "styled-components";

const Section = styled.section`
  position: relative;
  margin: 0;
  padding-right: ${(props) => props.theme.paddingRightPage};
  padding-left: ${(props) => props.theme.paddingLeftPage};
  width: ${(props) => props.theme.pageWidth};
  box-sizing: border-box;
`;

export default Section;
