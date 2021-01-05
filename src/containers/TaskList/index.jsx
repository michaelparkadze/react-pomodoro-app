import { useState, useEffect } from "react";
import { Button, Input } from "antd";
import CreateTaskCard from "../../components/CreateTaskCard";
import TaskCard from "../../components/TaskCard";

const initialTaskState = {
  title: "",
  description: "",
  finished: false,
};

export default function TaskList(props) {
  // true = show create task Inputs, false = no, default = false
  const [create, setCreate] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(initialTaskState);

  useEffect(() => {
    if (!create) {
      setNewTask(initialTaskState);
    }
  }, [create]);

  const handleShowCreateTask = () => {
    setCreate(!create);
  };

  const handleSubmitNewTask = () => {
    // check if not empty
    if (newTask.title && newTask.description) {
      setTasks((prevState) => [...prevState, newTask]);
    }
    // add to tasks array

    // // create task object~
    // const task = { title: title, description: description, finished: false };
    // // create new array of tasks which includes all past tasks and add the new task to it
    // setTasks((prevState) => [...prevState, task]);
  };

  const handleOnChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleDeleteTask = (index) => {
    const tasksClone = [...tasks];
    tasksClone.splice(index, 1);

    setTasks(tasksClone);
  };

  const handleEditTask = (params) => {
    const { newTitle, newDescription, index } = params;

    let tasksClone = [...tasks];
    tasksClone[index] = { ...tasksClone[index], title: newTitle };
    setTasks(tasksClone);
  };

  const handleCheckmarkTask = (index) => {
    let tasksClone = [...tasks];
    tasksClone[index] = {
      ...tasksClone[index],
      finished: !tasksClone[index].finished,
    };
    setTasks(tasksClone);
  };

  return (
    <div className="pomodoro__tasks__list">
      {tasks.map((task, index) => {
        return (
          <TaskCard
            title={task.title}
            description={task.description}
            finished={task.finished}
            handleCheckmarkTask={() => handleCheckmarkTask(index)}
            handleDeleteTask={() => handleDeleteTask(index)}
          />
          // <div style={{ backgroundColor: task.finished ? "red" : "yellow" }}>
          //   {task.title}
          //   <Button onClick={() => handleCheckmarkTask(index)}>
          //     {task.finished ? "Uncheck" : "Check"}
          //   </Button>

          //   <Button onClick={() => handleDeleteTask(index)}>X</Button>
          //   <Button
          //     onClick={() => {
          //       handleEditTask({ newTitle: "i got changed lol", index: index });
          //     }}
          //   >
          //     Edit
          //   </Button>
          // </div>
        );
      })}
      {create && (
        <CreateTaskCard
          handleOnChange={handleOnChange}
          handleSubmitNewTask={handleSubmitNewTask}
        />
      )}
      <Button onClick={() => handleShowCreateTask()}>
        {create ? "Cancel" : "Create new task"}
      </Button>
    </div>
  );
}
