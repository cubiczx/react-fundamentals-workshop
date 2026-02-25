import React from "react";
import styles from "../../css/Button.module.css";
//import "./Saludar.css";
import "./Saludar.scss";

interface User {
  name: string | number;
  surname: string;
  age: number;
  color: string;
}

interface SaludarProps {
  user: User;
  saludarFn?: (name: string | number, surname: string | undefined, age: number, color: string) => void;
}

export default function Saludar(props: SaludarProps) {
  const {user: {name = "Anónimo", surname, age, color}, saludarFn} = props;

  return (
    <div className="saludar-container">
        <h2 className="saludo" style={{ color: "white" }}>
            Hola <span style={{ color: "green" }}>{name} {surname}</span>, tienes {age} años,
            y tu color favorito es el {color}.
        </h2>
        <br />
        <button
          className={styles.buttonSubmit}
          onClick={() => saludarFn && saludarFn(name, surname, age, color)}
        >
          Saludar
        </button>
        <button className={styles.buttonSuccess}>Correct</button>
        <button className={styles.buttonError}>Error</button>
        <p className="creditos">Créditos: Xavier Palacín</p>
    </div>
  );
}
