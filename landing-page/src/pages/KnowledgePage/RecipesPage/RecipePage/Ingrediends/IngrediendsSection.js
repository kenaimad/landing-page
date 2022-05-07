import IngrediendsList from './IngrediendsList/IngrediendsList';
import { Ingrediends } from './IngrediendsSection.styled';

const IngrediendsSection = (props) => {

  return (
    <Ingrediends>
      {props.ingrediends.map((list) => {
        return <IngrediendsList key={list[0]} list={list.split(',')} />;
      })}
    </Ingrediends>
  );
};

export default IngrediendsSection;
