import './App.css';
import image from '../src/img/04.jpeg'
import Recipes from './Recipes';

function MainPage(){

return(
<div>
    <img className='main-img' src={image} alt='main-img'/>
    <div className='main_page-container'>
        <h3 className='logo_text'> ᧟ Food<span>Hub</span></h3>
        <div className='main_page-title'>
            <h1>This brilliant cooking site  solves the biggest problem with recipes</h1>
        </div>
        <div className='input-container'>
            <form>
                <input placeholder='I have a...' />
                <button>CLICK</button>
            </form>
        </div>
    </div>
    <Recipes />
</div>
)
}

export default MainPage;