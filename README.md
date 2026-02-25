# React Fundamentals Workshop 🚀

Proyecto educativo que demuestra los conceptos fundamentales de React con TypeScript, incluyendo componentes, props, state, hooks y composición.

## 📋 Descripción

Esta aplicación es un laboratorio de aprendizaje que incluye varios componentes demostrativos:

- **Saludar**: Componente que muestra información de usuarios y ejecuta callbacks
- **Formulario**: Ejemplo de manejo de formularios básicos
- **LoginForm**: Formulario de autenticación
- **Car**: Demostración de `useState` y `useEffect` con un simulador de estado de vehículo
- **LayoutBasic**: Patrón de composición usando `children` prop

## 🛠️ Tecnologías

- React 18
- TypeScript
- CSS/SCSS
- Vite (o Create React App)

## 🚀 Cómo Ejecutar

### Prerequisitos

- Node.js (v14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio o navega al directorio del proyecto:

```bash
cd "react-fundamentals-workshop"
```

2. Instala las dependencias:

```bash
npm install
```

### Ejecución en Desarrollo

```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000) (o el puerto configurado).

### Build para Producción

```bash
npm run build
```

## 📚 Conceptos Demostrados

### 1. **Props y TypeScript Interfaces**

```tsx
interface User {
  name: string;
  surname: string;
  age: number;
  color: string;
}
```

### 2. **useState Hook**

Manejo de estado local en el componente `Car`:

- Estado del encendido/apagado
- Contador de kilómetros

### 3. **useEffect Hook**

Sincronización con efectos externos (actualización del título del documento)

### 4. **useCallback Hook**

Optimización de funciones para evitar re-renders innecesarios

### 5. **Component Composition**

Uso del patrón `children` prop en `LayoutBasic` para crear layouts reutilizables

### 6. **Arrays y Renderizado de Listas**

Mapeo de arrays de usuarios con la prop `key`

## 📁 Estructura del Proyecto

```text
react-fundamentals-workshop/
├── src/
│   ├── components/
│   │   ├── Saludar/
│   │   │   └── Saludar.tsx
│   │   ├── Formulario.tsx
│   │   ├── LoginForm.tsx
│   │   ├── LayoutBasic.tsx
│   │   ├── LayoutBasic.scss
│   │   └── Car.tsx
│   ├── App.tsx
│   ├── App.css
│   └── index.tsx
└── package.json
```

## 🎯 Características del Componente Car

El componente `Car` simula el estado de un vehículo:

- ✅ Encender/Apagar el coche
- ✅ Aumentar kilómetros solo si está encendido
- ✅ Indicador visual con emojis 🟢/🔴
- ✅ Actualización dinámica del título de la página

## 🤝 Contribuciones

Este es un proyecto educativo. Siéntete libre de hacer fork y experimentar con diferentes conceptos de React.

## 📝 Licencia

MIT

## 👨‍💻 Autor

Proyecto creado como parte del curso de React en Udemy.
