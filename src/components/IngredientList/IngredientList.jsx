// src/components/IngredientList/IngredientList.jsx

const IngredientList = ({ ingredients, addToBurger}) => {

    return (
        <ul className="ingredient-list">
            {ingredients.map((ingredient, idx) => (
                <li key={idx} style={{backgroundColor: ingredient.color}}>
                    {ingredient.name}
                    <button onClick={()=> addToBurger (ingredient)}>+</button>
                </li>
            ))}
        </ul>
    )
}
  
  export default IngredientList;
  