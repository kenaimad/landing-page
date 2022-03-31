import ContactForm from './ContactForm/ContactForm';
import { UniversalComponentContainer } from '../../Global.styled';
import { Wrapper } from './ContactPage.styled';

const ContactPage = () => {
  return (
    <UniversalComponentContainer>
      <Wrapper>
        <ContactForm />
      </Wrapper>
    </UniversalComponentContainer>
  );
};

export default ContactPage;
