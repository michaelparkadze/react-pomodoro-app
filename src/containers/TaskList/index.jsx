import { useState } from "react";

export default function TaskList(props) {
  const [tasks, setTasks] = useState([
    {
      title: "Example task",
      description: "task description",
      finished: false,
    },
  ]);

  const handleCreateTask = (params) => {
    const { title, description } = params;

    // create task object
    const task = { title: title, description: description, finished: false };
    // create new array of tasks which includes all past tasks and add the new task to it
    setTasks((prevState) => [...prevState, task]);
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
      this is going to be a task list 1. ceate task 2. delete task 3. edit task
      4. check task as finished
      <h2>Tasks:</h2>
      {tasks.map((task, index) => {
        return (
          <div style={{ backgroundColor: task.finished ? "red" : "yellow" }}>
            {task.title}
            <button onClick={() => handleCheckmarkTask(index)}>
              check me please boss
            </button>

            <button onClick={() => handleDeleteTask(index)}>delete me</button>
            <button
              onClick={() => {
                handleEditTask({ newTitle: "i got changed lol", index: index });
              }}
            >
              try me bitch
            </button>
          </div>
        );
      })}
      <button
        onClick={() =>
          handleCreateTask({
            title: `title -${tasks.length}`,
            description: "desc",
          })
        }
      >
        Create Task
      </button>
    </div>
  );
}
