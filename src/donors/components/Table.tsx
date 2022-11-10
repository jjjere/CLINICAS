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
import { Box } from "@mui/system";
import { Alert, LinearProgress } from "@mui/material";
import { StatusStateDonors } from "../interfaces/index";


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

  
  const handleSelectRow = (selection: GridSelectionModel) => {
    dispatch(selectDonors(selection as string[]));
  };
  
  const status = useAppSelector((state) => state.donadores.status);
  const donadores = useAppSelector((state) => state.donadores.values);
  return (
    <React.Fragment>

      {status === StatusStateDonors.loading && <CustomLinearProgress />}
      {status === StatusStateDonors.error && <CustomAlert />}

      <DataGrid
        rows={donadores}
        columns={columns}
        autoHeight
        checkboxSelection
        density="comfortable"
        onCellEditCommit={handleEditRow}
        onSelectionModelChange={handleSelectRow}
      />
    </React.Fragment>

  )
};
const CustomLinearProgress = () => (
  <Box sx={{ color: "var(--color-primario)" }}>
    <LinearProgress color="inherit" />
  </Box>
);

const CustomAlert = () => (
  <Alert severity="error">Ups, algo no fue del todo bien!!!</Alert>
);

