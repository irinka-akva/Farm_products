import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { StyledLogo, StyledName } from "./styles";
import { AppRoute } from "/src/const";

function Logo() {
  return (
    <>
      <StyledLogo to={AppRoute.MAIN}>
        <LogoImage />
        <StyledName>Фермерские продукты</StyledName>
      </StyledLogo>
    </>
  );
}

export default Logo;
