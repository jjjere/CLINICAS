/*NO EDTIAR*/
import { Container, Box } from "@mui/material";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import Table from "./components/Table";
import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { set } from "../donors/thunks/index";

const TableDonors = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(set());
  },[]);

  return (
    <Container sx={{ my: 7 }}>
      <Box sx={{
        display: "flex",
      }}>
        <AddButton />
        <DeleteButton />
      </Box>

      <Table />
    </Container>
  );
};

export default TableDonors;
