import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import agregar from "../info_Donadores/FormAddDonadores"

import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Agregar donador</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <p>Informacion de donadores</p>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" />
          <TextField id="outlined-basic" label="Apellido" variant="outlined" />
          <TextField id="outlined-basic" label="Mail" variant="outlined" />
          <TextField id="outlined-basic" label="DNI" variant="outlined" />
          <TextField id="outlined-basic" label="Numero de telefono" variant="outlined" />
          <button>Añadir</button>
        </Box>
      </Modal>
    </div>
  );
}
