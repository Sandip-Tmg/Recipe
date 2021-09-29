import React from 'react';
import './App.css';


const Recipe=({title,ingredients,image})=>{
    return(
        <div>
            <div className="recipe">
                <h1>{title}</h1>
                <ul>
                    {ingredients.map(ingredient=>(
                        <li>{ingredient.text}</li>
                    ))}
                </ul>
                <img src={image} alt=""/>
            </div>
            
        </div>
    );
}

export default Recipe;