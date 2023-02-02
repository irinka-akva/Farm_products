import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import { Ul, Li } from "/src/components/styled";
import FeatureCard from "/src/components/ui/feature-card/feature-card";
import { StyledSection, ListWrapper } from "./styles";
import { AppRoute } from "/src/const";

function ReasonsList({ reasons }) {
  return reasons && reasons.length ? (
    <StyledSection>
      <ListWrapper>
        <Title size={TitleSize.SMALL} level={TitleLevel.H2}>
          Почему фермерские продукты лучше?
        </Title>
        <Ul $isGridList>
          {reasons.map((reason) => (
            <Li id={reason.id}>
              <FeatureCard {...reason} />
            </Li>
          ))}
        </Ul>
        <Button minWidth={260} link={AppRoute.ORDER}>
          Купить
        </Button>
      </ListWrapper>
    </StyledSection>
  ) : null;
}

export default ReasonsList;
