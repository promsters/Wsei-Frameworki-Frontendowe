import React, {KeyboardEvent, MouseEventHandler} from "react";

export interface EditableTextListProps {
    values: string[];
    onChange: (items: string[]) => void;
    itemRender: (item: string, editEnabled: boolean, deleteClickHandler: MouseEventHandler) => JSX.Element;
    edit: boolean;
}

const EditableTextList = (props: EditableTextListProps) => {
    const deleteHandler = (index: number): void => {
        props.values.splice(index, 1);
        props.onChange(props.values);
    };

    const addHandler = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.code === 'Enter' && event.currentTarget.value.length >= 2) {
            props.values.push(event.currentTarget.value);
            props.onChange(props.values);
            event.currentTarget.value = '';
        }
    };

    return (
        <>
            {props.values.map((value, key) => props.itemRender(value, props.edit, () => {
                deleteHandler(key);
            }))}
            {props.edit &&
                <input type={"text"} placeholder={"Add item..."} onKeyDown={addHandler} />
            }
        </>
    );
};

export default EditableTextList;
