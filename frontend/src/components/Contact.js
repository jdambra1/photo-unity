const Contact = () => {
  return (
    <div>
      <h1>Contact us</h1>
      <form>
        <placeholder>Name </placeholder>
        <input name="name" type="text"></input>
        <placeholder>Email </placeholder>
        <input name="email" type="email"></input>
        <placeholder>Message</placeholder>
        <textarea></textarea>
      </form>
    </div>
  );
};

export default Contact;
