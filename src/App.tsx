import { Clipboard, PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import LogoImage from "./assets/logo.svg";
import { Task, TaskProps } from "./components/Task";
import "./global.css";

export const App = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const isInputTaskEmpty = newTaskTitle.length === 0;

  const numberOfTasksFinished = tasks.reduce((accumulator, currentValue) => {
    if (currentValue.isComplete) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);

  const handleNewTaskTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(event.target.value);
  };

  const handleChangeTaskState = (id: string) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        }
        return task;
      });
    });
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    const newTask: TaskProps = {
      id: uuidv4(),
      title: newTaskTitle,
      isComplete: false,
      onChangeTaskState: () => handleChangeTaskState(newTask.id),
      onDeleteTask: () => deleteTask(newTask.id),
    };

    setTasks((prevState) => [...prevState, newTask]);
    setNewTaskTitle("");
  };

  const deleteTask = (id: string) => {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksWithoutDeletedOne);
  };

  return (
    <>
      <header className={styles.header}>
        <img src={LogoImage} alt="Logotipo Ignite ToDo" />
      </header>

      <main className={styles.main}>
        <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={newTaskTitle}
            onChange={handleNewTaskTitleChange}
          />
          <button type="submit" disabled={isInputTaskEmpty}>
            Criar <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.content}>
          <header>
            <strong className={styles.tasksCreated}>
              Tarefas criadas <span>{tasks.length}</span>
            </strong>
            <strong className={styles.tasksFinished}>
              Concluídas{" "}
              <span>{`${numberOfTasksFinished} de ${tasks.length}`}</span>
            </strong>
          </header>

          <div className={styles.container}>
            {tasks.length === 0 && (
              <div className={styles.emptyTask}>
                <Clipboard size={56} />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
            )}

            {tasks.map((task) => {
              return (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  isComplete={task.isComplete}
                  onChangeTaskState={() => handleChangeTaskState(task.id)}
                  onDeleteTask={deleteTask}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};
