import React, {
    ChangeEvent,
    ChangeEventHandler,
    FormEvent,
    Fragment,
    useState,
  } from "react";
  import Typography from "@mui/material/Typography";
  import TextField from "@mui/material/TextField";
  import { v4 as uuidv4 } from "uuid";
  import type { RootState, AppDispatch } from "../../src/store/store"
  import { addDonador } from "../../src/donors/slices/donadorSlice";
  import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
  // export const useAppDispatch: () => AppDispatch = useDispatch;
  // export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  import { useAppDispatch } from "../../src/donors/components/Table";
  import { useAppSelector } from "../../src/donors/components/Table";

  
  function FormAddDonador(): JSX.Element {
    const dispatch = useAppDispatch();
  
    const [donador, setDonador] = useState({
      first_name: "",
      last_name: "",
      email: "",
    });
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setDonador({
        ...donador,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    };
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(
        addDonador({
          ...donador,
          id: uuidv4(),
        })
      );
    };
  
    return (
      <Fragment>
        <form onSubmit={handleSubmit}>
          <Typography
            
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Informacion de administradores
          </Typography>
          <TextField
            
            type="text"
            label="Nombre"
            name="first_name"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            
            type="text"
            name="last_name"
            label="Apellido"
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            type="email"
            name="email"
            label="Mail"
            variant="outlined"
            onChange={handleChange}
          />
  
          <div>
            <button>Añadir</button>
          </div>
        </form>
      </Fragment>
    );
  }
  
  export default FormAddDonador;