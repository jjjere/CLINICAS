/*NO EDTIAR*/

import { Container } from "@mui/material";
import AddButton from "./components/AddButton";
import DeleteButton from "./components/DeleteButton";
import Table from "./components/Table";

const TableDonors = () => {
  return (
    <Container sx={{ my: 7 }}>
      <AddButton />
      <DeleteButton />
      <Table />
    </Container>
  );
};

export default TableDonors;
