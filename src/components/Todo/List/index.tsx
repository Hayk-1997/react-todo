import React  from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItem from "@material-ui/core/ListItem";
import { ITodo } from "../../../store/todo/types";

type ToDoListProps ={
    handleOpenItemModal: () => void,
    todo: ITodo,
}

const ToDoList: React.FC<ToDoListProps> = ({ handleOpenItemModal, todo }) => {
    return (
        <ListItem key={todo.id}>
            <ListItemAvatar>
                <Avatar>
                    <FolderIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                secondary={todo.title}
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={handleOpenItemModal}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default ToDoList;