import React, { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import StyledDiv, { StyledInput, StyledSelect, StyDiv, DivBot } from "./style";

const Home = (props) => {
  const [fname, setFname] = useState("");
  const [foods, setFoods] = useState([]);

  props.funcNav(true);

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${fname}&app_id=e60ff273&app_key=19309b4ff8f037f7a7995e4dd6fe2773`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setFoods(data.hits);
      console.log(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    setFname("");
  };

  return (
    <div style={{backgroundColor: "#04D9C4", color: "#023373"}}>
      <StyledDiv>
        <h2>Food App</h2>
        <form onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            name="food"
            id="food"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <StyledInput type="submit" value="Search" />
          <StyledSelect>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option defaultValue value="Dinner">
              Dinner
            </option>
            <option value="Snack">Snack</option>
            <option value="Teatime">Teatime</option>
          </StyledSelect>
        </form>
      </StyledDiv>
      <StyDiv>
        {/* {foods.filter((f) => f.recipe.mealType[0] == mt ).map((food, index) => { */}
        {foods?.map((food) => {
          const {totalWeight} = food.recipe
          return (
            <DivBot>
              <RecipeCard key={totalWeight} food ={food}/>
            </DivBot>
          );
        })}
      </StyDiv>
    </div>
  );
};

export default Home;
