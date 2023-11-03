import { PlusCircle } from "phosphor-react";
import styles from "./Input.module.css";

export const Input = ({ ...rest }) => {
  return (
    <div className={styles.taskForm}>
      <input {...rest} type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
};
