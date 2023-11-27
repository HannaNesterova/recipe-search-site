import { useEffect, useState } from 'react';
import './App.css';
import MainPage from './MainPage';


//https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=318a0a2e&app_key=%205b741c8141a3baff91d1e4235bd115b1


function App() {

  const MY_ID ='318a0a2e';
  const MY_KEY ='%205b741c8141a3baff91d1e4235bd115b1';

  useEffect(() => {
    const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    console.log(data.hits)
    }
    getRecipe();
  },[])


  return (
    <div>
      <MainPage />
    </div>
  );
}

export default App;
