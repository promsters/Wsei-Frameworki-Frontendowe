import React, {useState} from "react";
import styled from "styled-components";
import {DownArrow} from "../../../../styledHelpers/Arrow";
import InnerMenu from "./InnerMenu";
import {media} from "../../../../styledHelpers/Breakpoints";
import {Colors} from "../../../../styledHelpers/Colors";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {useSelector} from "react-redux";
import {IState} from "../../../../reducers";

import homeIcon from "./home.svg";
import peopleIcon from "./people.svg";
import entitiesIcon from "../../SideBar/entities2.svg";
import administrationIcon from "./administration.svg";
import {Workspace} from "../../../../entities/Workspace";
import {GetWorkspaceIcon} from "../../../Workspace/WorkspaceIcon";
import { useLocation } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBan, faUserCog} from "@fortawesome/free-solid-svg-icons";

const MenuContainer = styled.div`
    margin-left: 20px;
    position: relative;
    height: 100%;
    width: 15%;
`;

const MenuPointer = styled.div<{open?: boolean}>`
    cursor: pointer;
    display: flex;
    align-items: center;
    
    height: 100%;
    box-sizing: border-box;
    border: 1px solid ${props => props.open ? Colors.grayLight : 'transparent'};
    padding-right: 10px;
    
    img {
        margin-left: 5px;
        width: auto;
        height: 80%;
    }
    span {
        margin-left: 20px;
        padding: 5px 5px 5px 5px;
    }
    
    ${DownArrow} {
      margin-left: auto;
    }
`;

const MenuContent = styled.div`
    width: 100vw;
    position: fixed;
    top: 29px;
    left: 0;
    
    box-sizing: border-box;
    
    height: 100vh;
    
    border: 1px solid ${Colors.grayLight};
    background-color: ${Colors.white};
    
    ${media.desktop`
        position: absolute;
        width: 100%;
        left: 0;
        right: 0;
        height: auto;
    `}
`;

export interface MenuItem {
    path: string;
    label: string;
    icon?: string;
    faIcon?: IconProp;
    invisible?: boolean;
}


const staticMenuItems: MenuItem[] = [
    {
        path: '/',
        label: 'Home',
        icon: homeIcon
    },
    {
        path: '/not-found',
        label: 'Publications',
        icon: homeIcon
    },
    {
        path: '/not-found',
        label: 'People',
        icon: peopleIcon
    },
    {
        path: '/entities',
        label: 'Entities',
        icon: entitiesIcon
    },
    {
        path: '/not-found',
        label: 'Administration',
        icon: administrationIcon
    },
    {
        path: '/profile',
        label: 'User profile',
        faIcon: faUserCog,
        invisible: true
    },
    {
        path: '/not-found',
        label: '404',
        faIcon: faBan,
        invisible: true
    }
];

export interface MenuSection {
    label: string;
    items: MenuItem[];
}

const TopMenu = () => {
    const [state, setState] = useState<MenuState>({open: false});
    const workspaces = useSelector((state: IState) => state.workspaces.workspaces);
    const location = useLocation();

    const clickHandler = () => {
        setState({open: !state.open});
    };

    const getMenuSections = (): MenuSection[] => {
        let workspaceItems: MenuItem[] = [];
        workspaces.map((workspace: Workspace) => {
            workspaceItems.push({
                path: `/workspace/${workspace.slug}`,
                label: workspace.name,
                faIcon: GetWorkspaceIcon(workspace.type)
            });
        });

        return [
            {
                label: 'Platform',
                items: staticMenuItems
            },
            {
                label: 'Workspaces',
                items: workspaceItems
            }
        ];
    };

    const getActiveMenuItem = (): MenuItem | null => {
        let activeItem = null;
        getMenuSections().forEach((section: MenuSection) => {
            section.items.forEach((item: MenuItem) => {
                if (location.pathname == item.path) {
                    activeItem = item;
                }
            });
        });

        return activeItem;
    };

    return(
        <MenuContainer>
            <MenuPointer onClick={clickHandler} open={state.open}>
                <ActiveItem item={getActiveMenuItem()} />
            </MenuPointer>
            {state.open && (
                <MenuContent>
                    <InnerMenu sections={getMenuSections()}/>
                </MenuContent>
            )}
        </MenuContainer>
    );
};

const ActiveItem = (props: {item: MenuItem | null}) => {
    return (
        <>
            {props.item !== null && (
                <>
                    {props.item.icon !== undefined && (
                        <img src={props.item.icon} />
                    )}
                    {props.item.faIcon !== undefined && (
                        <FontAwesomeIcon icon={props.item.faIcon} />
                    )}
                    <span>{props.item.label}</span>
                    <DownArrow/>
                </>
            )}
        </>
    )
}

interface MenuState {
    open: boolean;
}

export default TopMenu;
