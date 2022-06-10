import {
  PageWrapper,
  ImagesSection,
  StyledImage,
  Title,
  InformativeSection,
  ImageSection,
  FrontTileImg,
  BackTileImg,
  SubTitle,
  TileContainer,
} from './OfferPage.styled';

const OfferPage = () => {
  return (
    <PageWrapper>
      <Title fontSize= "2">W czym mogę Ci pomóc?</Title>
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
        <SubTitle>Z czym to się je?</SubTitle>
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
            Zalecenia i plan dietetyczny, który ode mnie otrzymasz opiera się na
            realnych celach i produktach, które dostaniesz w każdym sklepie.
            Razem dopasowujemy plan dietetyczny do Twoich preferencji, smaków i
            czasu, który możesz poświęcić na przyrządzanie posiłków w kuchni.
          </p>
        </div>
      </InformativeSection>
      <InformativeSection>
        <SubTitle>Dlaczego warto wybrać pakiety współpracy?</SubTitle>
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
        <TileContainer>
          <FrontTileImg
            src={require('./images/offerImages/1st1.png')}
            alt="Pierwsza konsultacja"
          />
          <BackTileImg
            src={require('./images/offerImages/1st2.png')}
            alt="Pierwsza konsultacja"
          />
        </TileContainer>
        <TileContainer>
          <FrontTileImg
            src={require('./images/offerImages/2nd1.png')}
            alt="Konsultacja kontrolna"
          />
          <BackTileImg
            src={require('./images/offerImages/2nd2.png')}
            alt="Konsultacja kontrolna"
          />
        </TileContainer>
      </ImageSection>
      <ImageSection>
        <TileContainer>
          <FrontTileImg
            src={require('./images/offerImages/3rd1.png')}
            alt="Jadłospis na tydzień"
          />
          <BackTileImg
            src={require('./images/offerImages/3rd2.png')}
            alt="Jadłospis na tydzień"
          />
        </TileContainer>
        <TileContainer>
          <FrontTileImg
            src={require('./images/offerImages/4th1.png')}
            alt="Jadłospis na dwa tygodnie"
          />
          <BackTileImg
            src={require('./images/offerImages/4th2.png')}
            alt="Jadłospis na dwa tygodnie"
          />
        </TileContainer>
      </ImageSection>
      <ImageSection>
        <TileContainer>
          <FrontTileImg
            src={require('./images/monthly/1-1.png')}
            alt="Jadłospis na dwa tygodnie"
          />
          <BackTileImg
            src={require('./images/monthly/1-2.png')}
            alt="Jadłospis na dwa tygodnie"
          />
        </TileContainer>
        <TileContainer>
          <FrontTileImg
            src={require('./images/monthly/2-1.png')}
            alt="Jadłospis na dwa tygodnie"
          />
          <BackTileImg
            src={require('./images/monthly/2-2.png')}
            alt="Jadłospis na dwa tygodnie"
          />
        </TileContainer>
      </ImageSection>
      <ImageSection>
        <TileContainer>
          <FrontTileImg
            src={require('./images/offerImages/5th1.png')}
            alt="Pierwsza konsultacja"
          />
          <BackTileImg
            src={require('./images/offerImages/5th2.png')}
            alt="Pierwsza konsultacja"
          />
        </TileContainer>
        <TileContainer>
          <FrontTileImg
            src={require('./images/offerImages/6th1.png')}
            alt="Konsultacja kontrolna"
          />
          <BackTileImg
            src={require('./images/offerImages/6th2.png')}
            alt="Konsultacja kontrolna"
          />
        </TileContainer>
      </ImageSection>
    </PageWrapper>
  );
};

export default OfferPage;
