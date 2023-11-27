import { useEffect, useState } from 'react';
import './App.css';
import MainPage from './MainPage';
import Recipes from './Recipes';

function App() {

  const [search, setSearch] = useState(''); //input
  const [recipes, setRecipes] = useState([]); //рецепти
  const [word, setWord] = useState(''); //кнопка пошуку

  const MY_ID ='318a0a2e';
  const MY_KEY ='%205b741c8141a3baff91d1e4235bd115b1';

  useEffect(() => {
    const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${word}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
    }
    getRecipe();
  },[word])


  return (
    <div>
      <MainPage search={search} 
      setSearch={setSearch} 
      setWord={setWord}/>

      <div className='flex-rec'>
      {recipes.map((item, id) => (
        <Recipes key={id}
        image={item.recipe.image} 
        label={item.recipe.label} 
        calories={item.recipe.calories.toFixed()} 
        ingredientLines={item.recipe.ingredientLines}/>
      ))}
      </div>

    </div>
  );
}

export default App;
