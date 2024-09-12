import { Box, Typography } from "@mui/material";
import ObjectPropertiesTable from "./ObjectPropertiesTable";
import TableDataType from "../entities/TableDataType";

interface Props {
  data: TableDataType[];
}
const ObjectPropertiesContainer = ({ data }: Props) => {
  return (
    <Box>
      <Typography variant="h6" ml={0.5}>
        Egenskaper ({data.length})
      </Typography>
      <ObjectPropertiesTable data={data} />
    </Box>
  );
};

export default ObjectPropertiesContainer;
