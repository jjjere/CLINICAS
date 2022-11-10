import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import donors from "../../../pages/donors";
import { Donor, StatusStateDonors } from "../interfaces";
import { add, set, remove } from "../thunks/index"
export type DonorsState = {
  values: Donor[];
  selected: string[];
  status: StatusStateDonors;
};


const initialValues: Donor[] = [
  {
    id: "1",
    nombre: "Rikki",
    apellido: "Speere",
    email: "rspeere0@google.cn",
    telefono: "477-197-8836",
    dni: "16-872-9064",
    url: ""
  },
  {
    id: "2",
    nombre: "Fanchette",
    apellido: "Tewkesbury.",
    email: "ftewkesbury1@howstuffworks.com",
    telefono: "685-112-0607",
    dni: "00-571-6422",
    url: ""
  },
  {
    id: "3",
    nombre: "Luigi",
    apellido: "McCollum",
    email: "lmccollum2@go.com",
    telefono: "988-930-3409",
    dni: "55-962-7341",
    url: ""
  },

];

const initialState: DonorsState = {
  values: initialValues,
  selected: [],
  status: StatusStateDonors.loading //can be "loading", "online", "error"
};

const donadorSlice = createSlice({
  name: "donador",
  initialState,
  reducers: {
    addDonador: (state, action) => {
      state.values.push(action.payload);
    },
    editDonador: (state, action) => {
      const { id, nombre, apellido, email, telefono, dni } = action.payload;
      const foundDonador = state.values.find((donador) => donador.id === id);
      if (foundDonador) {
        foundDonador.nombre = nombre;
      }
    },
    deleteDonadorTask: (state, action) => {
      const foundDonador = state.values.find(
        (donador) => donador.id === action.payload
      );
      if (foundDonador) {
        state.values.splice(state.values.indexOf(foundDonador), 1);
      }
    },
    removeSelected: (state) => {
      return {
        ...state,
        values: state.values.filter(
          (value) => !state.selected.includes(value.id)
        ),
      };
    },
    selectDonors: (state, action) => {
      return {
        ...state,
        selected: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(set.fulfilled, (state, action: PayloadAction<Donor[]>) => {
      const { payload: donors } = action;
      return {
        ...state,
        values: donors,
        status: StatusStateDonors.online,
      };
    });
    builder.addCase(set.rejected, (state) => {
      return {
        ...state,
        status: StatusStateDonors.error,
      };
    });
    builder.addCase(set.pending, (state) => {
      return {
        ...state,
        status: StatusStateDonors.loading,
      };
    });
    builder.addCase(add.fulfilled, (state, action: PayloadAction<Donor>) => {
      const { payload: donor } = action;
      const exist = state.values.some((a) => a.id === donor.id);
      return {
        ...state,
        values: exist ? state.values : [donor, ...state.values],
      };
    });
    builder.addCase(
      remove.fulfilled,
      (state, action: PayloadAction<number>) => {
        const { payload: removed } = action;
        const { values, selected } = state;
        const opCompleted = removed === state.selected.length;
        return opCompleted
          ? {
            ...state,
            values: values.filter((donor) => !selected.includes(donor.id)),
            selected: [],
          }
          : {
            ...state,
            status: StatusStateDonors.error,
          };
      }
    );
  },
});

export const { addDonador, editDonador, deleteDonadorTask, removeSelected, selectDonors } = donadorSlice.actions;
export const donadorReducer = donadorSlice.reducer;
