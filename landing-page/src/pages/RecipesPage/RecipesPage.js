import RecipeList from "./RecipesList/RecipesList";
import { StyledRecipesPage } from "./RecipesPage.styled";

const RecipesPage = () => {
    return (
        <StyledRecipesPage>
            <RecipeList />
        </StyledRecipesPage>
    );
}

export default RecipesPage;