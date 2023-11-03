import { Clipboard } from "phosphor-react";
import styles from "./App.module.css";
import LogoImage from "./assets/logo.svg";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import "./global.css";

export const App = () => {
  return (
    <>
      <header className={styles.header}>
        <img src={LogoImage} alt="Logotipo Ignite ToDo" />
      </header>

      <main className={styles.main}>
        <Input />

        <div className={styles.content}>
          <header>
            <strong className={styles.tasksCreated}>
              Tarefas criadas <span>0</span>
            </strong>
            <strong className={styles.tasksFinished}>
              Concluídas <span>0</span>
            </strong>
          </header>

          <div className={styles.container}>
            <div className={styles.emptyTask}>
              <Clipboard size={56} />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>

            <Task />
            <Task />
            <Task />
          </div>
        </div>
      </main>
    </>
  );
};
