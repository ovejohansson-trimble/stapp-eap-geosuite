import React from "react";
import { Breadcrumbs, Typography, Link } from "@mui/material";
import { NavigateNext as NavigateNextIcon } from "@mui/icons-material";

const Breadcrumb: React.FC<{
  selected: string;
  onSelect: (item: string) => void;
}> = ({ selected, onSelect }) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Typography color="inherit">Investigation point</Typography>
      <Typography color="inherit">Investigation</Typography>
      <Typography color="inherit">Field drilling</Typography>
      <Link
        color={selected === "Jb1" ? "textPrimary" : "inherit"}
        onClick={() => onSelect("Jb1")}
        underline="hover"
        sx={{ cursor: "pointer" }}
      >
        Jb1
      </Link>
      <Link
        color={selected === "Jb1 protokollrad" ? "textPrimary" : "inherit"}
        onClick={() => onSelect("Jb1 protokollrad")}
        underline="hover"
        sx={{
          cursor: "pointer",
          fontWeight: selected === "Jb1 protokollrad" ? "bold" : "normal",
        }}
      >
        Jb1 protokollrad
      </Link>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
