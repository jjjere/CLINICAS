import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  /*{ field: 'id', headerName: 'ID', width: 70 },*/
  { field: 'nombre', headerName: 'Nombre', width: 200 },
  { field: 'apellido', headerName: 'Apellido', width: 200 },
  { field: 'mail', headerName: 'Mail', width: 200 },
  {
    field: 'telefono',
    headerName: 'Telefono',
    width: 200,
  },

];

const rows = [
  { id: 1, nombre: 'Jorge', apellido: 'Ayala', mail: 'jorgeayala@gmail.com', telefono:1156842391  },
  { id: 2, nombre: 'Amanda', apellido: 'Molinda', mail: 'amandamolina@gmail.com', telefono:1154732698  },
  { id: 3, nombre: 'Ciro', apellido: 'Silva', mail: 'cirosilva@gmail.com', telefono:1123569874  },
  { id: 4, nombre: 'Tamara', apellido: 'Hurtado', mail: 'tamihrtd@gmail.com', telefono:1147896325  },
  { id: 5, nombre: 'Claudio', apellido: 'Gonzales', mail: 'claudiognzl@gmail.com', telefono:1132789645  },
  { id: 6, nombre: 'Marga', apellido: 'Avila', mail: 'mrgavila@gmail.com', telefono:114463997  },
  { id: 7, nombre: 'Flavio', apellido: 'Gomez', mail: 'flvgmz@gmail.com', telefono:1137845230  },
  { id: 8, nombre: 'Renata', apellido: 'Diaz', mail: 'rntdz@gmail.com', telefono:1102354789  },
  { id: 9, nombre: 'Marcelo', apellido: 'Baez', mail: 'marcelobz@gmail.com', telefono:11479802365  },
  { id: 10, nombre: 'Guadalupe', apellido: 'Portero', mail: 'gdlportero@gmail.com', telefono:1130256740  },
  { id: 11, nombre: 'Jesus', apellido: 'Garcia', mail: 'jesusgrc@gmail.com', telefono:1123104503  },
  { id: 12, nombre: 'Veronica', apellido: 'Artigas', mail: 'veroartigas@gmail.com', telefono:1112035478  },
  { id: 13, nombre: 'Adrian', apellido: 'Perez', mail: 'adrprz@gmail.com', telefono:1145032697  },
  { id: 14, nombre: 'Melina', apellido: 'Arada', mail: 'melarada@gmail.com', telefono:1120369874  },
  { id: 15, nombre: 'Jose', apellido: 'Cantero', mail: 'josecntr@gmail.com', telefono:1104520369  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
