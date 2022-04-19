import {
  MainSection,
  StyledKnowledgePageContainer,
} from './KnowledgePage.styled';

import { NavLink } from './KnowledgePage.styled';

const KnowledgePage = () => {
  return (
    <StyledKnowledgePageContainer>
      <MainSection>
        <div>
          <NavLink to="/knowledge/recipes">Przepisy</NavLink>
        </div>
        <div>
          <NavLink to="/knowledge/articles">Artykuły</NavLink>
        </div>
      </MainSection>
    </StyledKnowledgePageContainer>
  );
};

export default KnowledgePage;
