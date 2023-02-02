import styled from "styled-components";
import Section from "/src/components/styled/section/section";
import aboutImage from "/src/assets/about.svg";

export const StyledSection = styled(Section)`
  padding-top: 183px;
  padding-bottom: 183px;
  background: ${(props) => props.theme.colorForAbout};

  &::before {
    position: absolute;
    width: 446px;
    height: 607px;
    right: 90px;
    top: 75px;
    content: "";
    background-image: url(${aboutImage});
    background-repeat: no-repeat;
  }
`;

export const TextWrapper = styled.div`
  padding-right: 562px;
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  padding-right: 99px;
  color: ${(props) => props.theme.сolorFotTextBlack};
  box-sizing: border-box;
`;
