import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import TableDataType from "../entities/TableDataType";

interface Props {
  data: TableDataType[];
}
const ObjectPropertiesTable = ({ data }: Props) => {
  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<TableDataType>[]>(
    () => [
      {
        accessorKey: "parameter",
        header: "Namn",
        size: 150,
        sortingFn: "basic",
      },
      { accessorKey: "code", header: "Kod", size: 50, sortingFn: "basic" },
      {
        accessorKey: "dataType",
        header: "Data typ",
        size: 100,
        sortingFn: "basic",
      },
      { accessorKey: "unit", header: "Enhet", size: 100, sortingFn: "basic" },
      {
        accessorKey: "definition",
        header: "Definition",
        size: 150,
        sortingFn: "basic",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enablePagination: false, // Disable pagination
    enableStickyHeader: true, // Ensures the header stays fixed
    initialState: {
      sorting: [{ id: "parameter", desc: false }], // Initial sort by 'parameter' column in ascending order
    },
    muiTableContainerProps: {
      sx: { maxHeight: "30rem", overflow: "auto" },
    },
  });

  return <MaterialReactTable table={table} />;
};

export default ObjectPropertiesTable;
