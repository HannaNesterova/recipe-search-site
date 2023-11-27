import './App.css';
import image from '../src/img/04.jpg'




function MainPage(props){
    //const [word, setWord] = useState('apple'); //кнопка пошуку

const myRecipeSearch = (e) => {
props.setSearch(e.target.value);
}

const finalSearch = (e) =>{
    e.preventDefault(); 
    props.setWord(props.search);
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
                <input placeholder='I have a...' onChange={myRecipeSearch} value={props.search}/>
                <button>CLICK</button>
            </form>
        </div>
    </div>
</div>
)
}

export default MainPage;