import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import {APP_ID,APP_KEY} from './data/config';

const App= ()=>{

  //this is the main object that holds all of our recipe objects from the API
  const[recipes,setRecipes]= useState([]);
  const[input,setInput]= useState("");
  const[search,setSearch]= useState("icecream");

  //only fetch request when the search button is clicked and search is changed
  useEffect(()=>{
    getRecipeRequest();
  },[search]);

  //fetching the API request
  const getRecipeRequest= async ()=>{
      const response= await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const recipes=await response.json();
      setRecipes(recipes.hits);
      console.log(recipes);
  }

  //this will handle the input data and set it to the value entered 
  const handleChange=(event)=>{
    setInput(event.target.value);
  }

  //set the search query to the input value entered
  const submitSearch=(event)=>{
    event.preventDefault();
    setSearch(input);
    setInput('');
  }
  
  return(
    <div className="App">
      <form className="search-form" onSubmit={submitSearch}>
        <input className="search-input form-control" placeholder="Type the recipe you want...." value={input} onChange={handleChange}/>
        <button className="btn btn-success search-button" type="submit"><i class="fas fa-search"></i></button>
      </form>
        <div className="container recipes">
        {recipes.map(recipe=>(
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
      </div>
     
     
     
    </div>
  );
}

export default App;
