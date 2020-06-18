import React from "react";
import Card from "../Card";

const CardList = ({ data, match }) => {
  return data.map(card => (
    <Card
      key={card.id}
      data={card}
      isSelected={match.params.id === "" + card.id}
    />
  ));
};

export default CardList;
