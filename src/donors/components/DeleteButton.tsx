import React from 'react'
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useAppDispatch } from '../../store/hooks';
import { removeSelected } from '../slices/donadorSlice'

const DeleteButton = () => {
  const dispatch = useAppDispatch ();

  const handleClick = () => {
    const confirmDelete = confirm ("Estas seguro?");
    if(confirmDelete) {
      dispatch (removeSelected());
    }
  };
  return (
    <Button
    startIcon={<Delete/>}
    className="button button-text"
    onClick={handleClick}
    >
      delete
    </Button>
  );
};

export default DeleteButton;