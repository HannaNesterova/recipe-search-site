import './App.css';

import testImg from './img/03.jpeg';

function Recipes(){ 
return(
    <div className='recipes_main-container'>
        <div className='box-container'>
            <img src={testImg}/>
            <h6>TEST</h6>
            <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
            </ul>
            <button>🔽</button>
        </div>
    </div>
)
}

export default Recipes;