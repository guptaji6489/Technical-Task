import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const app_id = "c82d6a36";
  const app_key = "5f89f38d1cd9c650dea48f16569ebeed";

  useEffect( () => {
    getRecipe();
    
  },[]);
   const getRecipe = async () =>
   {
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}`);
    console.log(result);
   await Axios.post("/create", result.data.hits);
  console.log(result.data.hits);
    setRecipes(result.data.hits);
}

const onSearch =() =>{
  getRecipe();
}

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };


  return (
    <>
      <div className="App">
      
        <Header search={search} onInputChange={onInputChange} onSearch={onSearch} />
       <div className="container">
       <Recipes  recipes={recipes} />
       </div>
      </div>
    </>
  );
}

export default App;
