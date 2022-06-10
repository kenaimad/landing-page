import { IngrediendsContainer, Subtitle, List } from './IngrediendsList.styled';

const IngrediendsList = (props) => {
  const writeIngrediends = () => {
    if (props.list !== '') {
      return (
        <>
          <List>
            {props.list.slice(1).map((ingrediend) => (
              <li key={ingrediend}>{ingrediend}</li>
            ))}
          </List>
        </>
      );
    }
    return null;
  };

  return (
    <IngrediendsContainer>
      <Subtitle>{props.list[0]}</Subtitle>
      {writeIngrediends()}
    </IngrediendsContainer>
  );
};

export default IngrediendsList;
