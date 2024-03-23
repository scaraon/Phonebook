import React, { Component } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./App.css"; // Подключаем файл со стилями

export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleSubmit = ({ name, number }) => {
    event.preventDefault();
    const { contacts } = this.state;
    const one = {
      name: name,
      id: shortid.generate(),
      number: number,
    };

    const isExist = contacts.find(
      (contact) =>
        contact.name.toUpperCase() === one.name.toUpperCase() &&
        contact.number === one.number
    );

    if (isExist) {
      alert(`This contact ${one.name.toUpperCase()} already exists`);
    } else {
      this.setState((state) => {
        return { contacts: [...state.contacts, one] };
      });
    }
  };

  handleDelete = (id) => {
    const filtered = this.state.contacts.filter((c) => c.id !== id);
    this.setState({ contacts: filtered });
  };

  render() {
    const { contacts, filter } = this.state;
    const filtered = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className="app-container">
        <h1 className="app-title">Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className="contacts-title">Contacts</h2>
        <p className="filter-text">Find contacts by name</p>
        <Filter handleFilter={this.handleFilter} />
        <ContactList filtered={filtered} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
