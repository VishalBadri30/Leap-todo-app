import React from "react";
import { Tooltip, Tag, List, Button, Popconfirm, Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

const Todo = ({ todo, onTodoRemoval, onTodoToggle }) => {
  return (
    <List.Item
      actions={[
        <Tooltip
          title={todo.completed ? "Mark as uncomplete" : "Mark as completed"}
        >
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => {
              onTodoToggle(todo);
            }}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <Popconfirm
          title={"Are you sure you want to delete?"}
          onConfirm={() => {
            onTodoRemoval(todo);
          }}
        >
          <Button className="remove-todo-button" type="primary" danger>
            X
          </Button>
        </Popconfirm>,
      ]}
      className="list-item"
      key={todo.id}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          alignItems: "center",
        }}
      >
        <div className="todo-item">
          <Tag color={todo.completed ? "cyan" : "red"} className="todo-tag">
            {todo.title}
          </Tag>
        </div>
        <b>{todo.description}</b>
      </div>
    </List.Item>
  );
};

export default Todo;
