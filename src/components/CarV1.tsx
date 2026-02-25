import React, {useState} from "react";

export default function CarV1() {
    const [isOn, setIsOn] = useState(false);
    const [countKm, setCountKm] = useState(0);

    const toggleCar = () => {
        setIsOn(!isOn);
    };

    const increaseKm = (num: number) => {
        if(isOn) {
            setCountKm(countKm + num);
        } else {
            alert("El coche está apagado, no puedes aumentar los kilómetros.");
        }
    }

    return (
        <div>
            <h2>Car</h2>
            <h2>Kilómetros recorridos: {countKm} km</h2>
            <p>El coche está: {isOn ? <span style={{color: "green"}}>Encendido</span> : <span style={{color: "red"}}>Apagado</span>}</p>
            <button onClick={toggleCar}>Encender/Apagar</button> <button onClick={() => increaseKm(5)}>Aumentar km</button>
        </div>
    );
}