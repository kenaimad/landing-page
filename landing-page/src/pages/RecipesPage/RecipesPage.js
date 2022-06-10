import RecipeList from "./RecipesList/RecipesList";
import { PageWrapper } from "./RecipesPage.styled";

const RecipesPage = () => {
    return (
        <PageWrapper>
            <RecipeList />
        </PageWrapper>
    );
}

export default RecipesPage;