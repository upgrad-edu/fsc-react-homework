import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [ip, setIP] = useState(null);

  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        setIP(data.ip);
      });
  }, []);

  return (
    <div className="App">
      <h1>Your IP Address is:</h1>
      <h2>{ip || 'Loading...'}</h2>
    </div>
  );
}
