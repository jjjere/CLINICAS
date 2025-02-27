import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../src/components/navbar/navbar";
import Layout from "../src/layout/layout";
import TituloMain from "../src/components/tituloMain/tituloMain";
import TarjetaMain from "../src/components/tarjetasMain/tarjetasMain";
import Button from "@mui/material/Button";
import Tarjetas from "../src/components/tarjetasMain/taerjeta-id";
import imagen1 from "../img/donadores.jpg";
import { Box } from "@mui/material";
import Footer from "../src/components/Footer";
import { Container } from "@mui/system";


const Home = () => {
  return (


    <Container>

      <main className={styles.main}>
        <TituloMain />
        <h1 className={styles.empiezaDonar}>Empieza a Donar</h1>
        <h2 >¿COMO DONAR SANGRE?</h2>
        <Tarjetas/>
      </main>
   
    </Container>
  
  );
};

export default Home;
