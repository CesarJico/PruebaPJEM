/**
 *  
 * {
    tipo : "",//responder de manera libre
    pregunta : "",
    subPreguntas:" ",
    componente : "",
  }
 */

import pregunta5 from "./img/pregunta5.png";
import pregunta6 from "./img/pregunta6.png";


export const formulario = [
    {
      tipo: "libre", //responder de manera libre
      pregunta: "1.- Describe React features:",
      subPreguntas: [
        "a) JSX:",
        "b) Components:",
        "c) Virtual DOM:",
        "d) One-way data-binding:",
        "e) Performance:",
      ],
      componente: "textarea",
    },
    {
      tipo: "boleana", //responder de manera libre
      pregunta: "2.- True or False:",
      subPreguntas: ["Modern Web browsers can read JSX directly"],
      componente: "checkBox",
    },
    {
        tipo: "boleana", //responder de manera libre
        pregunta: "3.- In a web browser a JSX file needs to be transformed into a regular JavaScript object",
        subPreguntas: [""],
        componente: "checkBox",
      },
      {
        tipo: "boleana", //responder de manera libre
        pregunta: "4.- DOM stands for Document Only Module",
        subPreguntas: [""],
        componente: "checkBox",
      },
      {
        tipo: "boleana", //responder de manera libre
        pregunta: "5.- The next component belongs to ES6 standards",
        subPreguntas: [pregunta5],
        componente: "comboBox",
      },
      {
        tipo: "boleana", //responder de manera libre
        pregunta: "6.- The next component belongs to ES6 standards",
        subPreguntas: [pregunta6],
        componente: "comboBox",
      },
      {
        tipo: "boleana", //responder de manera libre
        pregunta: "7.- The next Require declaration belongs to ES6 standards",
        subPreguntas: [""],
        componente: "radioButton",
      },
      {
        tipo: "boleana", //responder de manera libre
        pregunta: "8.- The next Require declaration belongs to ES6 standards",
        subPreguntas: [""],
        componente: "radioButton",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "9.- Describe steps to create a new React app",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "10.- Explain how lists work in React",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "11.- Write an example of simple form in React:",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "12.- Write an arrow function example:",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "13.- What is a state in React?",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "14.- What is the use of render() in React?",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "15.- How do you update the state of a component?",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "16.- What are props in React?",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "16.- What are props in React?",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "17.- How do you pass props between components? Write an example.",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "18.- How can you embed two or more components into one? Write an example.",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "19.- Explain the lifecycle methods of components",
        subPreguntas: [
            "a) getInitialState()",
            "b) componentDidMount()",
            "c) shouldComponentUpdate()",
            "d) componentDidUpdate()",
           " e) componentWillUnmount()"  , 

        ],
        componente: "textarea",
      },
      {
        tipo: "libre", //responder de manera libre
        pregunta: "20.- What is Redux?",
        subPreguntas: ["R.-"],
        componente: "textarea",
      },

      
      
  ];