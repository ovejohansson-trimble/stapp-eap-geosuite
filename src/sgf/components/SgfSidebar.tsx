import { Box, Divider, Typography } from "@mui/material";

const drawerWidth = "16rem";

const SgfSidebar = () => {
  return (
    <Box width={drawerWidth}>
      <Box paddingX={2}>
        <Box
          sx={{
            overflow: "auto",
            marginTop: 12,
            border: "1px solid gray",
            borderRadius: "0.8rem",
            backgroundColor: "#f0f4fa",
            minHeight: "200px",
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" fontSize="16px" gutterBottom>
              SGF data dictionary
            </Typography>
            <Divider sx={{ marginY: 1 }} />
            <Box>
              <Typography fontWeight={500} fontSize="12px" gutterBottom>
                Version 3:2012{" "}
              </Typography>
              <Typography fontSize="10px">December 2012</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SgfSidebar;
