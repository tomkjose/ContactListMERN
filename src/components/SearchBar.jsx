import React from "react";
import "../styles/app.css";
import TextField from "@mui/material/TextField";
function SearchBar() {
  return (
    <div className="SearchBarContainer">
      <TextField
        id="outlined-basic"
        label="Search..."
        className="SearchBar"
        variant="outlined"
      />
    </div>
  );
}

export default SearchBar;
