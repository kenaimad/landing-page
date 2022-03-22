import {
  StyledContainer,
  ImagesSection,
  StyledImage,
  StyledTitle,
  InformativeSection,
  ConsultationSection,
  FrontTileImg,
  BackTileImg,
} from './OfferPage.styled';

const OfferPage = () => {
  return (
    <StyledContainer>
      <StyledTitle>W czym moge Ci pomóc?</StyledTitle>
      <ImagesSection>
        <StyledImage
          src={require('./images/diseases/1.png')}
          alt="Skuteczne odchudzanie."
        />
        <StyledImage
          src={require('./images/diseases/2.png')}
          alt="Diety roślinne."
        />
        <StyledImage
          src={require('./images/diseases/3.png')}
          alt="Choroby jelit."
        />
        <StyledImage
          src={require('./images/diseases/4.png')}
          alt="Insulinooporność."
        />
        <StyledImage
          src={require('./images/diseases/5.png')}
          alt="Zmiana nawyków."
        />
      </ImagesSection>
      <InformativeSection>
        <h2>Z czym to się je?</h2>
        <div>
          <p>
            W zależności od preferencji, wybierz plan współpracy: konsultacja w
            formie wideorozmowy lub wymiana mailowa. Obie opcje opierają się na
            wypełnionej przez Ciebie ankiecie dietetycznej, którą wyślę na
            Twojego maila wraz ze wskazówkami po otrzymaniu od Ciebie wiadomości
            i dowodu dokonania wpłaty. Po odesłaniu wypełnionej ankiety w
            zależności od wybranej przez Ciebie opcji w ciągu 3-7 dni otrzymasz
            zalecenia/jadłospis i wszelkie wskazówki. Teraz czas na Ciebie,
            działaj!
            <ul>
              <li>1. Wybierz formę współpracy</li>
              <li>2. Wypełnij ankietę dietetyczną</li>
              <li>3. Odbierz plan działania</li>
            </ul>
            Opcja konsultacji obejmuje całodobową opiekę z mojej strony; w razie
            jakichkolwiek wątpliwości jestem dla Ciebie.
          </p>
        </div>
      </InformativeSection>
      <ConsultationSection>
        <div>
          <FrontTileImg
            src={require('./images/offerImages/1st1.png')}
            alt="Pierwsza konsultacja"
          />
          <BackTileImg
            src={require('./images/offerImages/1st2.png')}
            alt="Pierwsza konsultacja"
          />
        </div>
        <div>
          <FrontTileImg
            src={require('./images/offerImages/2nd1.png')}
            alt="Konsultacja kontrolna"
          />
          <BackTileImg
            src={require('./images/offerImages/2nd2.png')}
            alt="Konsultacja kontrolna"
          />
        </div>
      </ConsultationSection>
      <ConsultationSection>
        <div>
          <FrontTileImg
            src={require('./images/offerImages/3rd1.png')}
            alt="Jadłospis na tydzień"
          />
          <BackTileImg
            src={require('./images/offerImages/3rd2.png')}
            alt="Jadłospis na tydzień"
          />
        </div>
        <div>
          <FrontTileImg
            src={require('./images/offerImages/4th1.png')}
            alt="Jadłospis na dwa tygodnie"
          />
          <BackTileImg
            src={require('./images/offerImages/4th2.png')}
            alt="Jadłospis na dwa tygodnie"
          />
        </div>
      </ConsultationSection>
    </StyledContainer>
  );
};

export default OfferPage;
