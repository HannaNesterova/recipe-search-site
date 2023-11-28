import { useState } from 'react';

import './App.css';
import image from '../src/img/04.jpg'




function MainPage({setWord}){
const [search, setSearch] = useState(''); //input

const myRecipeSearch = (e) => {
setSearch(e.target.value);
}

const finalSearch = (e) =>{
    e.preventDefault(); 
    setWord(search);
}

return(
<div>
    <img className='main-img' src={image} alt='main-img'/>
    <div className='main_page-container'>
        <h3 className='logo_text'> ᧟ Food<span>Hub</span></h3>
        <div className='main_page-title'>
            <h1>This brilliant <span>cooking</span> site  solves the biggest <span className='span_second'>problem</span> with recipes</h1>
        </div>
        <div className='input-container'>
            <form onSubmit={finalSearch}>
                <input placeholder='Put here your ingredient...' onChange={myRecipeSearch} value={search}/>
                <button>CLICK</button>
            </form>
        </div>
    </div>
</div>
)
}

export default MainPage;