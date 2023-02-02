import styled from "styled-components";
import Img from "/src/components/styled/img/img";

export const FeatureArticle = styled.article`
  width: 540px;
  min-height: 197px;
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.bgColorNegativeCard
      : props.theme.bgColorPositivCard};
  padding: 20px;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  padding-bottom: 20px;
`;

export const Image = styled(Img)`
  margin-right: 22px;
  width: 56px;
  height: 56px;
`;

export const Owner = styled.span`
  background-color: ${(props) =>
    props.isNegative
      ? props.theme.bgColorNegativeCardType
      : props.theme.bgColorPositivCardType};
  padding: 2px 10px;
  box-sizing: border-box;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.сolorFotTextWhite};
`;

export const Text = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  color: ${(props) => props.theme.сolorFotTextBlack};
`;
