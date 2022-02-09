import React from "react";
import { ListValues, ListItem, DeleteBtn, Contact } from "./PhoneBook.styled";
const ContactList = ({ contacts, deleteItem }) => (
  <ListValues>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <Contact>{name} </Contact>
        <Contact> {number}</Contact>
        <DeleteBtn onClick={() => deleteItem(id)}>delete</DeleteBtn>
      </ListItem>
    ))}{" "}
  </ListValues>
);

export default ContactList;
