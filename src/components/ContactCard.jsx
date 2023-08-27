import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import "../styles/app.css";

//random color selector
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

//avatar function
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}`,
  };
}
function ContactCard({ contact, deleteContact }) {
  return (
    <div className="ContactCard">
      <Avatar {...stringAvatar(contact.name)} />
      <div>{contact.name}</div>
      <div>{contact.email}</div>
      <div>{contact.phone}</div>
      <Button
        variant="outlined"
        sx={{
          color: "red",
          borderColor: "red",
          "&:hover": {
            backgroundColor: "red",
            color: "white",
            borderColor: "white",
          },
        }}
        onClick={() => deleteContact(contact._id)}
      >
        Delete
      </Button>
    </div>
  );
}

export default ContactCard;
