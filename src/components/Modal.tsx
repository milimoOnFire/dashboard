import { useState, FC } from "react";
import { makeStyles } from "@material-ui/core";
import MuiModal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 450,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxHeight: "80vh",
    overflowY: "auto",
  },
}));

interface IModalProps {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export const Modal: FC<IModalProps> = ({ children, open, onClose }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  return (
    <MuiModal
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      open={open}
      onClose={onClose}
    >
      <div style={modalStyle} className={classes.paper}>
        {children}
      </div>
    </MuiModal>
  );
};
