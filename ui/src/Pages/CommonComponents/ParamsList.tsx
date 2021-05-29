import React from "react";
import {Segment, SegmentGroup} from "semantic-ui-react";
import {Param} from "../../State/InformationContracts";
import PropsWrapper from "../../PropsWrapper";

const ParamsList = (props: PropsWrapper<Param[]>) =>
            <div className='params-list'>
                <SegmentGroup size='mini'>
                    {props.Data.map(param =>
                        <SegmentGroup horizontal={true}>
                            <Segment attached='top'>
                                {param.name}
                            </Segment>
                            <Segment attached='top'>
                                {param.value}
                            </Segment>
                        </SegmentGroup>)}
                </SegmentGroup>
            </div>;

export default ParamsList;