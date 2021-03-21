import React from "react";
import {Segment, SegmentGroup} from "semantic-ui-react";

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
            <SegmentGroup horizontal={false}>
                {this.props.Values.map(param =>
                    <SegmentGroup horizontal={true}>
                        <Segment>
                            {param.name}
                        </Segment>
                        <Segment>
                            {param.value}
                        </Segment>
                    </SegmentGroup>)}
            </SegmentGroup>)
    }
}