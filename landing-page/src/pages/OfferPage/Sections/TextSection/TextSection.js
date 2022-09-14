import * as S from './TextSection.styled';

const TextSection = () => {
  return (
    <>
      <S.InformativeSection>
        <S.SubTitle>Z czym to się je?</S.SubTitle>
        <div>
          <p>
            W zależności od preferencji, wybierz plan współpracy: konsultacja w
            formie spotkania online lub wymiana mailowa. Obie opcje opierają się
            na wypełnionej przez Ciebie ankiecie dietetycznej, którą wyślę na
            Twojego maila wraz ze wskazówkami po otrzymaniu od Ciebie wiadomości
            i zaksięgowania wpłaty. Po odesłaniu wypełnionej ankiety w
            zależności od wybranej przez Ciebie opcji w ciągu maksymalnie 7 dni
            roboczych otrzymasz ode mnie dostęp do własnego konta pacjenta
            online, jadłospis/zalecenia i wszelkie wskazówki. Teraz czas na
            Ciebie, działaj!
          </p>
          <S.ImagesContainer>
            <img src={require('./images/1.png')} alt="Step one" />
            <img src={require('./images/2.png')} alt="Step two" />
            <img src={require('./images/3.png')} alt="Step three" />
          </S.ImagesContainer>
          <p style={{ fontSize: '1rem'}}>
            *W treści maila napisz, która forma współpracy Ci odpowiada
            (spotkanie online/konsultacja mailowa) oraz wybrany pakiet usług (np
            pakiet 2 miesięczny).
          </p>
          <p>
            Zalecenia i&nbsp;plan dietetyczny, który&nbsp;ode mnie otrzymasz
            opiera się na realnych celach i&nbsp;produktach,
            które&nbsp;dostaniesz w&nbsp;każdym sklepie. Razem dopasowujemy plan
            dietetyczny do&nbsp;Twoich preferencji, smaków i&nbsp;czasu, który
            możesz poświęcić na przyrządzanie posiłków w&nbsp;kuchni.
          </p>
        </div>
      </S.InformativeSection>
      <S.InformativeSection>
        <S.SubTitle>Dlaczego warto wybrać pakiety współpracy?</S.SubTitle>
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
      </S.InformativeSection>
    </>
  );
};

export default TextSection;
