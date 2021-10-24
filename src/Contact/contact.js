import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import '../CSS/contact.css'


export default function Contact() {

    React.useState(() => {
        console.log(mailerState)
    }, [mailerState])

    const [mailerState, setMailerState] = React.useState({
        name: "",
        email: "",
        message: "",
      });



      const submitEmail = async (e) => {
        e.preventDefault();
        console.log({ mailerState });
        const response = await fetch("https://project-gabriel-raskov.herokuapp.com/send", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mailerState }),
        })
          .then((res) => res.json())
          .then(async (res) => {
            const resData = await res;
            console.log(resData);
            if (resData.status === "success") {
              alert("Message Sent");
            } else if (resData.status === "fail") {
              alert("Message failed to send");
            }
          })
          .then(() => {
            setMailerState({
              email: "",
              name: "",
              message: "",
            });
          });
      };

      function handleStateChange(e) {
        setMailerState((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
      }

    return (
    <>
    <Header />

    <div className={"contact-form"}>
        <form>
            <legend>E-Mail</legend>
            <input 
            placeholder="Email"
            onChange={handleStateChange}
            name="email"
            value={mailerState.email}></input>

            <legend>Name</legend>
            <input 
            placeholder="Name"
            onChange={handleStateChange}
            name="name"
            value={mailerState.name}></input>

            <legend>Message</legend>
            <textarea 
            placeholder="Message"
            onChange={handleStateChange}
            name="message"
            value={mailerState.message}
            id="message-input"></textarea>

            <button onClick={submitEmail}>Submit</button>
        </form>
    </div>

    <Footer />
    </>
    )
}