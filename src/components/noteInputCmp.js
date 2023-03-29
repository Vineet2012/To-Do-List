import { Box, TextField, Tooltip, Button, Paper } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import {
  Add,
  ImageOutlined,
  BrushOutlined,
  PushPinOutlined,
  AddAlertOutlined,
  ContactsOutlined,
  PaletteOutlined,
  ScheduleOutlined,
  PinDropOutlined,
} from "@mui/icons-material";
import SystemUpdateAlt from "@mui/icons-material/SystemUpdateAlt";
import MoreVert from "@mui/icons-material/MoreVert";
import Undo from "@mui/icons-material/Undo";
import Redo from "@mui/icons-material/Redo";
import useOutsideAlerter from "../hooks/useOutsideAlerter";
import Popper from "@mui/material/Popper";
import "./noteInputCmp.css";

export default function NoteInputCmp({ taskInput, handleInput, handleSubmit }) {
  const [isExpanded, setExpanded] = React.useState(false);
  const wrapperRef = React.useRef(null);
  //TODO: attach handleSubmit to this close also
  useOutsideAlerter(wrapperRef, () => setExpanded(false));

  function handleClose() {
    handleSubmit();
    setExpanded(false);
  }

  function handleOpen() {
    setExpanded(true);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Box>
      <Box ref={wrapperRef}>
        <Paper elevation={2}>
          <Box border=" 1px solid #999999" borderRadius={1}>
            {isExpanded === false ? (
              <Box className="note-input-closed">
                <Box onClick={handleOpen} display="flex" flexGrow={1}>
                  <TextField
                    placeholder="Take a note..."
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Box>
                <Box display="flex" alignItems="center">
                  <Box>
                    <Tooltip title="New List">
                      <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                      >
                        <Add />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Box>
                    <Tooltip title="New note with drawing">
                      <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                      >
                        <BrushOutlined />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Box>
                    <Tooltip title="New note with Image">
                      <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                      >
                        <ImageOutlined />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>
              </Box>
            ) : (
              <Box className="note-input-expanded" elevation={0}>
                <Box display="flex" flexDirection="column">
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-around"
                    flexGrow={1}
                  >
                    <TextField
                      onChange={handleInput}
                      fullWidth
                      name="title"
                      value={taskInput.title}
                      placeholder="Title"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        style: { height: 32 },
                      }}
                    />
                    <Box>
                      <Tooltip title="Pin note">
                        <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <PushPinOutlined fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>
                  <TextField
                    name="task"
                    value={taskInput.task}
                    onChange={handleInput}
                    placeholder="Take a note..."
                    variant="standard"
                    autoFocus
                    multiline
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                  <Box display="flex">
                    <Box>
                      <Tooltip title="Colaborator">
                        <IconButton
                          aria-describedby={id}
                          type="button"
                          onClick={handleClick}
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <AddAlertOutlined fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                      <Box
                        sx={{
                          pl: 4,
                          pr: 10,
                          bgcolor: "background.paper",
                        }}
                      >
                        <p>Reminder :</p>
                        <Box display="flex" flexDirection="column">
                          <Button
                            sx={{
                              pr: 18,
                              color: "black",
                              fontSize: 12,
                            }}
                            variant="text"
                          >
                            Tomorrow
                          </Button>
                          <Button
                            sx={{
                              pr: 18,
                              color: "black",
                              fontSize: 12,
                            }}
                            variant="text"
                          >
                            Next Week
                          </Button>
                          <Box display="flex">
                            <Box>
                              <Tooltip title="Background Options">
                                <IconButton
                                  pr="18px"
                                  size="small"
                                  aria-label="show 17 new notifications"
                                  color="inherit"
                                >
                                  <ScheduleOutlined fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Box>

                            <Button
                              sx={{
                                color: "black",
                                fontSize: 12,
                              }}
                              variant="text"
                            >
                              Pick date & time
                            </Button>
                          </Box>
                          <Box display="flex">
                            <Box>
                              <Tooltip title="Background Options">
                                <IconButton
                                  pr="18px"
                                  size="small"
                                  aria-label="show 17 new notifications"
                                  color="inherit"
                                >
                                  <PinDropOutlined fontSize="small" />
                                </IconButton>
                              </Tooltip>
                            </Box>

                            <Button
                              sx={{
                                color: "black",
                                fontSize: 12,
                              }}
                              variant="text"
                            >
                              Pick Place
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Popper>

                    <Box>
                      <Tooltip title="Background Options">
                        <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <PaletteOutlined fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Box>
                      <Tooltip title="Add Image">
                        <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <ImageOutlined fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Box>
                      <Tooltip title="Archive">
                        <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <SystemUpdateAlt fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Box>
                      <Tooltip title="More">
                        <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <MoreVert fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Box>
                      <Tooltip title="Undo">
                        <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <Undo fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Box>
                      <Tooltip title="Redo">
                        <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <Redo fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Box display="flex" flexGrow={1} />
                    <Box pr={4}>
                      <Button onClick={handleClose}>Add</Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
