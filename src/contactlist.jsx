import React from "react";
import CardContact from"./contactcard";
const ContactList = (props) => {
  console.log(props);
  const renderContactList = props.contacts.map((contact) => {
    return (
      <CardContact contact={contact}></CardContact>
    );
  });
  return <div className="ui called list">{renderContactList}</div>;
};
export default ContactList;                

