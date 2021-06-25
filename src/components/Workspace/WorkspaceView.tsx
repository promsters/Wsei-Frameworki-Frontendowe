import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../reducers";
import {Workspace} from "../../entities/Workspace";
import { Redirect } from "react-router-dom";
import {getWorkspaceComments} from "../../actions/workspaceActions";
import CommentsList from "../Comments/CommentsList";

import styled from "styled-components";
import {Colors} from "../../styledHelpers/Colors";
import {BorderRadius} from "../../styledHelpers/Border";
import {BoxShadow} from "../../styledHelpers/BoxShadow";
import WorkspaceIcon from "./WorkspaceIcon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBuilding,
    faCalendar,
    faCog, faFileContract, faFileSignature, faPoll,
    faSatelliteDish,
    faSearch, faSignature,
    faSitemap,
    faSortDown, faUsers
} from "@fortawesome/free-solid-svg-icons";
import {SearchInput} from "../../styledHelpers/SearchInput";
import {Button as ButtonComponent} from "../Utils/Button";
import {Comment} from "../../api/Post";
import {Button, ButtonIcon} from "../../styledHelpers/Button";
import {faDotCircle} from "@fortawesome/free-regular-svg-icons";

const Header = styled.div`
  background-color: ${Colors.white};
  border-radius: ${BorderRadius.boxSmall};
  box-shadow: ${BoxShadow.box};
  
  margin-bottom: 15px;
  
  img {
    width: 100%;
    height: 120px;
    object-fit: none;
    object-position: center 60%;
  }
  
  .heading {
    display: flex;
    align-items: center;
    
    .icon {
      margin: 20px;
    }
    
    .desc {
      width: 100%;
      display: flex;
      flex-direction: column;
      
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 2px 20px 15px 0;
        
        span {
          font-size: 20px;
          font-weight: bold;
        }
      }
      
      .memo {
        padding: 5px 0 5px 0px;
      }
    }
  }
`;

const Guidance = styled.div`
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid ${Colors.grayLight};
  padding-bottom: 5px;
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px 0 10px;
    padding: 10px 15px 10px 15px;
    
    color: ${Colors.grayMedium};
    
    .toggle {
      cursor: pointer;
    }
  }
  
  .cards {
    margin: 0 15px 10px 15px;
    display: flex;
    gap: 15px;
    
    .card {
      position: relative;
      flex: 0 0 calc(33% - 7px);
      background-color: ${Colors.white};
      border-radius: ${BorderRadius.boxSmall};
      box-shadow: ${BoxShadow.boxSm};
      
      padding: 20px 15px 20px 15px;
      
      box-sizing: border-box;
      
      .bgIcon {
        z-index: 1;
        position: absolute;
        top: 20px;
        right: 20px;
      }
      
      .title,.desc {
        z-index: 2;
        position: relative;
      }
      
      .title {
        margin-top: 10px;
        color: ${Colors.blueDark};
        font-size: 19px;
        margin-bottom: 10px;
      }
      
      .desc {
        font-size: 14px;
        color: ${Colors.blueDark};
      }
    }
  }
`;

const CommentsContainer = styled.div`
  background-color: ${Colors.white};
  border-top: 1px solid ${Colors.grayLight};
  
  padding: 20px;
  
  .header {
    color: ${Colors.grayBlue2};
    font-weight: 500;
    font-size: 20px;
    
    padding-bottom: 5px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    div {
      display: flex;
      gap: 20px;
    }
  }
  
  .tags {
    display: flex;
    gap: 10px;
        
    padding-bottom: 10px;
  }
`;

interface WorkspaceViewProps {
    slug: string;
}

