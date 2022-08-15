import { PageWrapper, Title } from './OfferPage.styled';

import ImagesSection from './Sections/ImagesSection/ImagesSection';
import TextSection from './Sections/TextSection/TextSection';
import TilesSection from './Sections/TilesSection/TilesSection';

const OfferPage = () => {
  return (
    <PageWrapper>
      <Title>W czym mogę Ci pomóc?</Title>
      <ImagesSection />
      <TextSection />
      <TilesSection />
    </PageWrapper>
  );
};

export default OfferPage;
