import React, { Component } from "react";
import shortid from "shortid";
// import Notiflix from 'notiflix';
import {
  FormContainer,
  LabelName,
  InputName,
  LabelContact,
  InputContact,
  AddContact,
  PhoneBookContainer,
} from "./PhoneBook.styled";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <PhoneBookContainer>
        <FormContainer onSubmit={this.handleSubmit}>
          <LabelName htmlFor={this.nameInputId}> name</LabelName>
          <InputName
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
          />

          <LabelContact htmlFor={this.numberInputId}>Number</LabelContact>
          <InputContact
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
          />
          <AddContact type="submit">Add Contact</AddContact>
        </FormContainer>
      </PhoneBookContainer>
    );
  }
}
export default ContactForm;
