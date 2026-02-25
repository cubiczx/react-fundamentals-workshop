import React from 'react';

import './App.css';
import Saludar from './components/Saludar/Saludar';
import Formulario from './components/Formulario';
import LoginForm from './components/LoginForm';
import LayoutBasic from './components/LayoutBasic';
import Car from './components/Car';

interface User {
  name: string;
  surname: string;
  age: number;
  color: string;
}

function App() {
  const users: User[] = [
    {
      name: "Xavier",
      surname: "Palacín",
      age: 30,
      color: "blue"
    },
    {
      name: "María",
      surname: "García",
      age: 25,
      color: "red"
    },
    {
      name: "Carlos",
      surname: "López",
      age: 35,
      color: "green"
    }
  ];

  const saludarFn = (name: string | number, surname: string | undefined, age: number, color: string): void => {
    console.log(`¡Hola ${name} ${surname}! tienes ${age} años, y tu color favorito es el ${color}.`);
  }

  return (
    <LayoutBasic>
        {users.map((user, index) => (
          <Saludar key={index} user={user} saludarFn={saludarFn} />
        ))}
        <Formulario />
        <LoginForm />
        <h1>React Hook useState</h1>
        <Car />
    </LayoutBasic>
  );
}

export default App;
