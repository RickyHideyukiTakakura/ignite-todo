import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export const Task = () => {
  return (
    <div className={styles.task}>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <label htmlFor="checkbox">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae omnis
        deserunt, explicabo unde delectus quo nihil molestiae sit eius culpa
        odit non, illo enim commodi facere veniam soluta repellendus doloremque!
      </label>
      <button>
        <Trash size={24} />
      </button>
    </div>
  );
};
