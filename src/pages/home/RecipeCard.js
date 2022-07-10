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
    onClick={() => navigate(`${label}`, { state: food.recipe })}
    >
      <h4>{label}</h4>
      <img src={url} alt="img" />
      <button>Details</button>
    </DivBot>
  );
};

export default RecipeCard;
