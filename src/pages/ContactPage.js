import React, { Component } from "react";
import "../styles/contactpage.css";

class ContactPage extends Component {
  state = {
    problemText: "",
    typeOfProblem: "Porada",
    showAlert: false,
    contactEmail: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    const { problemText, contactEmail } = this.state;

    if (problemText.length > 1 && contactEmail.length > 1) {
      this.setState({
        problemText: "",
        typeOfProblem: "Porada",
        showAlert: true,
        contactEmail: ""
      });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      showAlert: false
    });
  };

  render() {
    const message = (
      <div className="alert alert-primary">
        <strong>Odebrano zgłoszenie!</strong> Nasi eksperci skontaktują się z
        Tobą najszybciej jak to możliwe
      </div>
    );

    return (
      <div className="contact">
        <div>
          <span>
            <i className="fas fa-phone-square fa-3x" />
            <br /> 512 067 291 <br /> 665 442 704
          </span>
          <hr />
        </div>
        <div>
          <span>
            <i className="fas fa-at fa-3x" />
            <br /> Biuro@MusclePower.pl
            <br /> Daniel@MusclePower.pl
            <br /> Karol@MusclePower.pl
          </span>
          <hr />
          <div>
            <span>Jak możemy pomóc? </span>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label> Powód kontaktu: </label>
                <select
                  className="form-control"
                  onChange={this.handleChange}
                  name="typeOfProblem"
                  defaultValue="Porada"
                >
                  <option value="Porada"> Porada</option>
                  <option value="Dostawa"> Dostawa</option>
                  <option value="Płatność"> Płatność</option>
                  <option value="Reklamacja"> Reklamacja i zwroty</option>
                </select>
              </div>
              <div className="form-group">
                <label>Podaj e-mail: </label>
                <input
                  type="email"
                  className="form-control"
                  value={this.state.contactEmail}
                  onChange={this.handleChange}
                  name="contactEmail"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="Opisz swój problem"
                  value={this.state.problemText}
                  onChange={this.handleChange}
                  name="problemText"
                />
              </div>
              <button className="btn btn-md btn-info">Wyślij</button>
            </form>
            <div className="message">
              {this.state.showAlert ? <div> {message} </div> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactPage;
