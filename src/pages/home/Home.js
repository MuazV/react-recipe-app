import React, { useState, useEffect } from "react";

const Home = () => {
  const [fname, setFname] = useState("");
  const [foods, setFoods] = useState([]);

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
    e.preventDefault()
    fetchData()
    setFname("")
  }

  return (
    <div>
      <h2>Food App</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="food"
          id="food"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <input type="submit" value="Search" />
        <select>
          <option value="grapefruit">
            Grapefruit
          </option>
          <option value="lime">Lime</option>
          <option defaultValue value="cocon">
            Cocon
          </option>
          <option value="mango">Mango</option>
        </select>
      </form>

      <div>
        {foods?.map((food, index) => {
          return (
            <div key={index}>
              <h4>{food.recipe.label}</h4>
              <img src={food.recipe.images.SMALL.url} alt="img" />
              <button>Details</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
