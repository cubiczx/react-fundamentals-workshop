import React from "react";
import { FormInput, FormButtonSend } from "./FormComponents";

export default function Formulario() {
  return (
    <>
      <h1>Formulario</h1>
      <form>
        <FormInput label="Nombre" name="name" placeholder="Ingresa tu nombre" type="text" />
        <FormInput label="Apellido" name="surname" placeholder="Ingresa tu apellido" type="text" />
        <FormInput label="Edad" name="age" placeholder="Ingresa tu edad" type="number" />
        <FormInput label="Color favorito" name="color" placeholder="Ingresa tu color favorito" type="text" />
        <FormButtonSend text="Enviar" />
      </form>
    </>
  );
}