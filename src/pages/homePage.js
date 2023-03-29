import React from "react";
import { Box, Container, Paper } from "@mui/material";
import Header from "../components/header";
import NoteInputCmp from "../components/noteInputCmp";
import TaskListCmp from "../components/taskListCmp";
import taskListDummyData from "../dummyData/taskList.json";

export default function HomePage({ themeMode, onChangeTheme }) {
  const [taskInput, setTaskInput] = React.useState({ title: "", task: "" });
  const [taskList, setTaskList] = React.useState(taskListDummyData);

  function handleInput(event) {
    const { name, value } = event.target;
    taskInput[name] = value;
    setTaskInput({ ...taskInput });
  }

  function handleSubmit() {
    taskList.push({ item: taskInput, key: Date.now() });
    setTaskList([...taskList]);
    setTaskInput({ title: "", task: "" });
  }

  function handleRemove(key) {
    let newTaskList = taskList.filter((item) => item.key !== key);
    setTaskList(newTaskList);
  }

  return (
    <>
      <Header themeMode={themeMode} onChangeTheme={onChangeTheme} />
      <Paper
        component={Box}
        pt={4}
        minHeight="calc(100vh - 64px - 32px - 2px)"
        sx={{ borderRadius: 0 }}
      >
        <Container>
          <Box display="flex" justifyContent="center">
            <NoteInputCmp
              taskInput={taskInput}
              handleInput={handleInput}
              handleSubmit={handleSubmit}
            />
          </Box>
          <Box>
            <TaskListCmp taskList={taskList} onDelete={handleRemove} />
          </Box>
        </Container>
      </Paper>
    </>
  );
}
