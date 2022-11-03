import { createSlice } from "@reduxjs/toolkit";
import { Donor } from "../interfaces";
export type DonorsState = {
  values: Donor[];
  selected: number[];
  status: string;
};


const initialValues: Donor [] = [
  {
    id: 1,
    nombre: "Rikki",
    apellido: "Speere",
    email: "rspeere0@google.cn",
    telefono: "477-197-8836",
    dni: "16-872-9064",
    url: ""
  },
  {
    id: 2,
    nombre: "Fanchette",
    apellido: "Tewkesbury.",
    email: "ftewkesbury1@howstuffworks.com",
    telefono: "685-112-0607",
    dni: "00-571-6422",
    url: ""
  },
  {
    id: 3,
    nombre: "Luigi",
    apellido: "McCollum",
    email: "lmccollum2@go.com",
    telefono: "988-930-3409",
    dni: "55-962-7341",
    url:""
  },

];

const initialState: DonorsState = {
  values: initialValues,
  selected: [],
  status: "loading", //can be "loading", "online", "error"
};

const donadorSlice = createSlice({
  name: "donador",
  initialState,
  reducers: {
    addDonador: (state, action) => {
      state.values.push(action.payload.donador);
    },
    editDonador: (state, action) => {
      const { id, nombre, apellido, email, telefono, dni } = action.payload.donador;
      const foundDonador = state.values.find((donador) => donador.id === id);
      if (foundDonador) {
        foundDonador.nombre = nombre;
      }
    },
    deleteDonadorTask: (state, action) => {
      const foundDonador = state.values.find(
        (donador) => donador.id === action.payload.donador
      );
      if (foundDonador) {
        state.values.splice(state.values.indexOf(foundDonador), 1);
      }
    },
    removeSelected: (state) =>{
      return{
        ...state,
        values: state.values.filter(
          (value) => !state.selected.includes(value.id)
        ),
      };
    },
    selectDonors: (state, action) => {
      return{
        ...state,
        selected: action.payload,
      };
    },    
  },
});

export const { addDonador, editDonador, deleteDonadorTask, removeSelected, selectDonors } = donadorSlice.actions;
export const donadorReducer = donadorSlice.reducer;
