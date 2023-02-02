import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import Img from "/src/components/styled/img/img";

export const StyledProductCard = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 20px;
  width: 727px;
  height: 288px;
  background-color: ${(props) => props.theme.сolorFotTextWhite};
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 16px;
`;

export const StyledImg = styled(Img)`
  width: 248px;
  height: 248px;
  padding-right: 20px;
`;

export const StyledPriceWrapper = styled.div`
  display: inline-block;
  position: absolute;
  bottom: 20px;
  padding: 4px 8px;
  background-color: ${(props) => props.theme.colorForAbout};
`;

export const StyledPrice = styled.span`
  font-size: 14px;
  line-height: 21px;
  font-weight: 700;
  color: ${(props) => props.theme.сolorFotTextBlack};
`;
