import React from "react";
import Task from "../classes/Task";
import Buttons from "./primitives/Buttons";
import Input from "./primitives/Input";
import ListItem from "./primitives/ListItem";
import TextArea from "./primitives/TextArea";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface Properties {
  header: string;
  list: Task[];
  newTask: Task;
  itemId: number;

  onNewTaskChange: (task: Task) => void;
  onColumnRemove: (id: number) => void;
  onTaskAdd: (task: Task) => void;
  onTaskRemove: (id: number) => void;
}

function Column(props: Properties): React.ReactElement {
  function onChangeAddFormName(name: string) {
    props.newTask.name = name;
    props.onNewTaskChange(props.newTask);
  }

  function onChangeAddFormDescription(description: string) {
    props.newTask.description = description;
    props.onNewTaskChange(props.newTask);
  }

  return (
    <>
      <h4 className="collection-header list p-default">{props.header}</h4>
      <Droppable droppableId={props.itemId.toString()}>
        {(droppableArgs) => (
          <ul
            className="collection with-header"
            ref={droppableArgs.innerRef}
            {...droppableArgs.droppableProps}
          >
            {props.list.map((task: Task, i: number) => (
              <Draggable
                draggableId={task.getId().toString()}
                key={task.getId().toString()}
                index={i}
                {...droppableArgs.droppableProps}
              >
                {(draggableProps) => (
                  <ListItem
                    task={task}
                    number={i + 1}
                    onRemove={(id) => props.onTaskRemove(id)}
                    forwardedRef={draggableProps.innerRef}
                    draggableProps={draggableProps.draggableProps}
                    dragHandleProps={draggableProps.dragHandleProps!}
                  />
                )}
              </Draggable>
            ))}
            {droppableArgs.placeholder}
            <div className="add-task p-default">
              <h5>Add new Task</h5>
              <Input
                placeholder="Task name"
                value={props.newTask.name}
                onChange={(text) => onChangeAddFormName(text)}
              />
              <TextArea
                placeholder="Description"
                value={props.newTask.description}
                onChange={(text) => onChangeAddFormDescription(text)}
              />
              <Buttons
                text="Add"
                classes=""
                onClick={() => props.onTaskAdd(props.newTask)}
              />{" "}
              <br />
              <br />
              <Buttons
                text="Remove column"
                classes="red"
                onClick={() => props.onColumnRemove(props.itemId)}
              />
            </div>
          </ul>
        )}
      </Droppable>
    </>
  );
}

export default Column;
