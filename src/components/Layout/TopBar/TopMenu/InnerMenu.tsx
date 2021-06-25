import React, {ChangeEvent, useState} from "react";
import styled from "styled-components";
import {Colors} from "../../../../styledHelpers/Colors";

import {Link} from "react-router-dom";

import privacyIcon from "./privacy.svg";

import {MenuItem, MenuSection} from "./TopMenu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ProfileCard from "../../../Account/ProfileCard/ProfileCard";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    > div {
        padding: 5px;        
        flex: 1 1 100%;
    }
`;

const Header = styled.div`
    color: ${Colors.grayBlue};
    font-size: 14px;
    font-weight: 500;
`;

const FilterRow = styled.div`
    input {
        box-sizing: border-box;
        width: 100%;
        padding: 5px;
    }
`;

const FilterContainer = styled.div`
    overflow-y: scroll;
    max-height: 250px;
    
    border-bottom: 1px solid ${Colors.grayLight};
`;

const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 15px;
    
    padding: 5px;
    font-size: 16px;
    font-weight: 500;
    
    &:hover {
        background-color: ${Colors.grayLight};
    }
`;

const LogoutButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    color: ${Colors.grayBlue};
    cursor: pointer;
    
    border-top: 1px solid ${Colors.grayLight};
`;

const InnerMenu = (props: {sections: MenuSection[]}) => {
    const [filterKeyword, setFilterKeyword] = useState<string | null>(null);

    const getFilteredSections = (): MenuSection[] => {
        if (filterKeyword === null) {
            return props.sections;
        }

        console.log('ehe');

        return props.sections.map((section: MenuSection) => {
            return {
                label: section.label,
                items: section.items.filter((item: MenuItem) => {
                    return item.label.toLowerCase().indexOf(filterKeyword.toLowerCase()) !== -1;
                })
            };
        })
    };

    const onFilterKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        setFilterKeyword(event.target.value);
    };

    return(
        <Container>
            <FilterRow>
                <input type={"text"} placeholder={"Filter..."} onChange={onFilterKeywordChange} />
            </FilterRow>
            <FilterContainer>
                {getFilteredSections().map((section: MenuSection) => (
                    <div key={section.label}>
                        <Header>{section.label}</Header>
                        {section.items.map((item: MenuItem) => (
                            <>
                                {(item.invisible === undefined || !item.invisible) && (
                                    <StyledLink key={item.label} to={item.path}>
                                        {item.icon !== undefined && (
                                            <img src={item.icon} />
                                        )}
                                        {item.faIcon !== undefined && (
                                            <FontAwesomeIcon icon={item.faIcon} />
                                        )}
                                        {item.label}
                                    </StyledLink>
                                )}
                            </>
                        ))}
                    </div>
                ))}
            </FilterContainer>
            <Header>Account</Header>
            <ProfileCard simpleView={true} />
            <StyledLink to={"/not-found"}>
                <img src={privacyIcon} />Privacy
            </StyledLink>
            <StyledLink to={"/not-found"}>
                <img src={privacyIcon} />Settings
            </StyledLink>
            <LogoutButton>
                Logout
            </LogoutButton>
        </Container>
    );
};

export default InnerMenu;
