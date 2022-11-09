export type DonorProps = {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    dni: string;
  };
  
  export type Donor = DonorProps & {
    id: string;
    url: string;
  };
  
  export enum StatusStateDonors {
    loading,
    offline,
    online,
    error,
  }
  