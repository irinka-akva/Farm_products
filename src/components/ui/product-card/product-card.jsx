import React from "react";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Tabs from "/src/components/ui/tabs/tabs";
import OptionsList from "/src/components/ui/options-list/options-list";
import {
  StyledProductCard,
  StyledImg,
  StyledTitle,
  StyledPriceWrapper,
  StyledPrice
} from "./styles";

function ProductCard({ product }) {
  const tabs = [
    {
      title: "Описание",
      content: product.description,
      price: (
        <StyledPriceWrapper>
          <StyledPrice> {product.price} руб./</StyledPrice>
          <StyledPrice> {product.weight} гр.</StyledPrice>
        </StyledPriceWrapper>
      )
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications}></OptionsList>
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure}></OptionsList>
    }
  ];
  return (
    <StyledProductCard>
      <StyledImg src={product.image} alt={product.name} />
      <div>
        <StyledTitle size={TitleSize.MIDDLE} level={TitleLevel.H3}>
          {product.name}
        </StyledTitle>
        <Tabs tabs={tabs}></Tabs>
      </div>
    </StyledProductCard>
  );
}

export default ProductCard;
