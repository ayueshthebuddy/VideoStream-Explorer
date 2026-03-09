import React, { useState } from "react";
import { TextField, Paper } from "@mui/material";

// Ensure you use { onFormSubmit } here to match App.js
const SearchBar = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onFormSubmit(searchTerm);
    }
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
};

export default SearchBar;