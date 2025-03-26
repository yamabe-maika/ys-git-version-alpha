import React from "react";
import styled from "@emotion/styled";
import {
  Button,
  Divider,
  Typography
} from "@mui/material";

import type { TodoList } from "~/sample/TodoApp-02/App";

const StyledList = styled.ul`
  margin-top: 32px;
  padding: 0;
  list-style: none;
`;

const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 134px;
`;

type Props = {
<<<<<<< HEAD
  getData: () => Promise<void>
=======
  setTodoList: React.Dispatch<React.SetStateAction<TodoList[]>>,
>>>>>>> develop
  todoList: TodoList[]
}

export const List: React.FC<Props> = ({
<<<<<<< HEAD
  getData,
  todoList
}) => {
  const completedTodoItem = async(item: TodoList) => {
    const res = await fetch(`http://localhost:3000/tasks/${item.id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...item,
        isCompleted: !item.isCompleted
      })
    })

    if(!res.ok) {
      throw new Error();
    }

    await getData();
  }

  const deleteTodoItem = async(id: string) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })

    if(!res.ok) {
      throw new Error();
    }

    await getData();
=======
  setTodoList,
  todoList
}) => {
  const completedTodoItem = (id: string) => {
    const updateList = todoList.map((data) => {
      if(data.id === id) {
        return {
          ...data,
          isCompleted: !data.isCompleted
        }
      }
      return data;
    })
    setTodoList(updateList);
  }

  const deleteTodoItem = (id: string) => {
    const updateList = todoList.filter((data) => data.id !== id);
    setTodoList(updateList);
>>>>>>> develop
  }

  return (
    <StyledList>
      {todoList.map(item => (
        <>
          <StyledListItem key={item.id}>
            <Typography
              sx={{
                textDecoration: () => item.isCompleted ? "line-through" : "none",
              }}
            >
              {item.content}
            </Typography>
            <StyledButtonWrapper>
              <Button
                type="button"
                onClick={() => deleteTodoItem(item.id)}
                variant="contained"
                size="small"
                sx={{
                  minWidth: "57px",
                  height: "32px",
                  backgroundColor: "#FF3700",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#FF3700",
                    boxShadow: "none"
                  },
                }}
              >
                削除
              </Button>
              <Button
                type="button"
<<<<<<< HEAD
                onClick={() => completedTodoItem(item)}
=======
                onClick={() => completedTodoItem(item.id)}
>>>>>>> develop
                variant="contained"
                size="small"
                sx={{
                  minWidth: "57px",
                  height: "32px",
                  backgroundColor: `${item.isCompleted ? "#C1C1C1" : "#008CFF"}`,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: `${item.isCompleted ? "#C1C1C1" : "#008CFF"}`,
                    boxShadow: "none"
                  },
                }}
              >
                完了
              </Button>
            </StyledButtonWrapper>
          </StyledListItem>
          <Divider component="li" />
        </>
      ))}
    </StyledList>
  )
}