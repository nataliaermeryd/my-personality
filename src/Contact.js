import './App.css';
import ContactForm from './components/ContactForm'
import { DarkMode } from "./DarkMode";

function Contact() {
  return (
    <>
    <DarkMode>
    <ContactForm />
    </DarkMode>
    </>
  );
}

export default Contact;