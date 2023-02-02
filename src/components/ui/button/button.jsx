import React from "react";
import { StyledButton } from "./styles";

function Button({
  children,
  minWidth,
  link,
  className,
  onClick, // событие по клику
  ...props // остальные переданные пропсы
}) {
  return (
    <>
      <StyledButton
        {...props}
        className={className}
        $minWidth={minWidth}
        {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
      >
        {children}
      </StyledButton>
    </>
  );
}

export default Button;
