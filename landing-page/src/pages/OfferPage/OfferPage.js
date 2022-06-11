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
      <Title fontSize="2">W czym mogę Ci pomóc?</Title>
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
            W&nbsp;zależności od&nbsp;preferencji, wybierz&nbsp;plan współpracy:
            konsultacja w&nbsp;formie wideorozmowy lub&nbsp;wymiana mailowa.
            Obie opcje opierają się na wypełnionej przez Ciebie ankiecie
            dietetycznej, którą wyślę na&nbsp;Twojego maila wraz
            ze&nbsp;wskazówkami po&nbsp;otrzymaniu od Ciebie wiadomości
            i&nbsp;dowodu dokonania wpłaty. Po odesłaniu wypełnionej ankiety
            w&nbsp;zależności od wybranej przez Ciebie opcji w&nbsp;ciągu 3-7
            dni otrzymasz zalecenia/jadłospis i&nbsp;wszelkie wskazówki. Teraz
            czas na Ciebie, działaj!
          </p>
          <ul>
            <li>1. Wybierz formę współpracy</li>
            <li>2. Wypełnij ankietę dietetyczną</li>
            <li>3. Odbierz plan działania</li>
          </ul>
          <p>
            Zalecenia i&nbsp;plan dietetyczny, który&nbsp;ode mnie otrzymasz
            opiera się na realnych celach i&nbsp;produktach,
            które&nbsp;dostaniesz w&nbsp;każdym sklepie. Razem dopasowujemy plan
            dietetyczny do&nbsp;Twoich preferencji, smaków i&nbsp;czasu, który
            możesz poświęcić na przyrządzanie posiłków w&nbsp;kuchni.
          </p>
        </div>
      </InformativeSection>
      <InformativeSection>
        <SubTitle>Dlaczego warto wybrać pakiety współpracy?</SubTitle>
        <div>
          <p>
            Wybierając współpracę minimum na&nbsp;miesiąc, możesz liczyć
            na&nbsp;maksimum wsparcia z&nbsp;mojej strony. Dietoterapia
            z&nbsp;moją pomocą to nie&nbsp;tylko gotowy jadłospis, ale również
            wskazówki, które&nbsp;ułatwią Ci podejmowanie codziennych decyzji
            w&nbsp;walce o zdrowszy organizm i&nbsp;lepsze samopoczucie.
            Na&nbsp;podstawie wywiadu wyszczególniam te&nbsp;zachowania,
            które&nbsp;na&nbsp;pozór mało istotne mogą zrobić dużą różnicę
            w&nbsp;Twoim dotychczasowym samopoczuciu. W&nbsp;ramach wykupionego
            pakietu masz również możliwość stałego kontaktu ze mną w&nbsp;razie
            jakichkolwiek pytań czy wątpliwości. Wybierając długofalową
            współpracę dajesz sobie szansę na wdrożenie nawyków żywieniowych,
            które zostaną z&nbsp;Tobą na&nbsp;dłużej i&nbsp;będą narzędziem,
            dzięki któremu będziesz w&nbsp;stanie rozszyfrować potrzeby swojego
            organizmu.
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
