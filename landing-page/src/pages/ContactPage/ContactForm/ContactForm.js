import { useState } from 'react';

import {
  StyledForm,
  StyledButton,
  StyledItem,
  StyledInput,
  StyledFormContainer,
  StyledTitle,
} from './ContactForm.styled';

const validateMessages = {
  required: "To pole jest wymagane!",
  types: {
    email: "To nie jest prawidłowy adres mailowy!",
  },
};


const ContactForm = () => {
  const [isMessageSend, setIsMessageSend] = useState(false);

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

    setIsMessageSend(true);
  };

  return (
    !isMessageSend ? (
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
            <StyledInput.TextArea rows={10} showCount maxLength={300} />
          </StyledItem>
          <StyledItem>
            <StyledButton type="primary" htmlType="submit">
              Wyślij
            </StyledButton>
          </StyledItem>
        </StyledForm>
      </StyledFormContainer>
    ) : <StyledTitle>Dziękuję za wysłanie wiadomości, postaram się odpowiedzieć jak najszybciej.</StyledTitle>
  );
};

export default ContactForm;
