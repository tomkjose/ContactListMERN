import React, { useState } from "react";
import ContactCard from "../components/ContactCard";
import Pagination from "@mui/material/Pagination";
import "../styles/app.css";
function ContactList({ contactList, deleteContact }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentContacts = contactList.slice(firstIndex, lastIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <div className="ContactList">
      {currentContacts.map((contact) => {
        console.log("currentContacts", currentContacts);
        return (
          <div style={{ width: "100%" }} key={contact._id}>
            <ContactCard contact={contact} deleteContact={deleteContact} />
          </div>
        );
      })}
      <Pagination
        count={Math.ceil(contactList.length / itemsPerPage)}
        color="secondary"
        className="Pagination"
        onChange={handlePageChange}
      />
    </div>
  );
}

export default ContactList;
