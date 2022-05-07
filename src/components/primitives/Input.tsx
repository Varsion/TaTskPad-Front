import React from 'react';

interface Properties {
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
}

function ListItem(props: Properties) {
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const text = e.currentTarget.value;
        props.onChange(text);
    }

    return (
        <div className="input-field">
            <input type="text" onChange={ (e) => onChange(e) } value={ props.value } />
            <label className="no-pointer-events">{ props.placeholder }</label>
        </div>
    )
}

export default ListItem;