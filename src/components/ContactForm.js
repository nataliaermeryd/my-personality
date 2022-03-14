import React, { useState } from "react";
import './ContactForm.css';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>I'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div>
      <h1>⦒CONTACT ME⦑</h1>
    <form
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Write your message..." name="message" required />
      </div>
      <div>
        <button type="submit"> |SEND| </button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;