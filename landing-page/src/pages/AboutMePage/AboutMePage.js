import {
  StyledContainer,
  StyledSection,
  StyledImg,
  ImageContainer,
  TextContainer,
} from './AboutMePage.styled';

const AboutMePage = () => {
  return (
    <StyledContainer>
      <StyledSection>
        <TextContainer>
          <p>
            <h1>Cześć!</h1>
            Mam na imię Martyna i jestem licencjonowanym dietetykiem klinicznym,
            aktualnie na ostatniej prostej do uzyskania tytułu magistra na
            Uniwersytecie Medycznym we Wrocławiu. Wyznaję holistyczne podejście
            do zdrowia, aby czuć się dobrze ważne jest zarówno dobre
            samopoczucie psychiczne jak i fizyczne. Szczególnie bliskie są mi
            tematy dotyczące diet roślinnych i postępowania dietetycznego w
            chorobach jelit, alergiach i nietolerancjach pokarmowych. Zajmuję
            się również dietoterapią w przypadku otyłości, chorób tarczycy i
            insulinooporności.
          </p>
        </TextContainer>
        <ImageContainer>
          <StyledImg
            src={require('./pictures/1cytryna.png')}
            alt="Zdjęcie z grejpfrutem."
          />
        </ImageContainer>
      </StyledSection>
      <StyledSection>
        <ImageContainer>
          <StyledImg
            src={require('./pictures/papryka.png')}
            alt="Zdjęcie z grejpfrutem."
          />
        </ImageContainer>
        <TextContainer>
          <p>
            Wolny czas spędzam na wymyślaniu wege alternatyw dla klasycznych
            posiłków (głównie słodkości!), a te uwielbiam fotografować i dzielić
            się nimi na swoim [instagramie]. W tygodniu chętnie wybieram się na
            jogging z moim pieskiem, a innym razem praktykuję yogę albo ćwiczę
            na macie w domu. Jestem fleksitarianką; w mojej diecie bazuję
            głównie na pełnym ziarnie, warzywach, owocach i roślinnych źródłach
            białka, jednak czasami wpada również klasyczny burger z wołowiną na
            mieście. Z radością tworzę autorskie mieszanki ziołowe, które
            spożywane w postaci naparów naturalnie wspierają funkcjonowanie w
            zależności od aktualnych potrzeb; poprawa trawienia, wyciszenie czy
            wsparcie odporności.
          </p>
          <p>
            W świecie kipiącym od informacji, diet cud chciałabym Ci pokazać jak
            JEŚĆ DOBRZE i nie zwariować.
          </p>
        </TextContainer>
      </StyledSection>
      <StyledSection>
        <TextContainer>
          <p>
            <h1>Dlaczego powinnam zostać Twoim dietetykiem?</h1>
            Jestem osobą z odpowiednimi kwalifikacjami oraz doświadczeniem
            klinicznym, dzięki czemu możesz być pewny, że jesteś pod opieką
            specjalisty. Chciałabym podczas naszej współpracy nauczyć Cię
            dokonywać właściwych wyborów żywieniowych i nie tylko. Ważne jest
            nie tylko to co ląduje na Twoim talerzu, ale również okoliczności, w
            których spożywasz posiłki. Wszystkie aspekty życia powinny współgrać
            tak, aby wspierać Twój organizm w codziennych działaniach i dać Ci
            możliwość czerpania z życia pełnymi garściami bez natrętnego
            myślenia o przyswojonych kaloriach. Wszystko jest dla ludzi! Dawka
            czyni truciznę ;) W zdrowej diecie jest miejsce na pizzę i sałatkę,
            ważne by sposób żywienia grał z Tobą! To dieta ma pasować do Ciebie,
            nie na odwrót.
          </p>
        </TextContainer>
        <ImageContainer>
          <StyledImg
            src={require('./pictures/kropki.png')}
            alt="Zdjęcie z grejpfrutem."
          />
        </ImageContainer>
      </StyledSection>
    </StyledContainer>
  );
};

export default AboutMePage;
