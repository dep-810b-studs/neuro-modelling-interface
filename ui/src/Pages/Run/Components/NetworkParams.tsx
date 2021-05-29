import React from 'react';
import './NetworkParams.css';
import {Input} from "@material-ui/core";
import ParamsList from "../../CommonComponents/ParamsList";
import {Button} from "semantic-ui-react";
import {NeuralNetworkInfo} from "../../../State/InformationContracts";
import PropsWrapper from "../../../PropsWrapper";

export const NetworkParams = (props: PropsWrapper<NeuralNetworkInfo>) => (
    <div className='network-params'>
        <h3>
            Описание модели нейросети
        </h3>
        {props.Data.description}
        <h3>
            Количество эпох
        </h3>
        <Input placeholder={props.Data.n_epochs.toString()}/>
        <h3>
            Параметры модели нейросети
        </h3>
        <ParamsList Data={props.Data.params}/>
        <Button icon='plus'/>
    </div>
);

export default NetworkParams;