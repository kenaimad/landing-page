import {
  MainSection,
  PageWrapper,
} from './KnowledgePage.styled';

import { NavLink } from './KnowledgePage.styled';

const KnowledgePage = () => {
  return (
    <PageWrapper>
      <MainSection>
        <div>
          <NavLink to="/knowledge/recipes">Przepisy</NavLink>
        </div>
        <div>
          <NavLink to="/knowledge/articles">Artykuły</NavLink>
        </div>
      </MainSection>
    </PageWrapper>
  );
};

export default KnowledgePage;
