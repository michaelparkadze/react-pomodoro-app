import { useState } from "react";

export default function TaskList(props) {
  // true = show create task inputs, false = no, default = false
  const [create, setCreate] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    finished: false,
  });

  const handleCreateTask = (params) => {
    setCreate(!create);
    // // create task object
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

  const CreateTaskForm = () => (
    <div className="create-task-form">
      <input
        type="text"
        name="title"
        placeholder="enter title"
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
      <input
        type="text"
        name="description"
        placeholder="enter description"
        onChange={(e) => handleOnChange(e)}
      />
    </div>
  );

  return (
    <div className="pomodoro__tasks__list">
      <h1>task state current:</h1>
      {Object.entries(newTask).map((item, index) => {
        return (
          <div>
            {item[0]}: {item[1]}
          </div>
        );
      })}
      <h2>Tasks:</h2>
      {tasks.map((task, index) => {
        return (
          <div style={{ backgroundColor: task.finished ? "red" : "yellow" }}>
            {task.title}
            <button onClick={() => handleCheckmarkTask(index)}>
              {task.finished ? "Uncheck" : "Check"}
            </button>

            <button onClick={() => handleDeleteTask(index)}>X</button>
            <button
              onClick={() => {
                handleEditTask({ newTitle: "i got changed lol", index: index });
              }}
            >
              Edit
            </button>
          </div>
        );
      })}
      {create && (
        <>
          <div className="create-task-form">
            <input
              type="text"
              name="title"
              placeholder="enter title"
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
            <input
              type="text"
              name="description"
              placeholder="enter description"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
        </>
      )}
      <button onClick={() => handleCreateTask()}>
        {create ? "Cancel" : "Create new task"}
      </button>
    </div>
  );
}
