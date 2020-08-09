import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Search from './Components/Search';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Components/Home';
import Recipe from './Components/Recipe'

function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('')

  const filteredRecipe = recipes.filter(recipe => 
    recipe.name.toLowerCase().includes(search.toLowerCase())
    )

  useEffect(() => {
    axios.get('http://starlord.hackerearth.com/recipe')
    .then(Resolve => {
      setRecipes(Resolve.data)
  })
  .catch(err => {
      console.log(err)
  })
},[])

  return (
    <div className="App">
      <Search handleChange = { e => {
        setSearch(e.target.value); } }  />

      <Router>
        <Switch>
          <Route path='/' exact component={() => <Home recipe={filteredRecipe}/>} />
          <Route path='/:id' component={() => <Recipe recipe={recipes} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
