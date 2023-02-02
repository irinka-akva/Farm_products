import React, { useState } from "react";
import Panel from "/src/components/ui/panel/panel";
import { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import ProductCard from "/src/components/ui/product-card/product-card";
import Button from "/src/components/ui/button/button";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";

import {
  StyledOrder,
  LeftColumn,
  AddressInput,
  PriceLabel,
  PriceValue,
  StiledTitle,
  StyledSwiper,
  CheckboxLabel
} from "./styles";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Mousewheel, Pagination, Scrollbar]);

function Order({ products }) {
  const [selectProductIds, setSelectProductIds] = useState([]); // состояние, хранящее список выбранных продуктов
  const [swiperRef, setSwiperRef] = useState(null); // состояние, хранящее слайдер
  const [address, setAddress] = useState(""); // состояние, хранящее значение введенного адреса

  //id выбранных продуктов
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );
  //цена покупки
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };
  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };
  return products && products.length ? (
    <StyledOrder>
      <LeftColumn>
        <Panel marginBottom={18}>
          <StiledTitle size={TitleSize.TINY} level={TitleLevel.H3}>
            Выберите продукты
          </StiledTitle>
          <CheckboxList
            labelComponent={CheckboxLabel}
            name={"select-products"}
            isGridList={false}
            options={products.map((product) => ({
              value: product.id,
              title: product.name
            }))}
            selectValues={selectProductIds}
            onChange={setSelectProductIds}
            onClickLabel={handleOnClickProduct}
          ></CheckboxList>
        </Panel>
        <Panel>
          <StiledTitle size={TitleSize.TINY} level={TitleLevel.H3}>
            Сделать заказ
          </StiledTitle>
          <AddressInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Введите адрес доставки"
          ></AddressInput>
          <PriceLabel as="span">Цена</PriceLabel>
          <PriceValue>{fullPrice} руб.</PriceValue>
          <Button
            onClick={handleBuyClick}
            disabled={!(selectProductIds.length && address)}
          >
            Купить
          </Button>
        </Panel>
      </LeftColumn>
      <StyledSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
        pagination={{
          type: "fraction"
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product}></ProductCard>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledOrder>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default Order;
