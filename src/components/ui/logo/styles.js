import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLogo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const StyledName = styled.span`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  padding-left: 28px;
  color: ${(props) => props.theme.сolorFotTextBlack};
`;
