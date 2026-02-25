import React, { useState, useEffect, useCallback } from "react";

export default function Car() {
  const [carState, setCarState] = useState({
    isOn: false,
    countKm: 0,
  });

  const checkCarState = useCallback(() => {
    if (carState.isOn) {
      return "🟢 encendido.";
    } else {
      return "🔴 apagado.";
    }
  }, [carState.isOn]);

  useEffect(() => {
    document.title = `El coche está ${checkCarState()}`;
  }, [checkCarState]);

  const increaseKm = (num: number) => {
        if(carState.isOn) {
            setCarState({ ...carState, countKm: carState.countKm + num });
        } else {
            alert("El coche está apagado, no puedes aumentar los kilómetros.");
        }
    }

  return (
    <div>
      <h2>React Hook useState & useEffect</h2>
      <p>
        El coche está:{" "}
        {carState.isOn ? (
          <span style={{ color: "green" }}>Encendido</span>
        ) : (
          <span style={{ color: "red" }}>Apagado</span>
        )}
      </p>
      <h2>Kilómetros recorridos: {carState.countKm} km</h2>
      <button
        onClick={() => setCarState({ ...carState, isOn: !carState.isOn })}
      >
        Encender/Apagar
      </button>{" "}
      <button
        onClick={() => increaseKm(5)}
      >
        Aumentar km
      </button>
    </div>
  );
}
