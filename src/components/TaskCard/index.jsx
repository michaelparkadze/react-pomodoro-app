import Title from "antd/lib/skeleton/Title";
import React from "react";
import { Button, Input } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

export default function TaskCard(props) {
  const {
    title,
    description,
    finished,
    handleCheckmarkTask,
    handleDeleteTask,
  } = props;
  return (
    <div className="task-card">
      <Button
        shape="circle"
        icon={<CheckOutlined color={finished ? "red" : "blue"} />}
        onClick={handleCheckmarkTask}
      />
      {title}

      <Button
        icon={<CloseOutlined size={10} />}
        shape="circle"
        onClick={handleDeleteTask}
      />
      <Button
      // onClick={() => {
      //   handleEditTask({ newTitle: "i got changed lol", index: index });
      // }}
      >
        Edit
      </Button>
    </div>
  );
}
