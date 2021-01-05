import React from "react";
import { Button, Input } from "antd";
import "./styles.scss";

export default function CreateTaskCard(props) {
  const { handleOnChange, handleSubmitNewTask } = props;
  return (
    <div className="create-task-card">
      <Input
        type="text"
        name="title"
        placeholder="What are you working on?"
        onChange={(e) => {
          handleOnChange(e);
        }}
      />
      <Input
        type="text"
        name="description"
        placeholder="Add a note"
        onChange={(e) => handleOnChange(e)}
      />
      <Button onClick={handleSubmitNewTask}>Add</Button>
    </div>
  );
}
