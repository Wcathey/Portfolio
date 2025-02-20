import { useState, useEffect, useRef } from 'react';
import ContactForm from '../ContactForm';
import './Navigation.css';
import OpenModalButton from '../OpenModal';
function Navigation () {

  const [showForm, setShowForm] = useState(false);
  const btnRef = useRef();

  const toggleForm = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };

  useEffect(() => {
    if(!showForm) return;

    const closeForm = (e) => {
      if(btnRef.current && !btnRef.current.contains(e.target)) {
        setShowForm(false);
      }
    };

    document.addEventListener("click", closeForm);

    return () => document.removeEventListener("click", closeForm);
  }, [showForm]);

  const closeForm = () => setShowForm(false);

    return (
        <div className="navbar">
          <h2>W.B.C. Integrations</h2>
          <OpenModalButton
            buttonText="Hire Me"
            onButtonClick={closeForm}
            modalComponent={<ContactForm/>}

          />
        </div>
    )
}

export default Navigation;
