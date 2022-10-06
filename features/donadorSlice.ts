import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    first_name: "Rikki",
    last_name: "Speere",
    email: "rspeere0@google.cn",
    phone_number: "477-197-8836",
    dni: "16-872-9064",
  },
  {
    id: 2,
    first_name: "Fanchette",
    last_name: "Tewkesbury.",
    email: "ftewkesbury1@howstuffworks.com",
    phone_number: "685-112-0607",
    dni: "00-571-6422",
  },
  {
    id: 3,
    first_name: "Luigi",
    last_name: "McCollum",
    email: "lmccollum2@go.com",
    phone_number: "988-930-3409",
    dni: "55-962-7341",
  },
  {
    id: 4,
    first_name: "Edwina",
    last_name: "Tandy",
    email: "etandy3@exblog.jp",
    phone_number: "374-493-0151",
    dni: "94-490-7895",
  },
  {
    id: 5,
    first_name: "Matias Daniel",
    last_name: "Locaso",
    email: "matiaslocaso05@gmail.com",
    phone_number: "865-806-6921",
    dni: "78-002-2699",
  },
  {
    id: 6,
    first_name: "Jana",
    last_name: "Iredell",
    email: "jiredell5@tumblr.com",
    phone_number: "799-142-9649",
    dni: "52-742-1274",
  },
  {
    id: 7,
    first_name: "Magdalena",
    last_name: "Hourican",
    email: "mhourican6@tamu.edu",
    phone_number: "937-245-1303",
    dni: "73-089-8224",
  },
  {
    id: 8,
    first_name: "Aurthur",
    last_name: "Dedam",
    email: "adedam7@acquirethisname.com",
    phone_number: "703-890-1002",
    dni: "65-571-8245",
  },
  {
    id: 9,
    first_name: "Duke",
    last_name: "Rontsch",
    email: "drontsch8@wikia.com",
    phone_number: "306-233-8308",
    dni: "64-170-4147",
  },
  {
    id: 10,
    first_name: "Meridel",
    last_name: "Drane",
    email: "mdrane9@spiegel.de",
    phone_number: "669-273-1484",
    dni: "95-577-3842",
  },
];

const userSlice = createSlice({
  name: "donador",
  initialState,
  reducers: {
    addDonador: (state, action) => {
      state.push(action.payload.donador);
    },
    editDonador: (state, action) => {
      const { id, first_name, last_name, email, phone_number, dni } = action.payload.donador;
      const foundDonador = state.find((donador) => donador.id === id);
      if (foundDonador) {
        foundDonador.first_name = first_name;
      }
    },
    deleteDonadorTask: (state, action) => {
      const foundDonador = state.find(
        (donador) => donador.id === action.payload.donador
      );
      if (foundDonador) {
        state.splice(state.indexOf(foundDonador), 1);
      }
    },
  },
});

export const { addDonador, editDonador, deleteDonadorTask } = userSlice.actions;
export default userSlice.reducer;
