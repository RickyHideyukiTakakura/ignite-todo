import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export interface TaskProps {
  id: string;
  title: string;
  isComplete: boolean;
  onChangeTaskState: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const Task = ({
  id,
  title,
  isComplete,
  onChangeTaskState,
  onDeleteTask,
}: TaskProps) => {
  const handleCheckboxChange = () => {
    onChangeTaskState(id);
  };

  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <div className={styles.task}>
      <input
        type="checkbox"
        id={id}
        onChange={handleCheckboxChange}
        checked={isComplete}
      />
      <label htmlFor={id}>
        <span className={styles.checkbox}></span>
        {title}
      </label>
      <button onClick={handleDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  );
};
