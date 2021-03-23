import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <Clock />
  );
}

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  // Pad with zero with num is less than two digits
  const pad = (num) => {
    const prefix = num < 9 ? '0' : '';
    return `${prefix}${num}`;
  }

  const formatTime = (timestamp) => {
    return [
      pad(time.getHours()),
      pad(time.getMinutes()),
      pad(time.getSeconds())
    ].join(':');
  }

  return (
    <div>
      The time now is {formatTime(time)}
    </div>
  );
}
