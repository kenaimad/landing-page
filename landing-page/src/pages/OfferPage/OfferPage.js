import {
  StyledContainer,
  ImagesSection,
  StyledImage,
  StyledTitle,
  InformativeSection,
  ImageSection,
  FrontTileImg,
  BackTileImg,
  StyledHeader,
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
        <StyledHeader>Z czym to się je?</StyledHeader>
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
          </p>
          <ul>
            <li>1. Wybierz formę współpracy</li>
            <li>2. Wypełnij ankietę dietetyczną</li>
            <li>3. Odbierz plan działania</li>
          </ul>
          <p>
            Opcja konsultacji obejmuje całodobową opiekę z mojej strony; w razie
            jakichkolwiek wątpliwości jestem dla Ciebie.
          </p>
        </div>
      </InformativeSection>
      <InformativeSection>
        <StyledHeader>Dlaczego warto wybrać pakiety współpracy?</StyledHeader>
        <div>
          <p>
            Wybierając współpracę minimum na miesiąc, możesz liczyć na maksimum
            wsparcia z mojej strony. Dietoterapia z moją pomocą to nie tylko
            gotowy jadłospis, ale również wskazówki, które ułatwią Ci
            podejmowanie codziennych decyzji w walce o zdrowszy organizm i
            lepsze samopoczucie. Na podstawie wywiadu wyszczególniam te
            zachowania, które na pozór mało istotne mogą zrobić dużą różnicę w
            Twoim dotychczasowym samopoczuciu. W ramach wykupionego pakietu masz
            również możliwość stałego kontaktu ze mną w razie jakichkolwiek
            pytań czy wątpliwości. Wybierając długofalową współpracę dajesz
            sobie szansę na wdrożenie nawyków żywieniowych, które zostaną z Tobą
            na dłużej i będą narzędziem, dzięki któremu będziesz w stanie
            rozszyfrować potrzeby swojego organizmu.
          </p>
        </div>
      </InformativeSection>
      <ImageSection>
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
      </ImageSection>
      <ImageSection>
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
      </ImageSection>
      <ImageSection>
        <div>
          <FrontTileImg
            src={require('./images/monthly/1-1.png')}
            alt="Jadłospis na dwa tygodnie"
          />
          <BackTileImg
            src={require('./images/monthly/1-2.png')}
            alt="Jadłospis na dwa tygodnie"
          />
        </div>
        <div>
          <FrontTileImg
            src={require('./images/monthly/2-1.png')}
            alt="Jadłospis na dwa tygodnie"
          />
          <BackTileImg
            src={require('./images/monthly/2-2.png')}
            alt="Jadłospis na dwa tygodnie"
          />
        </div>
      </ImageSection>
    </StyledContainer>
  );
};

export default OfferPage;
