import ContactList from "./ContactList";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles/app.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [contactList, setContactList] = useState([]);
  const [tempList, setTempList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    const fetchContact = async () => {
      const response = await axios.get(
        "https://contact-api-aqwd.onrender.com/api/v1/contact"
      );
      const data = response.data.data.contact;
      // console.log("response", data);
      setContactList(data);
      setTempList(data);
      // console.log("contactList", contactList);
    };
    try {
      fetchContact();
    } catch (error) {
      console.log("error", error);
    }
  }, []);

  const deleteContact = (id) => {
    const newContactList = contactList.filter((contact) => contact._id !== id);
    setContactList(newContactList);
    setTempList(newContactList);
    try {
      const deleteContact = async () => {
        const response = await axios.delete(
          `https://contact-api-aqwd.onrender.com/api/v1/contact/${id}`
        );
        const data = response;
        console.log("data", data);
      };
      deleteContact();
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmitContact = () => {
    const newContact = { name: name, email: email, phone: phone };
    setContactList([newContact, ...contactList]);
    console.log("first", contactList);
    const addNewContact = async () => {
      const response = await axios.post(
        "https://contact-api-aqwd.onrender.com/api/v1/contact/create",
        newContact
      );
    };
    try {
      addNewContact();
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length === 0) {
      setContactList(tempList);
    } else {
      const filteredContact = contactList.filter((contact) =>
        contact.name.toLowerCase().includes(query)
      );
      setContactList(filteredContact);
    }
  };
  return (
    <div className="App">
      <div className="AddContact">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          id="outlined-basic"
          label="Phone No."
          variant="outlined"
          phone="phone"
          onChange={(e) => setPhone(e.target.value)}
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
          onClick={handleSubmitContact}
        >
          +
        </Button>
      </div>
      <div className="SearchBarContainer">
        <TextField
          id="outlined-basic"
          label="Search..."
          className="SearchBar"
          variant="outlined"
          name="query"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <ContactList contactList={contactList} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
