import React from "react";
import { ListItem, DeleteBtn, Contact } from "./PhoneBook.styled";

const ContactItem = ({ contact, deleteItem }) => (
  <ListItem key={contact.id}>
    <Contact>{contact.name} </Contact>
    <Contact> {contact.number}</Contact>
    <DeleteBtn onClick={() => deleteItem(contact.id)}>delete</DeleteBtn>
  </ListItem>
);

export default ContactItem;
