import React, { Component } from "react";
import shortid from "shortid";
import Notiflix from "notiflix";
import ContactForm from "./components/PhoneBook/Form";
import ContactList from "./components/PhoneBook/ContactList";
import Filter from "./components/PhoneBook/Filter";

import { TopTitle } from "./components/PhoneBook/PhoneBook.styled.js";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  formSubmitHendler = (data) => {
    const findContact = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (!findContact) {
      const newContacts = {
        id: shortid.generate(),
        name: data.name,
        number: data.number,
      };
      this.setState((prevState) => ({
        contacts: [newContacts, ...prevState.contacts],
      }));
    } else {
      Notiflix.Report.warning(data.name, "is already in contact", "ok");
    }
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getContacts();

    return (
      <>
        <TopTitle>Phonebook</TopTitle>
        <ContactForm onSubmit={this.formSubmitHendler} />
        <TopTitle>Contacts</TopTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteItem={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
