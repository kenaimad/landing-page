import { useEffect } from 'react';
import { IngrediendsContainer } from './IngrediendsList.styled';

const IngrediendsList = (props) => {
  const writeIngrediends = () => {
    if (props.list !== '') {
      return (
        <>
          <ul>
            {props.list.slice(1).map((ingrediend) => (
              <li key={ingrediend}>{ingrediend}</li>
            ))}
          </ul>
        </>
      );
    }
    return null;
  };

  return (
    <IngrediendsContainer>
      <h2>{props.list[0]}</h2>
      {writeIngrediends()}
    </IngrediendsContainer>
  );
};

export default IngrediendsList;
