import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/const";
import { StyledButton } from "./styles";
import { useLocation } from "react-router-dom";

const buttons = [
  {
    to: AppRoute.MAIN,
    button: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button minWidth={260} link={AppRoute.ORDER}>
        Купить
      </Button>
    )
  }
];

function Nav() {
  const pageURL = useLocation().pathname;

  return (
    <>
      <nav>
        {buttons
          .filter((button) => button.to !== pageURL)
          .map((button) => button.button)}
      </nav>
    </>
  );
}

export default Nav;
