import { StyledRecipePage } from "./RecipePage.styled";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RecipePage = () => {
    const getRecipe = async () => {
        const response = await fetch(
          `https://landing-page-3dc5c-default-rtdb.firebaseio.com/Recipes/${id}.json`
        );
    
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
    
        const responseData = await response.json();
        console.log(responseData);
      };
    
      useEffect(() => {
        getRecipe();
      });
    let { id } = useParams();
    return (
        <div>{id}</div>
    );
}

export default RecipePage;