import React from 'react';
import './MemristorParams.css';
import info from "./../const_data/info.json";
import {Button, Dropdown, DropdownItemProps, DropdownProps, Segment, SegmentGroup} from "semantic-ui-react";
import ParamsList, {Param} from "./ParamsList";

export type MemristorParamsState =
{
    id: number;
    name: string;
    description: string;
    url: string;
    params: Param[];
}

export default class MemristorParams extends React.Component<any, MemristorParamsState>
{
    private _modelMemristors = info.model_memristors;
    private _memristorSelectionItems : DropdownItemProps[];

    constructor(props: any)
    {
        super(props);
        this.state = this._modelMemristors[0];
        this._memristorSelectionItems = this._modelMemristors.map(model =>
        {
            return {key: model.id, text: model.name, value: model.id }
        });
        this.dropdownChange = this.dropdownChange.bind(this);
        
    }

    private dropdownChange (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps)
    {
        if(typeof data.value == "number")
        {
            const currentModel = this._modelMemristors
                .find(model => model.id == data.value);

            if(currentModel != undefined)
                this.setState(currentModel);
        }
    }

    render = () => (
        <div className="memrisotor-params-list">
            <h3>
                Название модели мемристора
            </h3>
            <Dropdown
                text={this.state.name}
                placeholder='State'
                search selection options={this._memristorSelectionItems}
                onChange={this.dropdownChange}
            />
            <h3>
                Описание модели мемристора
            </h3>
            <h4>
                <a href={this.state.url}>
                    {this.state.description}
                </a>
            </h4>
            <h3>
                Параметры модели мемристора
            </h3>
            <ParamsList Values={this.state.params}/>
            <Button icon='plus'/>
        </div>);
}


