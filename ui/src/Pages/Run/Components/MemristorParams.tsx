import React from 'react';
import './MemristorParams.css';
import {Button, Dropdown, DropdownItemProps, DropdownProps} from "semantic-ui-react";
import ParamsList  from "../../CommonComponents/ParamsList";
import {MemristorInfo} from "../../../State/InformationContracts";
import PropsWrapper from "../../../PropsWrapper";

export default class MemristorParams extends React.Component<PropsWrapper<MemristorInfo[]>, MemristorInfo> {
    private _memristorSelectionItems : DropdownItemProps[];

    constructor(props: PropsWrapper<MemristorInfo[]>) {
        super(props);
        this.state = this.props.Data[0];
        this._memristorSelectionItems = this.props.Data.map(model => {
            return {key: model.id, text: model.name, value: model.id }
        });
        this.dropdownChange = this.dropdownChange.bind(this);
    }

    private dropdownChange (event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) {
        if(typeof data.value == "number") {
            const currentModel = this.props.Data
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
            <ParamsList Data={this.state.params}/>
            <Button icon='plus'/>
        </div>);
}


