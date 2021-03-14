import React, {useState} from 'react';
import './MemristorParams.css';
import info from "./../const_data/info.json";
import {Dropdown, DropdownItemProps, DropdownProps} from "semantic-ui-react";

export type MemristorParam =
{
    value: number;
    name: string;
}

export type MemristorParamsProps =
{
    id: number;
    name: string;
    description: string;
    url: string;
    params: MemristorParam[];
}

export default class MemristorParams extends React.Component<any, MemristorParamsProps>
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
            <h1>
                Название модели мемристора
            </h1>
            <Dropdown
                text={this.state.name}
                placeholder='State'
                search selection options={this._memristorSelectionItems}
                onChange={this.dropdownChange}
            />
            <h1>
                Описание модели мемристора
            </h1>
            <h2>
                <a href={this.state.url}>
                    {this.state.description}
                </a>
            </h2>
        </div>);
}


