import { useState } from 'react';
import ContactForm from '../ContactForm';
import './Navigation.css';
function Navigation () {

  const [showForm, setShowForm] = useState(false);

  const toggleForm = (e) => {
    e.preventDefault();
    setShowForm(true);
  }
    return (
        <div className="navbar">
          <h2>W.B.C. Integrations</h2>

        <button className="hire-btn" onClick={toggleForm}>Hire Me</button>
        {showForm &&
        <div id="contact-form-container">
          <ContactForm />
        </div>
}
        </div>
    )
}

export default Navigation;
