import React from "react";
import ContactCard from "../components/ContactCard";
import Pagination from "@mui/material/Pagination";
import "../styles/app.css";
function ContactList({ contactList, deleteContact }) {
  return (
    <div className="ContactList">
      {contactList.map((contact) => {
        return (
          <div style={{ width: "100%" }} key={contact._id}>
            <ContactCard contact={contact} deleteContact={deleteContact} />
          </div>
        );
      })}
      <Pagination count={10} color="secondary" className="Pagination" />
    </div>
  );
}

export default ContactList;
