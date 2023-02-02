import React from "react";
import About from "/src/components/blocks/about/about";
import ReasonsList from "/src/components/blocks/reasons-list/reasons-list";

function MainPage({ reasons }) {
  return (
    <>
      <About />
      <ReasonsList reasons={reasons} />
    </>
  );
}

export default MainPage;
