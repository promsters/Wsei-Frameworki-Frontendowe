import React, {ChangeEventHandler} from "react";

export interface EditableTextProps {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    edit: boolean;
}

const EditableText = (props: EditableTextProps) => {
    return (
        <>
            {props.edit && (
                <input type={"text"} onChange={props.onChange} value={props.value}/>
            )}
            {!props.edit && (
                <span>{props.value}</span>
            )}
        </>
    );
};

export default EditableText;
