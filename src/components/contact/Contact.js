import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <div className="contact">
        <h2>CONTACT</h2>
        <hr
          style={{
            width: "15%",
            position: "relative",
            top: "-25px",
            height: "3px",
            border: "none",
          }}
        />

        <ScrollAnimation animateIn="zoomIn" duration="0.7" animateOnce={true}>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/xgeazpen"
            method="POST"
          >
            <label>Nom et Prénom:</label>
            <input className="name" type="text" name="name" />
            <label>Email:</label>
            <input className="email" type="email" name="email" />
            <label>Sujet:</label>
            <input className="topic" type="text" name="topic" />
            <label>Message:</label>
            <textarea className="message" type="text" name="message" placeholder="ajouter votre message"/>
            {status === "SUCCESS" ? (
              <p>Votre message à été envoyé!</p>
            ) : (
              <button>Envoyer</button>
            )}
            {status === "ERROR" && (
              <p class="error">
                Oups! Votre message n'a pas été envoyé, vous devez remplir tout
                les champs.
                {alert(
                  "Oups! Votre message n'a pas été envoyé, vous devez remplir tout les champs"
                )}
              </p>
            )}
          </form>
        </ScrollAnimation>
      </div>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
