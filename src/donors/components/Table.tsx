import * as React from "react";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks";
import { selectDonors } from "../slices/donadorSlice";
import {
  DataGrid,
  GridCellEditCommitParams,
  GridColDef,
  GridValueGetterParams,
  GridSelectionModel, 
} from "@mui/x-data-grid";

export default function DataTable() {
  const dispatch = useAppDispatch();
  const handleEditRow = (params: GridCellEditCommitParams) => {
    console.log(params);
  };
const columns: GridColDef[] = [
  { field: "nombre", headerName: "Nombre", editable: true },
  { field: "apellido", headerName: "Apellido", editable: true },
  { field: "email", headerName: "Mail", editable: true },
  {
    field: "telefono",
    headerName: "Numero de telefono",
    editable: true,
  },
  { field: "dni", headerName: "DNI", editable: true },
];

const entities = useAppSelector((state) => state.donadores.values);

const handleSelectRow = (selection: GridSelectionModel) => {
  dispatch(selectDonors(selection as string[]));
};

  const donadores = useAppSelector((state) => state.donadores.values);
  return (
    
      <DataGrid
        rows={donadores}
        columns={columns}
        autoHeight
        checkboxSelection
        onCellEditCommit={handleEditRow}
        onSelectionModelChange={handleSelectRow}
      />
    
  );
}
