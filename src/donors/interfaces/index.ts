export type DonorProps = {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    dni: string;
  };
  
  export type Donor = DonorProps & {
    id: number;
    url: string;
  };
  