const WorkspaceView = (props: WorkspaceViewProps) => {
    const workspace = useSelector((state: IState) => state.workspaces.workspaces.find((workspace:Workspace) => workspace.slug === props.slug));
    const [searchKeyword, setSearchKeyword] = useState<string | null>(null);
    const dispatch = useDispatch();

    const [showGuidance, setShowGuidance] = useState(true);

    useEffect(() => {
        if (workspace !== undefined) {
            dispatch(getWorkspaceComments(workspace));
        }
    }, [workspace!.id]);

    if (workspace === undefined) {
        return (<Redirect to={"/not-found"}/>)
    }

    const onFilterKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(event.currentTarget.value)
    };

    const filterComments = () => {
        if (searchKeyword === null) {
            return workspace.comments;
        }

        return workspace.comments.filter((comment: Comment) => {
            return comment.name.indexOf(searchKeyword) > -1;
        });
    };

    return (
        <>
            <Header>
                <img src={workspace.headerImage} />
                <div className={"heading"}>
                    <div className={"icon"}>
                        <WorkspaceIcon type={workspace.type} size={"3x"} color={Colors.grayMedium} />
                    </div>
                    <div className={"desc"}>
                        <div className={"title"}>
                            <span>{workspace.name}</span>
                            <FontAwesomeIcon icon={faCog} size={"lg"} />
                        </div>
                        <div className={"memo"}>
                            Workspace purpose and a bit of context. This much needed description is here to remind people where they are, if they are new or have poor memory.
                        </div>
                    </div>
                </div>
            </Header>
            <Guidance>
                <div className={"header"}>
                    <span>Start working on corporate matters</span>
                    <span className={"toggle"} onClick={() => setShowGuidance(!showGuidance)}>
                        {showGuidance ? 'Hide' : 'Show'}
                    </span>
                </div>
                {showGuidance &&
                    <div className={"cards"}>
                        <div className={"card"}>
                            <FontAwesomeIcon icon={faBuilding} color={Colors.blue} size={"3x"} />
                            <div className={"title"}>Explore your <b>entities</b></div>
                            <div className={"desc"}>
                                Take a few minutes to look at the most important elements and specificities of your entities.
                            </div>
                            <FontAwesomeIcon className={"bgIcon"} icon={faBuilding} size={"7x"} color={Colors.whiteDark} />
                        </div>
                        <div className={"card"}>
                            <FontAwesomeIcon icon={faSitemap} color={Colors.blue} size={"3x"} />
                            <div className={"title"}>Structure the <b>ownership</b></div>
                            <div className={"desc"}>
                                Get a clear view of the ownership by looking at the relations between individuals and entities.
                            </div>
                            <FontAwesomeIcon className={"bgIcon"} icon={faSitemap} size={"7x"} color={Colors.whiteDark} />
                        </div>
                        <div className={"card"}>
                            <FontAwesomeIcon icon={faCalendar} color={Colors.blue} size={"3x"} />
                            <div className={"title"}>Define the <b>calendar</b></div>
                            <div className={"desc"}>
                                Prepare future events by creating detailed plans around the life of your entity.
                            </div>
                            <FontAwesomeIcon className={"bgIcon"} icon={faCalendar} size={"7x"} color={Colors.whiteDark} />
                        </div>
                    </div>
                }
            </Guidance>

            {!workspace.commentsLoading &&
                <CommentsContainer>
                    <div className={"header"}>
                        Latest updates
                        <div>
                            <SearchInput>
                                <input type={"text"} placeholder={"Filter by title..."} onChange={onFilterKeywordChange}/>
                                <FontAwesomeIcon icon={faSearch} />
                            </SearchInput>
                            <ButtonComponent title={"Followed"} fsIcon={faSatelliteDish} bgColor={Colors.transparent} color={Colors.blue2} borderColor={Colors.transparent}/>
                        </div>
                    </div>
                    <div className={"tags"}>
                        <Button active={true} shadow={true}>All</Button>
                        <Button active={true} shadow={true} bgColor={Colors.greenLight} color={Colors.green}>
                            <ButtonIcon icon={faBuilding}/>
                            SAS
                        </Button>
                        <Button active={true} shadow={true} bgColor={Colors.blueLight} color={Colors.blueMedium}>
                            <ButtonIcon icon={faBuilding}/>
                            SARL
                        </Button>
                        <Button active={true} shadow={true} bgColor={Colors.orangeLight} color={Colors.orange}>
                            <ButtonIcon icon={faBuilding}/>
                            Secondary business
                        </Button>
                        <Button active={true} shadow={true} bgColor={Colors.grayBlue} color={Colors.grayBlue2}>
                            <ButtonIcon icon={faUsers}/>
                            Communities
                        </Button>
                        <Button active={true} shadow={true} bgColor={Colors.grayLight} color={Colors.grayBlue2}>
                            <ButtonIcon icon={faFileSignature}/>
                            POA
                        </Button>
                        <Button active={true} shadow={true} bgColor={Colors.white} color={Colors.grayBlue2}>
                            <ButtonIcon icon={faPoll}/>
                            Survey
                        </Button>
                        <Button active={true} shadow={true} bgColor={Colors.white}>...</Button>
                    </div>
                    <CommentsList comments={filterComments()} perPage={10} />
                </CommentsContainer>
            }
        </>
    );
};

export default WorkspaceView;


