import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ImageOutlined,
  PushPinOutlined,
  AddAlertOutlined,
  ContactsOutlined,
  PaletteOutlined,
  MoreVertOutlined,
} from "@mui/icons-material";
import { teal } from "@mui/material/colors";

export default function TaskCmp({ title, task, onDelete, id }) {
  let [hover, setHover] = React.useState(false);

  function handleHoverIn() {
    setHover(true);
  }

  function handleHoverOut() {
    setHover(false);
  }

  return (
    <Box
      bgcolor={teal[500]}
      color="#FFF"
      width={240}
      borderRadius={2}
      p={2}
      pb={6}
      mr={4}
      ml={6}
      mb={4}
      justifyContent="center"
      onMouseOver={handleHoverIn}
      onMouseLeave={handleHoverOut}
      position="relative"
      className="parent"
    >
      <Box>
        <Typography variant="body1" fontWeight={500} sx={{ cursor: "default" }}>
          {title}
        </Typography>
        <Box pt={1} />

        {(function () {
          let arr = task.split("\n");
          let result = arr.map((el) => {
            return (
              <>
                <Typography
                  variant="body2"
                  sx={{ cursor: "default" }}
                  component="span"
                >
                  {el}
                </Typography>
                <br />
              </>
            );
          });
          return result;
        })()}
      </Box>
      {hover === true && (
        <>
          <Box position="absolute" top={12} right={8}>
            <Tooltip title="Background Options">
              <IconButton color="inherit">
                <PushPinOutlined fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <Box position="absolute" bottom={0} left={4} display="flex">
            <Box>
              <Tooltip title="Remind Me">
                <IconButton size="large" color="inherit">
                  <AddAlertOutlined fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip title="Colaborator">
                <IconButton size="large" color="inherit">
                  <ContactsOutlined fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip title="Background Options">
                <IconButton size="large" color="inherit">
                  <PaletteOutlined fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip title="Delete task">
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={() => onDelete(id)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Tooltip title="More">
                <IconButton size="large" color="inherit">
                  <MoreVertOutlined fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
