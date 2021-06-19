import { useState, useEffect, useRef } from "react";

const App = () => {
  const [segundo, setSegundo] = useState(0);
  const [minuto, setMinuto] = useState(24);
  const id1 = useRef(null);
  const id2 = useRef(null);

  // Refrescar los segundos
  const clearSeconds = () => {
    clearInterval(id1.current);
  };
  // Refrescar los minutos
  const clearMinutes = () => {
    clearInterval(id2.current);
  };

  // Contador de segundos
  useEffect(() => {
    id1.current = setInterval(() => {
      setSegundo((prevSec) => prevSec - 1);
    }, 1000);
    return () => clearSeconds();
  }, [segundo]);

  //Contador de Minutos
  useEffect(() => {
    id2.current = setInterval(() => {
      setMinuto((prevMinute) => prevMinute - 1);
    }, 60000);
    return () => clearMinutes();
  }, [minuto]);

  useEffect(() => {
    // Finito
    if (segundo === 0 && minuto === 0) {
      clearMinutes();
      clearSeconds();
    }
    // Pasar al prox minuto
    if (segundo === 0 && minuto !== 0) {
      setSegundo((prevSec) => prevSec + 59);
    }
  }, [segundo, minuto]);

  return (
    <div>
      <h1>
        Time Left: {minuto} : {segundo}
      </h1>
      <button>Start Timer</button>
    </div>
  );
};

export default App;
