import React from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import '../CSS/contact.css'

class FormState {
    constructor(name, email, message, error, mailSent) {
        this.name = name
        this.email = email
        this.message = message
        this.error = error
        this.mailSent = mailSent
    }
}

export default function Contact() {

    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message))
    }, [])


    return (
    <>
    <Header />

    <div className={"contact-form"}>
        <form>
            <legend>E-Mail</legend>
            <input></input>
            <legend>Name</legend>
            <input></input>
            <legend>Message</legend>
            <textarea id="message-input"></textarea>
            <p>{!data ? "Loading..." : data}</p>
        </form>
    </div>

    <Footer />
    </>
    )
}