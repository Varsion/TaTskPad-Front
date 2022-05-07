import React from 'react'
import { DraggableProvidedDraggableProps, DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';
import Task from '../../classes/Task'

interface Properties {
    task: Task;
    number: number;
    forwardedRef: React.LegacyRef<HTMLLIElement>;
    
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps;

    onRemove: (id: number) => void;
}

function ListItem(props: Properties) {
    return (
        <li className="collection-item pos-rel"
            ref={ props.forwardedRef } 
            {...props.dragHandleProps}
            {...props.draggableProps}>
            <div>
                <p className="header">
                    <i className="material-icons red-text va-bottom cursor-pointer">drag_indicator</i>
                    <span className="number bold pr-15 pl-15">{ props.number }</span>
                    <span className="name">{ props.task.name }</span>
                </p>
                <p className="description text-dimmed">{ props.task.description }</p>
                <span className="secondary-content pos-right-corner cursor-pointer"
                      onClick={ () => props.onRemove(props.task.getId()) }>
                    <i className="material-icons red-text">delete</i>
                </span>
            </div>
        </li>
    )
}

export default ListItem;