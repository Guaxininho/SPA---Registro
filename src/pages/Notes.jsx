import React from "react";
import { Link } from "react-router-dom";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import python from "../assets/python.png";
import react from "../assets/react.png";
import { StyledNotes } from "../styles/Notes";
import Paper from "../ui/Paper";
import Lumina from "../assets/Lumina.png";
import TextField from "@mui/material/TextField";

function Notes() {
  // COMPONENTE RESPONSÁVEL PELA ABA DOCUMENTAÇÃO
  return (
    <StyledNotes>
      <div>
        <p>
          Em meio aos corredores silenciosos do acervo, onde o conhecimento
          repousa em pergaminhos e livros esquecidos pelo tempo, Lúmina surge
          como uma luz guia. Seus olhos brilhantes e mente afiada são dedicados
          a decifrar os mistérios escondidos nas palavras antigas. Como uma
          tradutora experiente, Lúmina tem a habilidade única de trazer à tona o
          significado dos textos ancestrais, tornando-os acessíveis para todos
          que buscam sabedoria. <br /> <br />
          <span>Lúmina: </span>
          Quando você se deparar com um manuscrito em uma língua arcaica ou com
          um texto que parece perdido nas areias do tempo, eu estarei ao seu
          lado. Vamos desvendar juntos os segredos do passado. <br />
          <br /> Procurando algum assunto em específico?
        </p>
        <TextField
          id="searc-basic"
          variant="outlined"
          color="secondary"
          fullWidth
          inputProps={{ style: { fontSize: "1.6rem" } }}
          InputLabelProps={{
            style: { fontSize: "2rem" },
          }}
          label="Pesquisar"
          type="search"
        />
      </div>
      <div className="gradeDeArtigos">
        <Paper />
        <Paper />
        <Paper />
        <Paper />
      </div>
      <img className="Lumina" src={Lumina} alt="Lumina" />
    </StyledNotes>
  );
}

export default Notes;
