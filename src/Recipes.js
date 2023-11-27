import './App.css';


function Recipes(props){ 
return(

    <div className='recipes_main-container'>
        <div className='box-container'>
            <img src={props.image} alt='img'/>
            <p>{props.calories} calories</p>
            <h6>{props.label}</h6>
            <ul >{props.ingredientLines && props.ingredientLines.map(item => (
                <li>{item}</li>
            ))}

            </ul>
            <button>🔽</button>
        </div>
    </div>

)
}

export default Recipes;