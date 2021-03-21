import React from 'react';
import './NetworkParams.css';
import info from "./../const_data/info.json";
import {Input} from "@material-ui/core";
import ParamsList from "./ParamsList";
import {Button} from "semantic-ui-react";

const networkParams = info.neural_network;

export const NetworkParams: React.FunctionComponent = () => (
    <div className='network-params'>
        <h3>
            Описание модели нейросети
        </h3>
        {networkParams.description}
        <h3>
            Количество эпох
        </h3>
        <Input placeholder={networkParams.n_epochs.toString()}/>
        <h3>
            Параметры модели нейросети
        </h3>
        <ParamsList Values={networkParams.params}/>
        <Button icon='plus'/>
    </div>
);

export default NetworkParams;