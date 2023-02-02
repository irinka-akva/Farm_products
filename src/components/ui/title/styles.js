import styled from "styled-components";
import { TitleSize } from "./title";

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: ${(props) => props.theme.сolorFotTextBlack};
  font-size: ${(props) => {
    let fontSize;
    if (props.$size === TitleSize.BIG) {
      fontSize = "44px";
    }
    if (props.$size === TitleSize.SMALL) {
      fontSize = "36px";
    }
    if (props.$size === TitleSize.MIDDLE) {
      fontSize = "24px";
    }
    if (props.$size === TitleSize.TINY) {
      fontSize = "18px";
    }
    return fontSize;
  }};

  line-height: ${(props) => {
    let lineHeight;
    if (props.$size === TitleSize.BIG) {
      lineHeight = "51px";
    }
    if (props.$size === TitleSize.SMALL) {
      lineHeight = "41px";
    }
    if (props.$size === TitleSize.MIDDLE) {
      lineHeight = "31px";
    }
    if (props.$size === TitleSize.TINY) {
      lineHeight = "27px";
    }
    return lineHeight;
  }};
`;
