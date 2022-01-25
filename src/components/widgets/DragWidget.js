import React, {useState} from "react";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import UserInfoCard from "../cards/UserInfoCard";
import {makeStyles} from "@material-ui/core/styles";
import {Container, List, ListItem} from "@material-ui/core";
import useDraggableInPortal from "./useDraggableInPortal";


const useStyles = makeStyles((theme) => ({
    listContainer: {
        // border: "1px solid rgba(0,0,0,0.2)",
        // padding: 1,
        // marginBottom: 50,
        // display: 'block',
        height: 700,
        width: '100%',
        overflow: 'auto'
    },
    active: {
        background: 'rgba(0,0,0,0.1)',
        // height: 'auto'
    },
    root: {
        backgroundColor: 'gray',
        display: 'block',
        margin: '0 auto',
        width: '30%',
        height: 'auto',

    }
}));

/**
 * Component to render Drag n Drop Elements.
 * @author Feras E Alawadi
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function DragWidget(props) {
    const classes = useStyles();
    const [movies, setMovies] = useState(props.items)
    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const startIndex = result.source.index
        const endIndex = result.destination.index

        const moviesNew = Array.from(movies);
        const [removed] = moviesNew.splice(startIndex, 1);
        moviesNew.splice(endIndex, 0, removed);

        setMovies(moviesNew)
    };

    const renderDraggable = useDraggableInPortal();
    return (
        <div className={classes.root}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable
                    droppableId="droppable">
                    {(provided, snapshot) => (
                        <List
                            {...provided.droppableProps}
                            innerRef={provided.innerRef}
                            className={`${classes.listContainer} ${snapshot.isDraggingOver ? classes.active : ''}`}
                        >
                            {movies.map((item, index) => (
                                <Draggable key={index} draggableId={String(index)} index={index}>
                                    {renderDraggable((provided) => (
                                        <ListItem
                                            innerRef={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            key={item.id}
                                        >
                                            <UserInfoCard item={item}/>
                                        </ListItem>
                                    ))}
                                </Draggable>
                            ))}
                        </List>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    );
};