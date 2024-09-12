// ObjectMetadataWrapper.tsx
import { Box } from "@mui/material";
import ObjectMetadata from "./ObjectMetadata";

// Example properties array
interface Props {
  properties: { type: string; value: string }[];
}
const ObjectMetadataContainer = ({ properties }: Props) => {
  return (
    <Box
      sx={{
        padding: 2,
        border: "1px solid gray",
        borderRadius: "0.8rem",
        backgroundColor: "#f0f4fa",
      }}
    >
      <ObjectMetadata properties={properties} />
    </Box>
  );
};

export default ObjectMetadataContainer;
