import React, { Component } from 'react'
import './App.css';

import Form from './components/Form'

// const F2F_API_KEY=process.env.REACT_APP_FOOD2FORK_API;

const ED_APP_ID=process.env.REACT_APP_EDAMAM_APP_ID;
const ED_API_KEY=process.env.REACT_APP_EDAMAM_API;
//"https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

export default class App extends Component {
  state = {
    recipes : []
  }
  
  getRecipe = async (e)=>{
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    // prefix the url with "cors-anywhere.herokuapp.com" if it doesn't allow
    // const apiCall = await fetch(`https://www.food2fork.com/api/search?key=${F2F_API_KEY}&q=${recipeName}&count=1`)
    const apiCall = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${ED_APP_ID}&app_key=${ED_API_KEY}`)
    .catch(err => {
      console.log(err);
    })
    const data = await apiCall.json();
    console.log(data.hits);
    this.setState({recipes: data.hits})
    console.log(this.state.recipes);

  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Recipe Finder</h1>
        <Form getRecipe={this.getRecipe}/>
      </header>
      { this.state.recipes.map((recipe, i)=>{
          return(
            <div key={recipe.recipe.calories*Math.random()} className="recipe-preview" >
              <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
              <h2>{recipe.recipe.label}</h2>
            </div>
          )
        })}
    </div>
    )
  }
}
