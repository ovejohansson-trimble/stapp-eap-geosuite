// SgfHeader.tsx
import React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import SearchBar from "./SearchBar";

const SgfHeader: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }} elevation={0}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, maxWidth: "300px" }}>
          <SearchBar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SgfHeader;
