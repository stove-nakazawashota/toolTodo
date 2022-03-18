import React from "react";
import Checkbox from "@mui/material/Checkbox";
import EventNoteIcon from "@mui/icons-material/EventNote";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./taskItem.module.scss";

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

const taskItem = (task: PropTypes) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // return (
  //   <div className={styles.root}>
  //     <div className={styles.title}>
  //       <EventNoteIcon />
  //       <div className={styles.title_text}></div>
  //     </div>
  //     <div className={styles.right_item}>
  //       <Checkbox {...label} />
  //     </div>
  //     );
  //   </div>
  // );
};

export default taskItem;
