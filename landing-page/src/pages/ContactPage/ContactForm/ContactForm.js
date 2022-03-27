
const ContactForm = () => {

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
