import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import StyledDiv, { StyledButton, StyledMain } from "./style";
import diet from "../../assets/diet.svg";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    calories,
    totalWeight,
    label: mainlabel,
    totalNutrients: {
      CA: { label: calabel, quantity: caquantity },
      CHOCDF: { label: cholabel, quantity: choquantity },
      CHOLE: { label: chlabel, quantity: chquantity },
      ENERC_KCAL: { label: enlabel, quantity: enquantity },
    },
    digest,
    images: {
      REGULAR: { url },
    },
    ingredientLines,
  } = location.state;
  // const meals = useLocation()
  console.log(location.state);

  return (
    <StyledDiv style={{ backgroundColor: "#04ADBF", color: "#023373" }}>
      <div className="first">
        <h1>{mainlabel}</h1>
        <div>
          <img src={diet} alt="img" />
        </div>
      </div>
      <StyledMain>
        <div>
          <h4>Nutrients</h4>
          <p>
            {calabel} : {Math.floor(caquantity)} g
          </p>
          <p>
            {cholabel} : {Math.floor(choquantity)} g
          </p>
          <p>
            {chlabel} : {Math.floor(chquantity)} mg
          </p>
          <p>
            {enlabel} : {Math.floor(enquantity)} kcal
          </p>
          <p>
            <b>Total Weight</b> : {Math.floor(totalWeight)}
          </p>
          <p>
            <b> Calories </b> : {Math.floor(calories)}
          </p>
          <p>
            {digest[0].label} : {Math.floor(digest[0].total)}
          </p>
          <p>
            {digest[2].label} : {Math.floor(digest[2].total)}
          </p>
        </div>
        <div>
          <img src={url} alt="img" />
        </div>
        <div>
          {ingredientLines.map((item) => {
            return (
              <ul>
                <li>{item}</li>
              </ul>
            );
          })}
        </div>
      </StyledMain>
      <div className="buttons">
        <StyledButton onClick={() => navigate(1)}>Go Forward</StyledButton>
        <StyledButton primary onClick={() => navigate(-1)}>
          Go Back
        </StyledButton>
      </div>
    </StyledDiv>
  );
};

export default Details;
