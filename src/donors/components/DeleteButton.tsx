import React from 'react'
import { Delete } from "@mui/icons-material";
import { Button, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { removeSelected } from '../slices/donadorSlice'
import { remove } from '../thunks';

const DeleteButton = () => {
  const dispatch = useAppDispatch ();
  const selected = useAppSelector((state) => state.donadores.selected);

  const handleClick = () => {
    const confirmDelete = confirm ("Estas seguro?");
    if(confirmDelete) {
      dispatch (remove(selected));
    }
  };
  return (
    <Box display={"inline"}>
    <Button
    startIcon={<Delete/>}
    className="button button-text"
    onClick={handleClick}
    disabled={selected.length === 0}
    >
      delete
    </Button>
    </Box>
  );
};

export default DeleteButton;