import React from "react";
import "../styles/app.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function AddContact() {
  return (
    <div className="AddContact">
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="name"
        required
      />
      <TextField
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
        name="email"
        required
      />
      <TextField
        id="outlined-basic"
        label="Phone No."
        variant="outlined"
        phone="phone"
        required
      />
      <Button
        variant="contained"
        sx={{
          borderRadius: "1rem",
          backgroundColor: "green",
          "&:hover": {
            backgroundColor: "darkgreen",
          },
        }}
      >
        +
      </Button>
    </div>
  );
}

export default AddContact;
