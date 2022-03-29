import {StyledForm, StyledButton, StyledItem, StyledInput, StyledFormContainer, StyledTitle} from "./ContactForm.styled";

const validateMessages = {
  required: '${label} jest wymagany!',
  types: {
    email: '${label} nie jest prawidłowym adresem mailowym!',
  },
};
/* eslint-enable no-template-curly-in-string */

const ContactForm = () => {
  const onFinish = (values) => {
    fetch('https://formsubmit.co/ajax/dosieniecki@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: values.user.email,
        message: values.user.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <StyledFormContainer>
      <StyledTitle>Masz jakieś pytanie?</StyledTitle>
    <StyledForm
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <StyledItem
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            required: true,
            type: 'email',
          },
        ]}
      >
        <StyledInput />
      </StyledItem>
      <StyledItem
        name={['user', 'message']}
        label="Wiadomość:"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <StyledInput.TextArea showCount maxLength={300}/>
      </StyledItem>
      <StyledItem>
        <StyledButton type="primary" htmlType="submit">
          Wyślij
        </StyledButton>
      </StyledItem>
    </StyledForm>
    </StyledFormContainer>
  );
};

export default ContactForm;
