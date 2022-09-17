import { MobileTitle, PageWrapper } from './AboutMePage.styled';

import PageSection from './components/PageSection/PageSection';

const AboutMePage = () => {
  let pageContent = [
    {
      title: 'Cześć!',
      text: 'Mam na imię Martyna i\xa0jestem dyplomowanym dietetykiem klinicznym. Tytuł magistra uzyskałam na Uniwersytecie Medycznym we\xa0Wrocławiu. Wyznaję holistyczne podejście do\xa0zdrowia, aby czuć się dobrze ważne jest zarówno dobre samopoczucie psychiczne jak i\xa0fizyczne. Szczególnie bliskie są mi tematy dotyczące diet roślinnych i\xa0postępowania dietetycznego w\xa0chorobach jelit, alergiach i\xa0nietolerancjach pokarmowych. Zajmuję się również dietoterapią w\xa0przypadku otyłości, chorób tarczycy i\xa0insulinooporności.',
      img: require('./pictures/1.png'),
    },
    {
      text: 'Wolny czas spędzam na\xa0wymyślaniu wege alternatyw dla klasycznych posiłków (głównie słodkości!), a\xa0te uwielbiam fotografować i\xa0dzielić się nimi na\xa0swoim instagramie. W\xa0tygodniu chętnie wybieram się na jogging z\xa0moim pieskiem, a\xa0innym razem praktykuję yogę albo ćwiczę na\xa0macie w domu. Jestem fleksitarianką; w\xa0mojej diecie bazuję głównie na pełnym ziarnie, warzywach, owocach i\xa0roślinnych źródłach białka, jednak czasami wpada również klasyczny burger z\xa0wołowiną na mieście. Z\xa0radością tworzę autorskie mieszanki ziołowe, które spożywane w\xa0postaci naparów naturalnie wspierają funkcjonowanie w\xa0zależności od\xa0aktualnych potrzeb; poprawa trawienia, wyciszenie czy\xa0wsparcie odporności.',
      img: require('./pictures/2.png'),
    },
    {
      title: 'Dlaczego powinnam zostać Twoim dietetykiem?',
      text: 'Jestem osobą z\xa0odpowiednimi kwalifikacjami oraz doświadczeniem klinicznym, dzięki czemu możesz być pewny, że\xa0jesteś pod opieką specjalisty. Chciałabym podczas naszej współpracy nauczyć Cię dokonywać właściwych wyborów żywieniowych i\xa0nie tylko. Ważne jest nie tylko to co ląduje na\xa0Twoim talerzu, ale również okoliczności, w\xa0których spożywasz posiłki. Wszystkie aspekty życia powinny współgrać tak, aby wspierać Twój organizm w\xa0codziennych działaniach i\xa0dać Ci możliwość czerpania z\xa0życia pełnymi garściami bez natrętnego myślenia o\xa0przyswojonych kaloriach. Wszystko jest dla ludzi! Dawka czyni truciznę ;) W zdrowej diecie jest miejsce na\xa0pizzę i\xa0sałatkę, ważne by\xa0sposób żywienia grał z\xa0Tobą! To dieta ma pasować do Ciebie, nie na\xa0odwrót.',
      endingText:
        'W świecie kipiącym od informacji, diet cud chciałabym Ci pokazać jak JEŚĆ DOBRZE i nie zwariować.',
      img: require('./pictures/3.png'),
    },
  ];

  return (
    <PageWrapper>
      <MobileTitle>Cześć!</MobileTitle>
      {pageContent.map((paragraph) => {
        return (
          <PageSection
            key={paragraph.text}
            title={paragraph.title}
            text={paragraph.text}
            img={paragraph.img}
            endingText={paragraph.endingText}
          />
        );
      })}
    </PageWrapper>
  );
};

export default AboutMePage;
