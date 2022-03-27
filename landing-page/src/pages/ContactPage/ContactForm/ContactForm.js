import {
  StyledForm,
  StyledInput,
  StyledButton,
  StyledItem,
} from './ContactForm.styled';

const ContactForm = () => {
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <form action="https://formsubmit.co/dosieniecki@gmail.com" method="POST">
    <div>
      <div>
        <div>
          <input type="text" name="name"  placeholder="Imię" required />
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        
      </div>
    </div>
    <div class="form-group">
      <textarea placeholder="Twoja wiadomość"name="message" rows="10" required></textarea>
    </div>
    <button type="submit">Submit Form</button>
  </form>
  );
};

export default ContactForm;
