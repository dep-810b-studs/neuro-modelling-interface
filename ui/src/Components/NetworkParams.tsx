import React from 'react';
import './NetworkParams.css';
import info from "./../const_data/info.json";
import {Input} from "@material-ui/core";
import {Segment, SegmentGroup} from "semantic-ui-react";
import ParamsList from "./ParamsList";

const networkParams = info.neural_network;

export const NetworkParams: React.FunctionComponent = () => (
    <div className="nertwork-params-list">
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
    </div>
);

export default NetworkParams;