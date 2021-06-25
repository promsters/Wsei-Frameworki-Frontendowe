import React from "react";
import {WorkspaceType} from "../../entities/Workspace";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook, faBuilding, faFileSignature} from "@fortawesome/free-solid-svg-icons";
import {IconProp, SizeProp} from "@fortawesome/fontawesome-svg-core";

interface WorkspaceIconProps {
    type: WorkspaceType;
    size: SizeProp;
    color: string;
}


export const GetWorkspaceIcon = (type: WorkspaceType): IconProp => {
    switch (type) {
        case WorkspaceType.Contract:
            return faFileSignature;
        case WorkspaceType.Corporate:
            return faBuilding;
        case WorkspaceType.Norms:
            return faBook;
    }
};

const WorkspaceIcon = (props: WorkspaceIconProps) => {
    return (
        <FontAwesomeIcon icon={GetWorkspaceIcon(props.type)} size={props.size} color={props.color}/>
    );
};

export default WorkspaceIcon;
