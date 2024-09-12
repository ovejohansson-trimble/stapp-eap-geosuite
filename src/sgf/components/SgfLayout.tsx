import { Box } from "@mui/material";
import SgfMain from "./SgfMain";
import SgfSidebar from "./SgfSidebar";
import SgfHeader from "./SgfHeader";

const SgfLayout = () => {
  return (
    <Box display="flex" height="100vh" maxWidth={"1200px"} marginX="auto">
      <SgfSidebar />
      <Box display="flex" flexDirection="column" flex="1" paddingX={1}>
        <SgfHeader />
        <Box>
          <SgfMain />
        </Box>
      </Box>
    </Box>
  );
};

export default SgfLayout;
