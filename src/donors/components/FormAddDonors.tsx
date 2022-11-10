import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  Fragment,
  useState,
} from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import estilos from "./info.module.css";
import { v4 as uuidv4 } from "uuid";
import { addDonador } from "../slices/donadorSlice";
import { useAppDispatch } from "../../store/hooks";
import { add } from"../thunks/index"

function FormAddDonors({ close }: { close: () => void }): JSX.Element {
  const dispatch = useAppDispatch();

  const [donor, setDonor] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dni: "", 
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDonor({
      ...donor,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      add({
        ...donor,
        id: uuidv4(),
      })
    );
    close();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Typography
          className={estilos.tituloDonor}
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Informacion de donadores
        </Typography>
        <TextField
          className={estilos.donadores}
          type="text"
          label="Nombre"
          name="nombre"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          className={estilos.donadores}
          type="text"
          name="apellido"
          label="Apellido"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          className={estilos.donadores}
          type="email"
          name="email"
          label="Mail"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          className={estilos.donadores}
          type="string"
          name="telefono"
          label="Telefono"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          className={estilos.donadores}
          type="string"
          name="dni"
          label="DNI"
          variant="outlined"
          onChange={handleChange}
        />

        <div className={estilos.boton2}>
          <button>Añadir</button>
        </div>
      </form>
    </Fragment>
  );
}


export default FormAddDonors;