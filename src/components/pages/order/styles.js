import styled, { css } from "styled-components";
import { Section, Label } from "/src/components/styled";
import TextInput from "/src/components/ui/text-input/text-input";
import Title from "/src/components/ui/title/title";
import { Swiper } from "swiper/react";
import checkboxSelect from "/src/assets/checkbox.svg";

export const StyledOrder = styled(Section)`
  background-color: ${(props) => props.theme.colorForOrder};

  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  position: absolute;
  top: ${(props) => props.theme.heightFooterHeader};
  bottom: ${(props) => props.theme.heightFooterHeader};
`;

export const StyledSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;

export const LeftColumn = styled.div`
  padding-right: 20px;
  width: 353px;
  overflow-y: overlay;
  max-height: 100%;
`;

export const StiledTitle = styled(Title)`
  margin-bottom: 25px;
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: 20px;
`;

export const PriceLabel = styled(Label)`
  font-size: 14px;
  margin-bottom: 6px;
`;

export const PriceValue = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: ${(props) => props.theme.colorButton};
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-image: url(${checkboxSelect});
            background-repeat: no-repeat;
            background-position: center center;
          `
        : css`
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;
