import { Box, Typography } from "@mui/material";

// Define the property type
type Props = {
  properties: { type: string; value: string }[];
};

const ObjectMetadata = ({ properties }: Props) => {
  return (
    <Box>
      <Box display="flex" flexDirection="column">
        {properties.map((property, index) => (
          <Box
            key={index}
            paddingTop={1}
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={0.5}
          >
            <Typography minWidth={"10rem"} maxWidth={"10rem"} fontWeight={500}>
              {property.type}
            </Typography>
            <Typography
              fontSize={index === 0 ? "20px" : "14px"}
              fontWeight={index === 0 ? 500 : 400}
            >
              {property.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ObjectMetadata;
