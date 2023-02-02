import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { FeatureArticle, Header, Image, Owner, Text } from "./styles";

function FeatureCard({ title, owner, image, isNegative, about }) {
  return (
    <FeatureArticle isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title size={TitleSize.TINY} level={TitleLevel.H4}>
            {title}
          </Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: about }}></Text>
    </FeatureArticle>
  );
}

export default FeatureCard;
