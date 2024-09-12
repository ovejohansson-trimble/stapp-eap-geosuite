import { Box } from "@mui/material";
import Breadcrumb from "./Breadcrumb";
import ObjectMetadataContainer from "./ObjectMetadataContainer";
import ObjectPropertiesContainer from "./ObjectPropertiesContainer";
import { useState } from "react";
import TableDataType from "../entities/TableDataType";
//nested data is ok, see accessorKeys in ColumnDef below
const dataJb1ProtocolRow: TableDataType[] = [
  {
    code: "Depth",
    parameter: "Djup",
    unit: "m",
    definition:
      "Djupet är mätt ifrån markytan och används som synkroniseringsparameter.",
    dataType: "sträng",
  },
  {
    code: "PenetrationTimeSecPer20cm",
    parameter: "Matningstid eller sjunktid",
    unit: "s/0,2 m",
    definition: "Matningstiden mäts i sekunder per 20:e centimeter",
    dataType: "sträng",
  },
  {
    code: "Remarks",
    parameter: "Kommentarer",
    unit: "",
    definition: "",
    dataType: "sträng",
  },
  {
    code: "FlushingMediaFlow",
    parameter: "Spolflöde ut",
    unit: "l/min",
    definition: "",
    dataType: "sträng",
  },
  {
    code: "Turning",
    parameter: "Vridmoment",
    unit: "kNm",
    definition: "",
    dataType: "sträng",
  },
  {
    code: "FlushingMediaPressure",
    parameter: "Spolmedia, tryck",
    unit: "MPa",
    definition: "",
    dataType: "sträng",
  },
  {
    code: "PressureOnTurningEngine",
    parameter: "Tryck på vrid motor",
    unit: "MPa",
    definition: "",
    dataType: "sträng",
  },
  {
    code: "IsFlushing",
    parameter: "Spolning av/på",
    unit: "",
    definition: "",
    dataType: "sträng",
  },
  {
    code: "FreeWaterSurface",
    parameter: "Fri vattenyta i bh",
    unit: "m u my",
    definition: "",
    dataType: "sträng",
  },
];

//nested data is ok, see accessorKeys in ColumnDef below
const dataJb1: TableDataType[] = [
  {
    code: "CrownDiameter",
    parameter: "Diameter Borrkrona",
    unit: "mm",
    definition: "Måttet av en borrkronas diameter",
    dataType: "sträng",
  },
  {
    code: "CrownType",
    parameter: "Typ av borrkrona",
    unit: "",
    definition: "Typ av borrkrona ",
    dataType: "enum",
  },
  {
    code: "Rods",
    parameter: "Stänger",
    unit: "",
    definition: "Vilken typ av stänger som använts",
    dataType: "sträng",
  },
  {
    code: "FlushingMedia",
    parameter: "Spolmedia",
    unit: "",
    definition: "Vilken typ av spolmedia som använts",
    dataType: "enum",
  },
  {
    code: "Hammer",
    parameter: "Hammare",
    unit: "",
    definition: "Vilken typ av hammare som använts",
    dataType: "sträng",
  },
];

const propertiesJb1 = [
  { type: "Namn", value: "Jord-bergsondering 1 " },
  { type: "Förkortning", value: "Jb1" },
  { type: "Metodkod", value: "12" },
  {
    type: "Beskrivning",
    value: "Denna sondering utförs för att bestämma djup till berg",
  },
  {
    type: "Referensdokument",
    value: "SGF rapport 4:2012 Metodbeskrivning för jordbersondering",
  },
];

const propertiesJb1ProtocolRow = [
  { type: "Namn", value: "Jord-bergsondering 1 protokollrad" },
  {
    type: "Referensdokument",
    value: "SGF rapport 4:2012 Metodbeskrivning för jordbergsondering",
  },
];

const SgfMain = () => {
  const [selectedBreadcrumb, setSelectedBreadcrumb] = useState<string>("Jb1");

  const isJb1Selected = selectedBreadcrumb === "Jb1";

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
      <Box ml={0.5}>
        <Breadcrumb
          selected={selectedBreadcrumb}
          onSelect={setSelectedBreadcrumb}
        />
      </Box>

      <Box mb={2}>
        <ObjectMetadataContainer
          properties={isJb1Selected ? propertiesJb1 : propertiesJb1ProtocolRow}
        />
      </Box>

      <ObjectPropertiesContainer
        data={isJb1Selected ? dataJb1 : dataJb1ProtocolRow}
      />
    </Box>
  );
};

export default SgfMain;
