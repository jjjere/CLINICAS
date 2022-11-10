import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import estilos from "./info.module.css";
import AddIcon from "@mui/icons-material/Add";
import Form from "./FormAddDonors";
import { PlusOne } from "@mui/icons-material"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddButon() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        startIcon={<PlusOne/>}
        
        onClick={handleOpen}
        className={estilos.botonAdd}
        color="inherit"
        aria-label="add"
      >
        Agregar 
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Form close={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

