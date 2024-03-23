import React, { Component } from "react";
import "./ContactForm.css"; // Подключаем файл со стилями

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (event) => {
    const { handleSubmit } = this.props;
    event.preventDefault();
    handleSubmit(this.state);
    this.setState({ name: "", number: "" }); // Сбрасываем значения полей после отправки формы
  };

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <ul>
          <li>
            <p className="label">Name</p>
            <input
              className="input"
              onChange={(event) => this.handleChange(event, "name")}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </li>
          <li>
            <p className="label">Number</p>
            <input
              className="input"
              onChange={(event) => this.handleChange(event, "number")}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </li>
          <li>
            <button className="add">Add contact</button>
          </li>
        </ul>
      </form>
    );
  }
}
