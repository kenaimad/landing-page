import RecipeList from "./RecipesList/RecipesList";
import { StyledRecipePage } from "./RecipesPage.styled";

const RecipesPage = () => {
    return (
        <StyledRecipePage>
            <RecipeList />
        </StyledRecipePage>
    );
}

export default RecipesPage;