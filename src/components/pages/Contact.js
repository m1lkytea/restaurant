import {useRef, useState} from 'react'
import "../styling/Contact.css"
import emailjs from "@emailjs/browser";


function Contact() {

  const form = useRef();
   const [showForm, setShowForm] = useState(true);
 
   const handleSubmit = (e) => {
     e.preventDefault();
 
     emailjs
       .sendForm(
         "service ID",
         "template_jg7l49p",
         form.current,
         "private key"
       )
       .then(
         (result) => {
           console.log(result.text);
         },
         (error) => {
           console.log(error.text);
         }
       );
 
     clicked();
   };

  const clicked = () => setShowForm(false);

  return (
    <div className='contact'>
      <div className='contact-form'>
        <h2 >Contact us</h2>
       {showForm ? (
       <form ref={form} onSubmit={handleSubmit}  method='POST' target='_blank' >
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type="text" id="Name" name="name" required/>
          </div>
          <div className='form-group'>
            <label htmlFor='e-mail'>Email</label>
            <input type="text" id="e-mail" name="e-mail" required/>
          </div>
          <div className='form-group'>
            <label htmlFor='messages'>Messages</label>
            <input id="messages" name="messages" required/>
          </div>
          <button type="submit">Submit</button>
        </form>
  ) : (
    <div className="sentForm">Thank you, your message was sent</div>)}
      </div>
    </div>
)

}

export default Contact
