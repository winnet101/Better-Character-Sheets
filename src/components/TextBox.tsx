import { useState } from "react";
import styles from "../styles/TextBox.module.css"

export default function TextBox() {
  const [value, setValue] = useState("");

  return (
    <div className={styles.textbox}>
      <textarea
        value={value}
        onChange={(ev) => setValue(ev.target.value ?? "")}
      />
    </div>
  );
}
