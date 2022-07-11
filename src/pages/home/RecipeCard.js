import React from "react";
import {DivBot } from "./style";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({food}) => {
  const navigate = useNavigate();
  const {
    label,
    images: {
      SMALL: { url },
    },
  } = food.recipe;
  return (
    <DivBot
    style={{border: "none" }}
    >
      <h4>{label}</h4>
      <img src={url} alt="img" />
      <button style={{ cursor: "pointer"}} onClick={() => navigate(`/Details`, { state: food.recipe })}>View More</button>
    </DivBot>
  );
};

export default RecipeCard;
