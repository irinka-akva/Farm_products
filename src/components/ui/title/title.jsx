import React from "react";
import { StyledTitle } from "./styles";

export const TitleSize = {
  SMALL: "small",
  BIG: "big",
  MIDDLE: "middle",
  TINY: "tiny",
  DEFAULT: ""
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6"
};

function Title({ children, size, level = 1, className }) {
  return (
    <>
      <StyledTitle className={className} as={`h${level}`} $size={size}>
        {children}
      </StyledTitle>
    </>
  );
}

export default Title;
