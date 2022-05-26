import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Menu, Popover, Typography } from "@mui/material";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectOpen, setSelectOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setSelectOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(age);
  return (
    <Box sx={{ maxWidth: 150 }}>
      <Menu
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left"
        }}
        style={{
          width: 150
        }}
      >
        <MenuItem
          value={40}
          onClick={() => {
            setAge(40);
            setSelectOpen(false);
            handleClose();
          }}
          style={{
            maxWidth: 150
          }}
        >
          Fourty
        </MenuItem>
        <MenuItem
          value={50}
          onClick={() => {
            setAge(50);
            setSelectOpen(false);
            handleClose();
          }}
          style={{
            maxWidth: 150
          }}
        >
          Fifty
        </MenuItem>
      </Menu>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          open={selectOpen}
          onOpen={() => setSelectOpen(true)}
          // defaultOpen={selectOpen}
          renderValue={() => `${age}`}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30} onClick={handleClick}>
            Thirty
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
