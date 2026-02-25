import React from "react";
import { FormInput, FormButtonSend } from "./FormComponents";

export default function LoginForm() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <FormInput name="username" label="Nombre de usuario" placeholder="Ingresa tu nombre de usuario" type="text" />
        <FormInput name="password" label="Contraseña" placeholder="Ingresa tu contraseña" type="password" />
        <FormButtonSend text="Iniciar sesión" />
      </form>
    </>
  );
}