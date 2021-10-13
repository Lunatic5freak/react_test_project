import React, { useState } from "react";
import {
  Button,
  Input,
  InputAdornment,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { defaultStyles } from "./styles";
import { SearchOutlined as SearchIcon } from "@material-ui/icons";

export default function Header({ search, sort, onchange }) {
  const classes = defaultStyles();
  const [keyWord, setKeyWord] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    onchange(e);
    setKeyWord(e.target.value);
  };

  return (
    <div className={classes.mainDiv}>
      <div className={classes.searchBar}>
        <Input
          id="input-with-icon-adornment"
          onChange={(e) => handleChange(e)}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
        <Button
          onClick={() => search(keyWord)}
          startIcon={<SearchIcon />}
          variant="contained"
          color="primary"
        ></Button>
      </div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Sort
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => sort("price")}>By Prcie</MenuItem>
        <MenuItem onClick={() => sort("title")}>By Title</MenuItem>
        <MenuItem onClick={() => sort("rating")}>By Rating</MenuItem>
        <MenuItem onClick={() => sort("category")}>By Category</MenuItem>
      </Menu>
    </div>
  );
}
