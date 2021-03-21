import React from "react";
import {List, Segment, SegmentGroup} from "semantic-ui-react";

export type Param =
{
    name: string;
    value: number;
}

export type ParamsListProps =
{
    Values: Param[]
}

export default class ParamsList extends React.Component<ParamsListProps, any>
{
    render()
    {
        return (
            <div className='params-list'>
                <SegmentGroup size='mini'>
                    {this.props.Values.map(param =>
                        <SegmentGroup horizontal={true}>
                            <Segment attached='top'>
                                {param.name}
                            </Segment>
                            <Segment attached='top'>
                                {param.value}
                            </Segment>
                        </SegmentGroup>)}
                </SegmentGroup>
            </div>
        );
    }
}