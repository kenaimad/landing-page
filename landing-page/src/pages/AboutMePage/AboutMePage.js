import {
  MobileTitle,
  StyledSection,
  Img,
  ImageContainer,
  TextContainer,
  PageWrapper,
  DesktopTitle,
  Paragraph,
  Subtitle,
  Anchor,
} from './AboutMePage.styled';

const AboutMePage = () => {
  return (
    <PageWrapper>
      <MobileTitle fontSize="2.5">Cześć!</MobileTitle>
      <StyledSection>
        <TextContainer>
          <DesktopTitle fontSize="2">Cześć!</DesktopTitle>
          <Paragraph>
            Mam na imię Martyna&nbsp;i&nbsp;jestem licencjonowanym dietetykiem
            klinicznym, aktualnie na&nbsp;ostatniej prostej do uzyskania tytułu
            magistra na Uniwersytecie Medycznym we Wrocławiu. Wyznaję
            holistyczne podejście do zdrowia, aby czuć się dobrze ważne jest
            zarówno dobre samopoczucie psychiczne jak i&nbsp;fizyczne.
            Szczególnie bliskie są mi tematy dotyczące diet roślinnych i
            postępowania dietetycznego w&nbsp;chorobach jelit, alergiach i
            nietolerancjach pokarmowych. Zajmuję się również dietoterapią
            w&nbsp;przypadku otyłości, chorób tarczycy i&nbsp;insulinooporności.
          </Paragraph>
        </TextContainer>
        <ImageContainer>
          <Img src={require('./pictures/1.png')} alt="Zdjęcie z grejpfrutem." />
        </ImageContainer>
      </StyledSection>
      <StyledSection>
        <ImageContainer>
          <Img src={require('./pictures/2.png')} alt="Zdjęcie z papryką." />
        </ImageContainer>
        <TextContainer>
          <Paragraph>
            Wolny czas spędzam na wymyślaniu wege alternatyw dla klasycznych
            posiłków (głównie słodkości!), a&nbsp;te uwielbiam fotografować
            i&nbsp;dzielić się nimi na swoim{' '}
            <Anchor
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/dobrzeje.m/?fbclid=IwAR18n-bY48KQVcn52aWjXrA1qhNYjf_2KBdEBYwL42NVLZVaARNlVwblLjs"
            >
              [instagramie]
            </Anchor>
            . W tygodniu chętnie wybieram się na jogging z&nbsp;moim pieskiem,
            a&nbsp;innym razem praktykuję yogę albo ćwiczę na macie w&nbsp;domu.
            Jestem fleksitarianką; w&nbsp;mojej diecie bazuję głównie
            na&nbsp;pełnym ziarnie, warzywach, owocach i&nbsp;roślinnych
            źródłach białka, jednak czasami wpada również klasyczny burger
            z&nbsp;wołowiną na mieście. Z&nbsp;radością tworzę autorskie
            mieszanki ziołowe, które spożywane w&nbsp;postaci naparów naturalnie
            wspierają funkcjonowanie w&nbsp;zależności od aktualnych potrzeb;
            poprawa trawienia, wyciszenie czy wsparcie odporności.
          </Paragraph>
        </TextContainer>
      </StyledSection>
      <StyledSection>
        <TextContainer>
          <Subtitle fontSize="1.8">
            Dlaczego powinnam zostać Twoim dietetykiem?
          </Subtitle>
          <Paragraph>
            Jestem osobą z&nbsp;odpowiednimi kwalifikacjami oraz doświadczeniem
            klinicznym, dzięki czemu możesz być pewny, że&nbsp;jesteś pod opieką
            specjalisty. Chciałabym podczas naszej współpracy nauczyć Cię
            dokonywać właściwych wyborów żywieniowych i&nbsp;nie tylko. Ważne
            jest nie&nbsp;tylko to co ląduje na Twoim talerzu, ale&nbsp;również
            okoliczności, w&nbsp;których spożywasz posiłki. Wszystkie aspekty
            życia powinny współgrać tak, aby&nbsp;wspierać Twój organizm
            w&nbsp;codziennych działaniach i&nbsp;dać Ci możliwość czerpania
            z&nbsp;życia pełnymi garściami bez natrętnego myślenia o
            przyswojonych kaloriach. Wszystko jest dla ludzi! Dawka czyni
            truciznę ;) W zdrowej diecie jest miejsce na&nbsp;pizzę
            i&nbsp;sałatkę, ważne by sposób żywienia grał z&nbsp;Tobą! To dieta
            ma pasować do Ciebie, nie na odwrót.
          </Paragraph>
          <Paragraph>
            W świecie kipiącym od informacji, diet cud chciałabym Ci pokazać jak
            JEŚĆ DOBRZE i&nbsp;nie zwariować.
          </Paragraph>
        </TextContainer>
        <ImageContainer>
          <Img src={require('./pictures/3.png')} alt="Zdjęcie z kropkami." />
        </ImageContainer>
      </StyledSection>
    </PageWrapper>
  );
};

export default AboutMePage;
