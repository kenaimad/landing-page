import ContactForm from './ContactForm/ContactForm';
import { PageWrapper, Wrapper } from './ContactPage.styled';

const ContactPage = () => {
  return (
    <PageWrapper>
      <Wrapper>
        <ContactForm />
      </Wrapper>
    </PageWrapper>
  );
};

export default ContactPage;
