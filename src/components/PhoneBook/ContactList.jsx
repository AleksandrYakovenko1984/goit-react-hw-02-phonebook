import React from "react";
import ContactItem from "./ContactItem";
import { ListValues } from "./PhoneBook.styled";

const ContactList = ({ contacts, deleteItem }) => (
  <ListValues>
    {contacts.map((contact) => (
      <ContactItem contact={contact} deleteItem={deleteItem} />
      // <ListItem key={id}>
      //   <Contact>{name} </Contact>
      //   <Contact> {number}</Contact>
      //   <DeleteBtn onClick={() => deleteItem(id)}>delete</DeleteBtn>
      // </ListItem>
    ))}{" "}
  </ListValues>
);

export default ContactList;
