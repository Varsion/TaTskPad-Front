import React from 'react';

interface Properties {
    text: string;
    onClick: () => void;
    classes: string;
}

function ListItem(props: Properties): React.ReactElement {
    return (
        <button className={"waves-effect waves-light btn-small " + props.classes}
                onClick={ props.onClick }>
                { props.text }
        </button>
    )
}

export default ListItem;