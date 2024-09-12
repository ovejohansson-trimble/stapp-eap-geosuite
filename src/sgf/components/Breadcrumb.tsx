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
      <Typography color="inherit">Undersökningspunkt</Typography>
      <Typography color="inherit">Metod</Typography>
      <Typography color="inherit">Borrad metod</Typography>
      <Link
        color={selected === "Jb1" ? "textPrimary" : "inherit"}
        onClick={() => onSelect("Jb1")}
        underline="hover"
        sx={{
          cursor: "pointer",
          fontWeight: selected === "Jb1" ? "bold" : "normal",
        }}
      >
        Jord-bergsondering 1
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
        Jord-bergsondering 1 protokollrad
      </Link>
    </Breadcrumbs>
  );
};

export default Breadcrumb;
