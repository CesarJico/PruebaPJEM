import {
  Autocomplete,
  Checkbox,
  circularProgressClasses,
  FormControlLabel,
  ImageListItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useState } from "react";
import { formulario } from "./formularioObj";

const Pregunta = ({ pregunta }) => {
  return (
    <>
      <h1 key={Math.random()}> {pregunta}</h1>
    </>
  );
};

const SubPreguntasDinamico = ({ subPreguntas, cp, t }) => {
  const [value, setValue] = useState("");

  const handleRadioChange = (e) => {
    setValue(e);
  };
  // console.log(subPreguntas,cp,t);

  const arrayOpciones = [
    { id: "true", label: "True" },
    { id: "false", label: "False" },
  ];
  let info = "";
  switch (t) {
    case "libre":
      info = subPreguntas.map((item, key) => {
        return (
          <>
            <h2 key={Math.random()}> {item}</h2>
            <textarea></textarea>
          </>
        );
      });
      break;
    case "boleana":
      if (cp === "checkBox") {
        info = subPreguntas.map((item, key) => {
          return (
            <>
              <h2 key={Math.random()}> {item}</h2>
              <FormControlLabel control={<Checkbox />} label="True" />
              <FormControlLabel control={<Checkbox />} label="False" />
            </>
          );
        });
      }
      if (cp === "radioButton") {
        info = subPreguntas.map((item, key) => {
          return (
            <>
              <h2 key={Math.random()}> {item}</h2>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={(event) => {
                  console.log(event.target.value);
                  handleRadioChange(event.target.value);
                }}
              >
                <FormControlLabel
                  value="true"
                  control={<Radio />}
                  label="True"
                />
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="False"
                />
              </RadioGroup>
            </>
          );
        });
      }

      if (cp === "comboBox") {
        info = subPreguntas.map((item, key) => {
          return (
            <>
              <ImageListItem>
                <img src={item} />
                <br></br>
              </ImageListItem>

              <Autocomplete
                options={arrayOpciones}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Opciones" />
                )}
              />
            </>
          );
        });
      }
      break;
  }

  return <>{info}</>;
};

const FormularioDinamico = () => {
  const form = formulario.map(
    ({ tipo, pregunta, subPreguntas, componente }, key) => {
      return (
        <>
          <Pregunta pregunta={pregunta} />
          <SubPreguntasDinamico
            subPreguntas={subPreguntas}
            cp={componente}
            t={tipo}
          />
        </>
      );
    }
  );
  return <>{form}</>;
};

function App() {
  return (
    <>
      <Container fixed>
        <FormularioDinamico ></FormularioDinamico>
      </Container>
      
    </>
  );
}

export default App;
