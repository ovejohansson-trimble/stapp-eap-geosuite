// SearchBar.tsx
import React, { useState } from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const handleClear = () => {
    setSearchText("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        border: "1px solid lightgray",
        borderRadius: 4,
        backgroundColor: "#f0f4fa",
        padding: "0 8px",
      }}
    >
      <Search sx={{ color: "gray" }} />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="What are you looking for?"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText && (
        <IconButton sx={{ p: 1 }} onClick={handleClear}>
          <Clear sx={{ color: "gray" }} />
        </IconButton>
      )}
    </Box>
  );
};

export default SearchBar;
