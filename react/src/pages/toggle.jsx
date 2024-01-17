import { useState } from "react";
import styles from "@/styles/toggle.module.css";
export default function Home() {
  const [button, setButton] = useState(true);
  const handleButton = () => {
    setButton(!button);
  };
  if (button) {
    return (
      <>
        <button onClick={handleButton} className={styles.button1}>
          On
        </button>
      </>
    );
  } else {
    return (
      <>
        <button onClick={handleButton} className={styles.button2}>
          Off
        </button>
      </>
    );
  }
}
