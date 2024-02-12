import { Component } from "react";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  handleCgange = (event, name) => {
    this.setState((state) => {
      return { [name]: event.target.value };
    });
  };

  handleSub = (event) => {
    const { handleSubmit } = this.props;
    event.preventDefault();
    handleSubmit(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSub}>
        <ul>
          <li>
            <p>Name</p>
            <input
              onChange={() => this.handleCgange(event, "name")}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </li>
          <li>
            <p>Number</p>
            <input
              onChange={() => this.handleCgange(event, "number")}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </li>
          <li>
            {" "}
            <button className="add">Add contact</button>
          </li>
        </ul>
      </form>
    );
  }
}
