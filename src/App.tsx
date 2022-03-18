import React from "react";
import Header from "./components/header/header";
import TaskForm from "./features/task/taskForm/TaskForm";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
      </div>
    </div>
  );
};

export default App;
