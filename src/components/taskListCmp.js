import { Box } from "@mui/material";
import React from "react";
import TaskCmp from "./taskCmp";

export default function TaskListCmp({ taskList, onDelete }) {
  return (
    <Box display="flex" flexWrap={"wrap"} mt="32px">
      {taskList.map((el) => (
        <TaskCmp key={el.key} {...el.item} onDelete={onDelete} id={el.key} />
      ))}
    </Box>
  );
}
